import { useEffect, cloneElement, useState } from "react";
import useAudio from "../../utils/useAudio";
import useCanvas from "../../utils/useCanvas";
import Animation from "../../utils/visualizer/player/Animation";
import { DrawAnimation } from "../../utils/visualizer/Draw";
import formatTime from "../../utils/formatTime";

export default function AudioPlayer({
  src = null,
  clickableCanvas = false,
  width = 500,
  height = 100,
  controls = true,
  pauseButton = "Pause",
  playButton = "Play",
  dataCount = 64,
  className = "",
  controlsClassName = "",
  constrolsStyle = false,
  customVolume = false,
  volumeControlStyle = {},
  volumeControlClassName = "",
  volumeLabelStyle = {},
  volumeLabelClassName = "",
  volumeLabelIndicator = "%",
  volumeLevel = false,	
  enableDuration = false,
  durationClassName = "",
  durationStyle = false,
  enableCurrentTime = false,
  currentTimeClassName = "",
  currentTimeStyle = false,
  hideVolume = true,
  disableVolume = false,
  style = false,
  canvasClassName = "",
  canvasStyle = false,
  toggleClassName = "",
  toggleStyle = false,
  stopButton = false,
  customStopButton = false,
  barWidth = false,
  barHeight = false,
  horizontalOffset = 0,
  color = "black",
  colorFunction = false,
  customVisualizer = false,
  customFunction = false,
}) {
  const {
    isPlaying,
    toggleAudio,
    analyzer,
    bufferLength,
    dataArray,
    audioDuration,
    audioCurrentTime,
    setVolume,
    audioVolume,
    stopAudio,
    audioNode,
  } = useAudio(src, dataCount);
  const { Canvas, canvasContext, canvasNode } = useCanvas({
    width,
    height,
  });
  const [trackTime,setTrackTime] = useState(formatTime(audioCurrentTime ? audioCurrentTime : 0))

  const CustomStopButton = () => {
    	if(!customStopButton) return;
	return cloneElement(customStopButton, {
	  	onClick: stopAudio,
	  });
	};

  const CustomVolume = () => {
    	if(!customVolume) return;
	const Volume = cloneElement(customVolume, {
	  	onChange: (e) =>{ setVolume(e.target.value) },
	  	value: audioVolume,
	  	min: 0,
	  	max: 100,
	  });
    	return (
	  <div className={volumeControlClassName ? volumeControlClassName : ""} 
	  style={volumeControlStyle ? volumeControlStyle : ""}>
		{Volume}
		 {volumeLevel ? (
		  <p 
		   className={volumeLabelClassName ? volumeLabelClassName : ""} 
		   style={volumeLabelStyle ? volumeLabelStyle : {}}>{parseInt(audioVolume).toFixed(0)}{volumeLabelIndicator}</p>
		 ) :  null}
	  </div>
	)
      };



  useEffect(() => {
    if(disableVolume) setVolume(0);
    if (customVisualizer) {
      DrawAnimation({
        isPlaying,
        analyzer,
        bufferLength,
        dataArray,
        canvasNode,
        canvasContext,
        color,
        colorFunction,
        barWidth,
        barHeight,
        x: horizontalOffset,
        visualizer: customVisualizer,
	type: "player",
	audioDuration,
	audioNode
      });
    } else {
      Animation({
	isPlaying,
	analyzer,
	bufferLength,
	dataArray,
	canvasNode,
	canvasContext,
	color,
	colorFunction,
	barWidth,
	barHeight,
	x: horizontalOffset,
	type: "player",
	audioDuration,
	audioNode
      });
    }
  }, [
    isPlaying,
    analyzer,
    bufferLength,
    dataArray,
    canvasNode,
    canvasContext,
    color,
    colorFunction,
    barWidth,
    barHeight,
    horizontalOffset,
    customVisualizer,
    disableVolume,
    setVolume,
    audioDuration,
    audioNode,
  ]);

  useEffect(() => {
	if(customFunction) customFunction({audioNode,audioDuration, dataArray, bufferLength})
  },[customFunction, audioNode, audioDuration, dataArray, bufferLength])


  useEffect(() => {
    	if(!audioCurrentTime) return
	setTrackTime(formatTime(audioCurrentTime ? audioCurrentTime : 0))
  },[audioCurrentTime])


  return (
    <div className={className ? className : ""} style={style ? style : {}}>
      <Canvas
    	onClick={clickableCanvas ? toggleAudio : null}
        className={canvasClassName ? canvasClassName : ""}
        style={canvasStyle ? canvasStyle : {}}
      />
      {controls ? (
	<div className={controlsClassName ? controlsClassName : ""} style={constrolsStyle ? constrolsStyle : {}}>
	  <button
	    className={toggleClassName ? toggleClassName : ""}
	    style={toggleStyle ? toggleStyle : {}}
	    onClick={toggleAudio}
	  >
	    {isPlaying ? pauseButton : playButton}
	  </button>
	  {stopButton ? (
	    <>
	      { customStopButton ? <CustomStopButton/> :  <button onClick={stopAudio}>Stop</button> }
	    </>
	  ) : null}
	 {
	   hideVolume ? null : (
	     <>
	       { customVolume ? <CustomVolume/> : (
		 <>
		  <input type="range" min={0} max={100} value={audioVolume} onChange={(e) => {
			  setVolume(e.target.value);
		  }} />
		 {volumeLevel ? (
		  <p>{parseInt(audioVolume).toFixed(0)}%</p>
		 ) :  null}
		 </>
	       ) }
	     </>
	   )
	 }
	{
	  enableCurrentTime ? (
	    <p className={currentTimeClassName ? currentTimeClassName : ""} 
	    style={currentTimeStyle ? currentTimeStyle : {}}>
	    	{trackTime}
	    </p>
	  ) : null
	}
	{
	  enableDuration ? (
	    <p className={durationClassName ? durationClassName : ""} 
	    style={durationStyle ? durationStyle : {}}>
	    	{formatTime(audioDuration ? audioDuration : 0)}
	    </p>
	  ) : null
	}
	</div>
      ) : null}
    </div>
  );
}
