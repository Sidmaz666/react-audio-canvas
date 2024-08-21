# react-audio-canvas

<img src="https://github.com/user-attachments/assets/6f1d7fb8-b752-4ebe-be65-12f912d0ad77" width="100%"/>
<br/><br/>

The React library offers components like `<AudioPlayer/>`, `<Audio/>`, and `<AudioStream/>` for versatile audio playback, visualization, and streaming, including support for dynamic and static visualizations. Its hooks, such as `useAudio`, `useCanvas`, and `detectNotes`, provide comprehensive audio handling, canvas management, and musical note detection features.

# Installation

```javascript
  npm install react-audio-canvas
```

# Components

## 1. `<AudioPlayer/>` 

The `<AudioPlayer/>` component is a customizable audio player with various options for controlling playback, visualization, volume, and more. It shows Audio visualization while the audio is playing, the visualization is dynamic. It allows you to integrate custom visualizers, buttons, and volume controls. Below is a detailed documentation of the props available for this component.

## Props

| Prop Name           | Default Value   | Valid Value / Description                                                                                                                                                              |
|---------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **src**             | `null`          | The audio source URL as a string.                                                                                                                                                      |
| **clickableCanvas** | `false`         | `boolean` - If true, clicking on the canvas toggles audio playback.                                                                                                                    |
| **width**           | `500`           | `number` - The width of the canvas element.                                                                                                                                            |
| **height**          | `100`           | `number` - The height of the canvas element.                                                                                                                                           |
| **controls**        | `true`          | `boolean` - If true, playback controls are displayed.                                                                                                                                  |
| **pauseButton**     | `"Pause"`       | `string` or `React.Component` - Text or a custom React component to display for the pause button.                                                                                      |
| **playButton**      | `"Play"`        | `string` or `React.Component` - Text or a custom React component to display for the play button.                                                                                       |
| **dataCount**       | `64`            | `number` - The number of data points used in the visualizer.                                                                                                                           |
| **className**       | `""`            | `string` - Custom CSS classes for the root `div` element.                                                                                                                              |
| **controlsClassName** | `""`          | `string` - Custom CSS classes for the controls `div` element.                                                                                                                          |
| **constrolsStyle**  | `false`         | `object` - Inline styles for the controls `div` element.                                                                                                                               |
| **customVolume**    | `false`         | `React.Component` - A custom volume control component. Example: `<input type="range" min={0} max={100} />`.                                                                             |
| **volumeLevel**     | `false`         | `boolean` - If true, the current volume level is displayed as a percentage.                                                                                                            |
| **enableDuration**  | `false`         | `boolean` - If true, the audio duration is displayed.                                                                                                                                  |
| **durationClassName** | `""`          | `string` - Custom CSS classes for the duration element.                                                                                                                                |
| **durationStyle**   | `false`         | `object` - Inline styles for the duration element.                                                                                                                                     |
| **enableCurrentTime** | `false`       | `boolean` - If true, the current playback time is displayed.                                                                                                                           |
| **currentTimeClassName** | `""`      | `string` - Custom CSS classes for the current time element.                                                                                                                            |
| **currentTimeStyle** | `false`        | `object` - Inline styles for the current time element.                                                                                                                                 |
| **hideVolume**      | `true`          | `boolean` - If true, the volume control is hidden.                                                                                                                                     |
| **disableVolume**   | `false`         | `boolean` - If true, the volume is set to 0.                                                                                                                                           |
| **style**           | `false`         | `object` - Inline styles for the root `div` element.                                                                                                                                   |
| **canvasClassName** | `""`            | `string` - Custom CSS classes for the canvas element.                                                                                                                                  |
| **canvasStyle**     | `false`         | `object` - Inline styles for the canvas element.                                                                                                                                       |
| **toggleClassName** | `""`            | `string` - Custom CSS classes for the play/pause button.                                                                                                                               |
| **toggleStyle**     | `false`         | `object` - Inline styles for the play/pause button.                                                                                                                                    |
| **stopButton**      | `false`         | `boolean` - If true, a stop button is displayed.                                                                                                                                       |
| **customStopButton** | `false`        | `React.Component` - A custom stop button component. Example: `<button>Stop</button>`.                                                                                                  |
| **barWidth**        | `false`         | `number` - Width of each bar in the visualizer.                                                                                                                                        |
| **barHeight**       | `false`         | `number` - Height of each bar in the visualizer.                                                                                                                                       |
| **horizontalOffset** | `0`            | `number` - Horizontal offset for the visualizer drawing.                                                                                                                               |
| **color**           | `"black"`       | `string` - Default color for the visualizer bars.                                                                                                                                      |
| **colorFunction**   | `false`         | `function` - Custom function to determine the color of each bar. Example: `({barHeight, barWidth, index, dataArray, audioDuration}) => { return ``rgb(${barHeight * index},0,0)``; }`.                                                                       |
| **customVisualizer** | `false`        | `function` - Custom visualizer function. Example: `({barHeight,barWidth, canvasContext,x,color,colorFunction, audioDuration, dataArray, bufferLength, canvasNode }) => { canvasContext.fillRect(x, y, width, height); }`.                                                                       |
| **customFunction**  | `false`         | `function` - Custom function that receives audio data. Example: `({audioNode,audioDuration, dataArray, bufferLength}) => { console.log({audioNode,audioDuration, dataArray, bufferLength}); }`.                                                                                 |

