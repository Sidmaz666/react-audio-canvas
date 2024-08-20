function noteFromPitch( frequency ) {
	const noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}

function frequencyFromNoteNumber( note ) {
	return 440 * Math.pow(2,(note-69)/12);
}

function centsOffFromPitch( frequency, note ) {
	return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
}

export default function detectNotes(dataArray, sampleRate = 44100) {
    const size = dataArray.length;
    const threshold = 0.3;
    const noteStrings = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    let autoCorrelation = new Float32Array(size);
    let notes = [];

    for (let lag = 0; lag < size; lag++) {
        let sum = 0;
        for (let i = 0; i < size - lag; i++) {
            sum += (dataArray[i] - 128) * (dataArray[i + lag] - 128);
        }
        autoCorrelation[lag] = sum;
    }

    for (let i = 1; i < size - 1; i++) {
        if (autoCorrelation[i] > threshold) {
            if (autoCorrelation[i] > autoCorrelation[i - 1] && autoCorrelation[i] > autoCorrelation[i + 1]) {
                let peakIndex = i;
                let confidence = autoCorrelation[i] / Math.max(...autoCorrelation);

                const fundamentalFreq = sampleRate / peakIndex;
                const noteNumber = noteFromPitch(fundamentalFreq);
                const note = noteStrings[noteNumber % 12];
                const octave = Math.floor((noteNumber - 12) / 12);

                const detune = centsOffFromPitch(fundamentalFreq, noteNumber);

                notes.push({
                    frequency: fundamentalFreq.toFixed(2),
                    pitch: `${note}${octave}`,
		    octave: octave,
                    confidence: confidence.toFixed(2),
                    note: note,
                    cents: detune,
                });
            }
        }
    }
    return notes.length > 0 ? notes : null;
}

