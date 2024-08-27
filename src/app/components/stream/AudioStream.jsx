import { useEffect, cloneElement, useState } from "react";
import useAudio from "../../utils/useAudio";
import useCanvas from "../../utils/useCanvas";
import Animation from "../../utils/visualizer/player/Animation";
import { DrawAnimation } from "../../utils/visualizer/Draw";

export default function AudioStream({
  clickableCanvas = false,
  width = 500,
  height = 100,
  controls = true,
  muteButton = "Mute",
  unmuteButton = "Unmute",
  dataCount = 64,
  className = "",
  controlsClassName = "",
  constrolsStyle = false,
  style = false,
  canvasClassName = "",
  canvasStyle = false,
  toggleClassName = "",
  toggleStyle = false,
  stopButton = true,
  customStopButton = false,
  startButton = true,
  customStartButton = false,
  barWidth = false,
  barHeight = false,
  horizontalOffset = 0,
  color = "black",
  colorFunction = false,
  customVisualizer = false,
  customFunction = false,
}) {
  const [listenState,setListenState] = useState(true)
  const {
    captureMicrophone, 
    isMute,
    muteMicrophone,
    unmuteMicrophone,
    stopMicrophone,
    analyzer,
    bufferLength,
    dataArray,
    audioNode,
    microphoneSource,
    mediaStream,
  } = useAudio(null, dataCount);
  const { Canvas, canvasContext, canvasNode } = useCanvas({
    width,
    height,
  });

  const CustomStopButton = () => {
    	if(!customStopButton) return;
	return cloneElement(customStopButton, {
	  	onClick: stopMicrophone,
	  });
	};

  const CustomStartButton = () => {
    	if(!customStartButton) return;
	return cloneElement(customStartButton, {
	  	onClick: captureMicrophone,
	  });
	};

  useEffect(() => {
    if (customVisualizer) {
      DrawAnimation({
	isMute,
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
	type: "stream",
	audioNode:microphoneSource,
      });
    } else {
      Animation({
	isMute,
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
	type: "stream",
	audioNode:microphoneSource,
      });
    }
  }, [
    isMute,
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
    microphoneSource,
  ]);

  useEffect(() => {
	if(customFunction) customFunction({audioNode,microphoneSource, mediaStream})
  },[customFunction, audioNode, microphoneSource, mediaStream])


  const toggleMic = () => {
    setListenState(!listenState)
    const __listenState = !listenState
    if(__listenState) {
	unmuteMicrophone()
    } else {
	muteMicrophone()
    }
  }

  return (
    <div className={className ? className : ""} style={style ? style : {}}>
      <Canvas
    	onClick={clickableCanvas ? toggleMic : null}
        className={canvasClassName ? canvasClassName : ""}
        style={canvasStyle ? canvasStyle : {}}
      />
      {controls ? (
	<div className={controlsClassName ? controlsClassName : ""} style={constrolsStyle ? constrolsStyle : {}}>
	  {startButton ? (
	    <>
	      { customStartButton ? <CustomStartButton/> :  <button onClick={captureMicrophone}>Start</button> }
	    </>
	  ) : null}
	  <button
	    className={toggleClassName ? toggleClassName : ""}
	    style={toggleStyle ? toggleStyle : {}}
	    onClick={toggleMic}
	  >
	    {isMute ? unmuteButton : muteButton}
	  </button>
	  {stopButton ? (
	    <>
	      { customStopButton ? <CustomStopButton/> :  <button onClick={stopMicrophone}>Stop</button> }
	    </>
	  ) : null}
	</div>
      ) : null}
    </div>
  );
}