## Example Usage

```jsx
import {AudioPlayer} from "react-audio-canvas"

const CustomVisualizer = ({
  barHeight,
  barWidth,
  canvasContext,
  x,
  color,
  colorFunction,
  audioDuration,
  dataArray,
  bufferLength,
  canvasNode,
}) => {
  // Custom visualizer logic
  for (let i = 0; i < bufferLength; i++) {
    // Drawing bars
    barHeight = Math.abs(dataArray[i]) / 2.5;
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, canvasNode.height - barHeight, barWidth, barHeight);
    x += barWidth;
  }
};

<AudioPlayer
  src="path/to/audio/file.mp3"
  width={600}
  height={150}
  customVisualizer={CustomVisualizer}
  pauseButton={<button>Pause Audio</button>}
  playButton={<button>Play Audio</button>}
  customStopButton={<button>Stop Audio</button>}
  hideVolume={false}
  customVolume={<input type="range" min={0} max={100} />}
/>
```

## Structure

```pug
- div
  - className: (dynamic, based on `className` prop)
  - style: (dynamic, based on `style` prop)
  
  |__ Canvas
      - onClick: (optional, based on `clickableCanvas` prop)
      - className: (dynamic, based on `canvasClassName` prop)
      - style: (dynamic, based on `canvasStyle` prop)
      
  |__ (optional) div
      - className: (dynamic, based on `controlsClassName` prop)
      - style: (dynamic, based on `constrolsStyle` prop)
      
      |__ button
          - className: (dynamic, based on `toggleClassName` prop)
          - style: (dynamic, based on `toggleStyle` prop)
          - onClick: toggleAudio
          - Text: (Play/Pause based on `isPlaying`)
          
      |__ (optional) button
          - onClick: stopAudio
          - Text: Stop
          
          |__ (optional) CustomStopButton
              - onClick: stopAudio

      |__ (optional) div (for custom volume control)
          - className: (dynamic, based on `className` prop)
          - style: (dynamic, based on `style` prop)
          
          |__ input[type="range"]
              - min: 0
              - max: 100
              - value: audioVolume
              - onChange: setVolume
              
          |__ (optional) p
              - className: (dynamic, based on `labelClassName` prop)
              - style: (dynamic, based on `labelStyle` prop)
              - Text: (audioVolume percentage + `labelIndicator`)
              
      |__ (optional) input[type="range"]
          - min: 0
          - max: 100
          - value: audioVolume
          - onChange: setVolume
          
          |__ (optional) p
              - Text: (audioVolume percentage)

      |__ (optional) p (for current time display)
          - className: (dynamic, based on `currentTimeClassName` prop)
          - style: (dynamic, based on `currentTimeStyle` prop)
          - Text: (formatted current time)

      |__ (optional) p (for duration display)
          - className: (dynamic, based on `durationClassName` prop)
          - style: (dynamic, based on `durationStyle` prop)
          - Text: (formatted duration)
```

