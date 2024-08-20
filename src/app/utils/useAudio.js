import { useState, useEffect } from 'react'
import noteDetect from './noteDetection'

async function audioToBase64(source) {
  if (source instanceof File || source instanceof Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(source);
    });
  }
  try {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Failed to fetch the audio from URL: ${source}`);
    }
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting audio to Base64:', error);
    return null;
  }
}

async function getAudioFrequencyData(source, fft) {
    let arrayBuffer;
    if (typeof source === 'string') {
        const response = await fetch(source);
        arrayBuffer = await response.arrayBuffer();
    } else if (source instanceof Blob || source instanceof File) {
        arrayBuffer = await source.arrayBuffer();
    } else {
        throw new Error('Unsupported audio source type');
    }

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const offlineContext = new OfflineAudioContext(
        audioBuffer.numberOfChannels,
        audioBuffer.length,
        audioBuffer.sampleRate
    );
    const sourceNode = offlineContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    const analyser = offlineContext.createAnalyser();
    analyser.fftSize = fft || 2048;
    sourceNode.connect(analyser);
    analyser.connect(offlineContext.destination);
    sourceNode.start();
    await offlineContext.startRendering();
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength * Math.ceil(audioBuffer.duration));
    for (let i = 0; i < Math.ceil(audioBuffer.duration); i++) {
        analyser.getFloatFrequencyData(dataArray.subarray(i * bufferLength, (i + 1) * bufferLength));
    }
    return { dataArray, audioDuration: audioBuffer.duration };
}

export default function useAudio(src, fftSize = 64, detector = false) {
  const [isPlaying, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  const [audioNode, setAudioNode] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [audioSource, setAudioSource] = useState(null);
  const [bufferLength, setBufferLength] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [microphoneSource, setMicrophoneSource] = useState(null);
  const [audioFrequencyData, setAudioFrequencyData] = useState(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime,setAudioCurrentTime] = useState(0);
  const [audioVolume,setAudioVolume] = useState(0);
  const [detectedNotes,setDetectedNotes] = useState([]);

  const getAudioBase64 = async (src) => {
    setAudioNode(new Audio(await audioToBase64(src)));
  }

  const setAudioFrequency = async (src) => {
    	const { dataArray: frequency, audioDuration } = await getAudioFrequencyData(src, fftSize);
	setAudioFrequencyData(frequency);
	setAudioDuration(audioDuration);
  }

  const play = () => {
    if (audioNode == null) return;
    audioNode.play();
    setPlaying(true);
  }

  const pause = () => {
    if (audioNode == null) return;
    audioNode.pause();
    setPlaying(false);
  }

  const toggleAudio = () => {
    if (audioNode == null) return;
    if (audioNode.ended || audioNode.paused) {
      audioNode.play();
      setPlaying(true);
    } else {
      audioNode.pause();
      setPlaying(false);
    }
  }

  const stopAudio = () => {
    if (audioNode == null) return;
    audioNode.pause();
    audioNode.currentTime = 0;
    setPlaying(false);
  }

  const setVolume = (volume) => {
    if (audioNode == null || isNaN(volume)) return;
    const vol = volume / 100;
    audioNode.volume = vol;
    setAudioVolume(vol * 100)
  }

  const captureMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);

      const TEMP_AUDIO_CONTEXT = audioContext || new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(TEMP_AUDIO_CONTEXT);

      const TEMP_MICROPHONE_SOURCE = TEMP_AUDIO_CONTEXT.createMediaStreamSource(stream);
      setMicrophoneSource(TEMP_MICROPHONE_SOURCE);

      const TEMP_ANALYZER = TEMP_AUDIO_CONTEXT.createAnalyser();
      setAnalyzer(TEMP_ANALYZER);

      TEMP_MICROPHONE_SOURCE.connect(TEMP_ANALYZER);
      TEMP_ANALYZER.fftSize = fftSize;

      const TEMP_BUFFER_LENGTH = TEMP_ANALYZER.frequencyBinCount;
      setBufferLength(TEMP_BUFFER_LENGTH);
      setDataArray(new Uint8Array(TEMP_BUFFER_LENGTH));
    } catch (error) {
      console.error('Error capturing microphone audio:', error);
    }
  }

  const muteMicrophone = () => {
    if (mediaStream) {
      mediaStream.getAudioTracks().forEach(track => (track.enabled = false));
      setMute(true);
    }
  }

  const unmuteMicrophone = () => {
    if (mediaStream) {
      mediaStream.getAudioTracks().forEach(track => (track.enabled = true));
      setMute(false);
    }
  }

  const stopMicrophone = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
    if (audioContext) {
      audioContext.close();
      setAudioContext(null);
      setAnalyzer(null);
      setAudioSource(null);
      setMicrophoneSource(null);
      setBufferLength(null);
      setDataArray(null);
    }
    if(detector){
      setDetectedNotes([])
    }
  }

  useEffect(() => {
    if (src !== null) {
      getAudioBase64(src);
      setAudioFrequency(src);
    }
  }, [src]);

  useEffect(() => {
    if (audioNode !== null) {
      audioNode.addEventListener("ended", stopAudio);
      setAudioVolume(audioNode.volume * 100)
      setInterval(() => {
	setAudioCurrentTime(audioNode.currentTime);
      },100)
    }
    return () => {
      if (audioNode == null) return;
      audioNode.removeEventListener("ended", stopAudio);
    }
  }, [audioNode]);

  useEffect(() => {
    if (!isPlaying) return;
    let TEMP_AUDIO_SOURCE = audioSource;
    let TEMP_ANALYZER = analyzer;
    let TEMP_AUDIO_CONTEXT = audioContext;
    let TEMP_BUFFER_LENGTH = bufferLength;

    if (audioContext == null) {
      TEMP_AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(TEMP_AUDIO_CONTEXT);
    }
    if (audioSource == null && audioNode !== null) {
      TEMP_AUDIO_SOURCE = TEMP_AUDIO_CONTEXT.createMediaElementSource(audioNode);
      setAudioSource(TEMP_AUDIO_SOURCE);
    }
    if (analyzer == null) {
      TEMP_ANALYZER = TEMP_AUDIO_CONTEXT.createAnalyser();
      setAnalyzer(TEMP_ANALYZER);
    }
    if (TEMP_AUDIO_SOURCE) {
      TEMP_AUDIO_SOURCE.connect(TEMP_ANALYZER);
      TEMP_AUDIO_SOURCE.connect(TEMP_AUDIO_CONTEXT.destination);
    }
    TEMP_ANALYZER.fftSize = fftSize;
    TEMP_BUFFER_LENGTH = TEMP_ANALYZER.frequencyBinCount;
    setBufferLength(TEMP_BUFFER_LENGTH);
    setDataArray(new Uint8Array(TEMP_BUFFER_LENGTH));
  }, [isPlaying, src, fftSize]);

  useEffect(() => {
    const updatePitch = () => {
      if((microphoneSource == null && !isPlaying) || (isMute && mediaStream !== null)) return
	analyzer.getByteFrequencyData(dataArray)
      	const notes = noteDetect(dataArray,audioContext.sampleRate)
      	if(notes !== null) setDetectedNotes(notes)
	requestAnimationFrame(updatePitch)
    }
    if((dataArray !== null || analyzer !== null || audioContext !== null) && detector) updatePitch()
  },[dataArray,isPlaying,analyzer, isMute, audioContext,mediaStream,microphoneSource,detector])

  return {
    audioNode,
    audioContext,
    audioSource,
    isPlaying,
    play,
    pause,
    toggleAudio,
    stopAudio,
    setVolume,
    analyzer,
    bufferLength,
    dataArray,
    audioToBase64,
    captureMicrophone,
    muteMicrophone,
    unmuteMicrophone,
    stopMicrophone,
    microphoneSource,
    mediaStream,
    isMute,
    audioFrequencyData,
    audioDuration,
    audioCurrentTime,
    audioVolume,
    detectedNotes
  };
}
