export function DrawAnimation({
  isPlaying,
  isMute,
  analyzer,
  bufferLength,
  dataArray,
  canvasNode,
  canvasContext,
  visualizer,
  barWidth=false,
  barHeight=false,
  x=0,
  color="white",
  colorFunction,
  audioDuration=0,
  type
}) {
    if (
      (type == "player" && !isPlaying) ||
      (type == "stream" && isMute) ||
      analyzer == null ||
      bufferLength == null ||
      dataArray == null ||
      canvasNode == null ||
      canvasContext == null
    )
      return;

    if(!visualizer) return

    if(!barWidth) barWidth = canvasNode.width / bufferLength;
    function animate() {
      x = 0;
      canvasContext.clearRect(0, 0, canvasNode.width, canvasNode.height);
      analyzer.getByteFrequencyData(dataArray);
	visualizer({
	barHeight,
	barWidth,
	canvasContext,
	x,
	color,
	colorFunction,
	audioDuration,
	dataArray,
	bufferLength,
	canvasNode
      });
      requestAnimationFrame(animate);
    }
    animate();
}

export function DrawStatic({
  audioFrequencyData,
  canvasNode,
  canvasContext,
  visualizer,
  barWidth=false,
  barHeight=false,
  x=0,
  color="white",
  colorFunction,
  audioDuration=0,
}){
    if (
      audioFrequencyData == null
    )
      return;
    if(!visualizer) return
    const bufferLength = Object.keys(audioFrequencyData).length;
    if(!barWidth) barWidth = canvasNode.width / bufferLength;
    canvasContext.clearRect(0, 0, canvasNode.width, canvasNode.height);
    visualizer({
      dataArray:audioFrequencyData,barHeight,barWidth,canvasContext,x,
      color, colorFunction, audioDuration, canvasNode
    });
}