## 2. `<Audio/>`

The `<Audio/>` component is a versatile and customizable audio player with various options for controlling playback, visualization, volume, and more.It shows the full Audio visualization upon load, the visualization is not dynamic, it's more on like a spectrograph of the audio input.It allows integration with custom visualizers, buttons, and volume controls. Below is a detailed documentation of the props available for this component.

Props
-----

| Prop Name | Default Value | Valid Value / Description |
| --- | --- | --- |
| **src** | `null` | The audio source URL as a string. |
| **clickableCanvas** | `false` | `boolean` - If true, clicking on the canvas toggles audio playback. |
| **width** | `500` | `number` - The width of the canvas element. |
| **height** | `100` | `number` - The height of the canvas element. |
| **controls** | `true` | `boolean` - If true, playback controls are displayed. |
| **pauseButton** | `"Pause"` | `string` or `React.Component` - Text or a custom React component to display for the pause button. |
| **playButton** | `"Play"` | `string` or `React.Component` - Text or a custom React component to display for the play button. |
| **dataCount** | `64` | `number` - The number of data points used in the visualizer. |
| **className** | `""` | `string` - Custom CSS classes for the root `div` element. |
| **controlsClassName** | `""` | `string` - Custom CSS classes for the controls `div` element. |
| **constrolsStyle** | `false` | `object` - Inline styles for the controls `div` element. |
| **customVolume** | `false` | `React.Component` - A custom volume control component. Example: `<input type="range" min={0} max={100} />`. |
| **volumeLevel** | `false` | `boolean` - If true, the current volume level is displayed as a percentage. |
| **enableDuration** | `false` | `boolean` - If true, the audio duration is displayed. |
| **durationClassName** | `""` | `string` - Custom CSS classes for the duration element. |
| **durationStyle** | `false` | `object` - Inline styles for the duration element. |
| **enableCurrentTime** | `false` | `boolean` - If true, the current playback time is displayed. |
| **currentTimeClassName** | `""` | `string` - Custom CSS classes for the current time element. |
| **currentTimeStyle** | `false` | `object` - Inline styles for the current time element. |
| **hideVolume** | `true` | `boolean` - If true, the volume control is hidden. |
| **disableVolume** | `false` | `boolean` - If true, the volume is set to 0. |
| **style** | `false` | `object` - Inline styles for the root `div` element. |
| **canvasClassName** | `""` | `string` - Custom CSS classes for the canvas element. |
| **canvasStyle** | `false` | `object` - Inline styles for the canvas element. |
| **toggleClassName** | `""` | `string` - Custom CSS classes for the play/pause button. |
| **toggleStyle** | `false` | `object` - Inline styles for the play/pause button. |
| **stopButton** | `false` | `boolean` - If true, a stop button is displayed. |
| **customStopButton** | `false` | `React.Component` - A custom stop button component. Example: `<button onClick={stopAudio}>Stop</button>`. |
| **barWidth** | `false` | `number` - Width of each bar in the visualizer. |
| **barHeight** | `false` | `number` - Height of each bar in the visualizer. |
| **horizontalOffset** | `0` | `number` - Horizontal offset for the visualizer drawing. |
| **color** | `"black"` | `string` - Default color for the visualizer bars. |
| **colorFunction** | `false` | `function` - Custom function to determine the color of each bar. Example: `({barHeight, barWidth, index, dataArray, audioDuration}) => { return ``rgb(${barHeight * index},0,0)``; }`. |
| **customVisualizer** | `false` | `function` - Custom visualizer function. Example: `({barHeight,barWidth, canvasContext,x,color,colorFunction, audioDuration, dataArray, bufferLength, canvasNode }) => { canvasContext.fillRect(x, y, width, height); }`. |
| **customFunction** | `false` | `function` - Custom function that receives audio data. Example: `({audioNode,audioFrequencyData,audioDuration}) => { console.log({audioNode,audioFrequencyData,audioDuration}); }`. |

## Example Usage

```jsx
import {Audio} from "react-audio-canvas"

const CustomVisualizer =  ({
	barHeight,barWidth,canvasContext,x, color, colorFunction, dataArray,canvasNode
	}) => {
	if(dataArray == null) return
	for (let index = 0; index < dataArray?.length; index++) {
	  barHeight = canvasNode.height - Math.abs(dataArray[index]) / 2 ;
	  if(colorFunction) color = colorFunction({barHeight, barWidth, index, dataArray});
	  canvasContext.fillStyle = color;
	  canvasContext.fillRect(
	    x,
	    canvasNode.height - barHeight,
	    barWidth,
	    barHeight
	  );
	  x += barWidth;
	}
};

<Audio
  src="path/to/audio/file.mp3"
  width={600}
  height={150}
  customVisualizer={CustomVisualizer}
  pauseButton={<button>Pause Audio</button>}
  playButton={<button>Play Audio</button>}
  customStopButton={<button>Stop Audio</button>}
  hideVolume={false}
  customVolume={<input type="range" min={0} max={100} />}
/>
```

## Structure

```pug

- div
  - className: (dynamic, based on `className` prop)
  - style: (dynamic, based on `style` prop)
  
  |__ Canvas
      - onClick: (optional, based on `clickableCanvas` prop)
      - className: (dynamic, based on `canvasClassName` prop)
      - style: (dynamic, based on `canvasStyle` prop)
      
  |__ (optional) div
      - className: (dynamic, based on `controlsClassName` prop)
      - style: (dynamic, based on `constrolsStyle` prop)
      
      |__ button
          - className: (dynamic, based on `toggleClassName` prop)
          - style: (dynamic, based on `toggleStyle` prop)
          - onClick: toggleAudio
          - Text: (Play/Pause based on `isPlaying`)
          
      |__ (optional) button
          - onClick: stopAudio
          - Text: Stop
          
          |__ (optional) CustomStopButton
              - onClick: stopAudio

      |__ (optional) div (for custom volume control)
          - className: (dynamic, based on `className` prop)
          - style: (dynamic, based on `style` prop)
          
          |__ input[type="range"]
              - min: 0
              - max: 100
              - value: audioVolume
              - onChange: setVolume
              
          |__ (optional) p
              - className: (dynamic, based on `labelClassName` prop)
              - style: (dynamic, based on `labelStyle` prop)
              - Text: (audioVolume percentage + `labelIndicator`)
              
      |__ (optional) input[type="range"]
          - min: 0
          - max: 100
          - value: audioVolume
          - onChange: setVolume
          
          |__ (optional) p
              - Text: (audioVolume percentage)

      |__ (optional) p (for current time display)
          - className: (dynamic, based on `currentTimeClassName` prop)
          - style: (dynamic, based on `currentTimeStyle` prop)
          - Text: (formatted current time)

      |__ (optional) p (for duration display)
          - className: (dynamic, based on `durationClassName` prop)
          - style: (dynamic, based on `durationStyle` prop)
          - Text: (formatted duration)

```

## 3. `<AudioStream/>`

The `<AudioStream/>` component provides a customizable interface for streaming audio with various controls and visualizations. It supports microphone input, custom visualizations, and configurable buttons for controlling audio playback and visualization. Below is the detailed documentation of the props available for this component.

Props
-----

| Prop Name | Default Value | Valid Value / Description |
| --- | --- | --- |
| **clickableCanvas** | `false` | `boolean` - If true, clicking on the canvas toggles the microphone state (mute/unmute). |
| **width** | `500` | `number` - The width of the canvas element. |
| **height** | `100` | `number` - The height of the canvas element. |
| **controls** | `true` | `boolean` - If true, playback controls are displayed. |
| **muteButton** | `"Mute"` | `string` - Text to display for the mute button. |
| **unmuteButton** | `"Unmute"` | `string` - Text to display for the unmute button. |
| **dataCount** | `64` | `number` - The number of data points used in the visualizer. |
| **className** | `""` | `string` - Custom CSS classes for the root `div` element. |
| **controlsClassName** | `""` | `string` - Custom CSS classes for the controls `div` element. |
| **constrolsStyle** | `false` | `object` - Inline styles for the controls `div` element. |
| **style** | `false` | `object` - Inline styles for the root `div` element. |
| **canvasClassName** | `""` | `string` - Custom CSS classes for the canvas element. |
| **canvasStyle** | `false` | `object` - Inline styles for the canvas element. |
| **toggleClassName** | `""` | `string` - Custom CSS classes for the mute/unmute button. |
| **toggleStyle** | `false` | `object` - Inline styles for the mute/unmute button. |
| **stopButton** | `true` | `boolean` - If true, a stop button is displayed. |
| **customStopButton** | `false` | `React.Component` - A custom stop button component. Example: `<button>Stop</button>`. |
| **startButton** | `true` | `boolean` - If true, a start button is displayed. |
| **customStartButton** | `false` | `React.Component` - A custom start button component. Example: `<button>Start</button>`. |
| **barWidth** | `false` | `number` - Width of each bar in the visualizer. |
| **barHeight** | `false` | `number` - Height of each bar in the visualizer. |
| **horizontalOffset** | `0` | `number` - Horizontal offset for the visualizer drawing. |
| **color** | `"black"` | `string` - Default color for the visualizer bars. |
| **colorFunction** | `false` | `function` - Custom function to determine the color of each bar. Example: `({barHeight, barWidth, index, dataArray, audioDuration}) => { return \`rgb(${barHeight * index},0,0)`; }`. |
| **customVisualizer** | `false` | `function` - Custom visualizer function. Example: `({barHeight, barWidth, canvasContext, x, color, colorFunction, audioDuration, dataArray, bufferLength, canvasNode }) => { canvasContext.fillRect(x, y, width, height); }`. |
| **customFunction** | `false` | `function` - Custom function that receives audio data. Example: `({audioNode,microphoneSource, mediaStream}) => { console.log({audioNode,microphoneSource, mediaStream}); }`. |

## Example Usage

```jsx

import {AudioStream} from "react-audio-canvas";

<AudioStream
  width={600}
  height={150}
  muteButton={<button>Mute Audio</button>}
  unmuteButton={<button>Unmute Audio</button>}
  colorFunction={({ barHeight, barWidth, index }) => `rgb(${barHeight * index},0,0)`}
/>

```

## Structure

```pug

- div
  - className: (dynamic, based on `className` prop)
  - style: (dynamic, based on `style` prop)

  |__ Canvas
      - onClick: (optional, based on `clickableCanvas` prop)
      - className: (dynamic, based on `canvasClassName` prop)
      - style: (dynamic, based on `canvasStyle` prop)

  |__ (optional) div
      - className: (dynamic, based on `controlsClassName` prop)
      - style: (dynamic, based on `constrolsStyle` prop)

      |__ (optional) button
          - onClick: (if `customStartButton` is false) captureMicrophone
          - Text: Start
          
          |__ (optional) CustomStartButton
              - onClick: captureMicrophone

      |__ button
          - className: (dynamic, based on `toggleClassName` prop)
          - style: (dynamic, based on `toggleStyle` prop)
          - onClick: toggleMic
          - Text: (isMute ? unmuteButton : muteButton)

      |__ (optional) button
          - onClick: (if `customStopButton` is false) stopMicrophone
          - Text: Stop

          |__ (optional) CustomStopButton
              - onClick: stopMicrophone

```

### Notes

-   The valid values for `dataCount` prop are :- `32`,`64`,`128`,`256`, `512`, `1024`, `2048` and `4096`.

# Hooks

# 1. `useAudio` 

The `useAudio` hook provides a comprehensive set of functionalities for handling audio in a React application. This hook supports playing, pausing, stopping, and controlling audio, as well as capturing and analyzing audio from a microphone. It also includes utilities for converting audio to Base64 and detecting musical notes.

## API

### `useAudio(src, fftSize = 64, detector = false)`

#### Parameters

-   `src` (`string | File | Blob`): The source of the audio. Can be a URL, File, or Blob.
-   `fftSize` (`number`): The size of the FFT used for frequency analysis. Defaults to `64`.
-   `detector` (`boolean`): If `true`, enables pitch detection. Defaults to `false`.

#### Returns

An object containing the following properties and methods:

-   `audioNode`: The `Audio` element used for playback.
-   `audioContext`: The `AudioContext` used for audio processing.
-   `audioSource`: The `MediaElementSourceNode` created from the `audioNode`.
-   `isPlaying`: A boolean indicating whether the audio is currently playing.
-   `play()`: Starts playback of the audio.
-   `pause()`: Pauses playback of the audio.
-   `toggleAudio()`: Toggles between playing and pausing the audio.
-   `stopAudio()`: Stops playback and resets the audio to the beginning.
-   `setVolume(volume)`: Sets the volume of the audio. `volume` is a number between `0` and `100`.
-   `analyzer`: The `AnalyserNode` used for frequency analysis.
-   `bufferLength`: The length of the frequency data array.
-   `dataArray`: The frequency data array.
-   `audioToBase64(source)`: Converts an audio source to a Base64 encoded string. Supports `File`, `Blob`, and URL sources.
-   `captureMicrophone()`: Starts capturing audio from the microphone.
-   `muteMicrophone()`: Mutes the microphone.
-   `unmuteMicrophone()`: Unmutes the microphone.
-   `stopMicrophone()`: Stops capturing audio from the microphone and cleans up resources.
-   `microphoneSource`: The `MediaStreamAudioSourceNode` created from the microphone stream.
-   `mediaStream`: The `MediaStream` obtained from the microphone.
-   `isMute`: A boolean indicating whether the microphone is muted.
-   `audioFrequencyData`: The frequency data array for the audio.
-   `audioDuration`: The duration of the audio in seconds.
-   `audioCurrentTime`: The current playback time of the audio in seconds.
-   `audioVolume`: The current volume level of the audio.
-   `detectedNotes`: An array of detected musical notes if `detector` is enabled.

### Notes

-   Ensure that your application has the appropriate permissions to access the microphone.
-   The `audioToBase64` function supports both `File` and `Blob` sources, as well as URLs.

For further customization or issues, please refer to the source code or open an issue on the repository.

## Example Usage

```jsx
import React, { useEffect } from 'react';
import {useAudio} from 'react-audio-canvas';

function AudioComponent() {
  const {
    audioNode,
    isPlaying,
    play,
    pause,
    stopAudio,
    setVolume,
    captureMicrophone,
    muteMicrophone,
    unmuteMicrophone,
    stopMicrophone,
    detectedNotes
  } = useAudio('https://example.com/audio.mp3', 2048, true);

  useEffect(() => {
    captureMicrophone();
  }, [captureMicrophone]);

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stopAudio}>Stop</button>
      <button onClick={() => setVolume(50)}>Set Volume to 50%</button>
      <button onClick={muteMicrophone}>Mute Microphone</button>
      <button onClick={unmuteMicrophone}>Unmute Microphone</button>
      <button onClick={stopMicrophone}>Stop Microphone</button>
      <div>
        Detected Notes: {detectedNotes.join(', ')}
      </div>
    </div>
  );
}

```


# 2. `useCanvas`

The `useCanvas` hook provides a convenient way to manage a canvas element and its context in a React component. It returns a `Canvas` component that you can use to render a `<canvas>` element and provides access to the canvas context through the `canvasContext` property.

## API

### `useCanvas(width,height)`

#### Parameters


The `useCanvas` hook takes an object with the following properties:

-   `width` (number): The width of the canvas.
-   `height` (number): The height of the canvas.

#### Returns

The `useCanvas` hook returns an object with the following properties:

-   `Canvas`: A React component that renders a `<canvas>` element with the specified width and height.
-   `canvasContext`: The 2D rendering context of the canvas, or `null` if the canvas is not yet initialized.
-   `canvasNode`: The actual `<canvas>` DOM element, or `null` if the canvas is not yet rendered.

## Example Usage


```jsx
import React from 'react';
import {useCanvas} from 'react-audio-canvas';

function MyComponent() {
  const { Canvas, canvasContext, canvasNode } = useCanvas({ width: 800, height: 600 });

  useEffect(() => {
    if (canvasContext) {
      // You can now use canvasContext to draw on the canvas
      canvasContext.fillStyle = 'blue';
      canvasContext.fillRect(0, 0, 100, 100);
    }
  }, [canvasContext]);

  return (
    <div>
      <Canvas />
    </div>
  );
}
```

# 3. `detectNotes` 

Detects musical notes from an array of audio sample data using auto-correlation.

## API

### detectNotes(dataArray, sampleRate = 44100)

#### Parameters

-   **`dataArray`** (`Float32Array` or `Unit8Array` ): An array of audio sample data. The data should be in the range of 0 to 255.
-   **`sampleRate`** (`number`, optional): The sample rate of the audio data. Defaults to `44100`.

#### Returns

-   **`Array`**: An array of detected notes, each represented as an object containing the following properties:

    -   **`frequency`** (`string`): The fundamental frequency of the note.
    -   **`pitch`** (`string`): The musical pitch of the note, including its octave.
    -   **`octave`** (`number`): The octave number of the note.
    -   **`confidence`** (`string`): The confidence level of the note detection.
    -   **`note`** (`string`): The note name (e.g., 'C', 'D#').
    -   **`cents`** (`number`): The deviation in cents from the exact pitch.

    If no notes are detected, returns `null`.

#### Description

The `detectNotes` function analyzes the given audio sample data to detect musical notes. It uses auto-correlation to identify peaks in the signal and calculates the fundamental frequency of each peak. The function then converts the frequency to a musical note and calculates its octave, confidence, and deviation in cents.

## Example Usage

```javascript

import {detectNotes} from 'react-audio-canvas';

const audioData = new Float32Array([...]); // Example audio data
const notes = detectNotes(audioData);

if (notes) {
  notes.forEach(note => {
    console.log(`Detected note: ${note.pitch} (Frequency: ${note.frequency} Hz, Confidence: ${note.confidence})`);
  });
} else {
  console.log('No notes detected');
}

```
## TODO

- Add more Visualization function.
- Currently there is only `Bar` visualization is available, you can import it as folows:
  
  ```jsx
    import {static_visuals, animation_visuals} from "react-audioo-canvas"

    // For <Audio/> component,
    const customVisualizerStatic = static_visuals.barVisuzlizer
  
    // For <AudioPlayer/> and <AudioStream/> component,
    const customVisualizerAnimation = animation_visuals.barVisuzlizer
  
  ```

## Contributions & Development


We welcome and encourage contributions to our open-source React library! Whether you're interested in improving existing features, adding new components, or fixing bugs, your contributions are invaluable.

To get started with development, simply clone the repository and use `npm install` to install dependencies. You can use `npm link` to link the package locally and `npm run build` to compile your changes. We appreciate all contributions and look forward to building something amazing together!
