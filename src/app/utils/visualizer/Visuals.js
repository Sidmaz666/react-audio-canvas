 export const static_visuals = {
      barVisualizer: ({
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
      },
}


export const animation_visuals = {
  barVisualizer: ({
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
    for (let index = 0; index < bufferLength; index++) {
      barHeight = Math.abs(dataArray[index]) / 2.5;
      if (colorFunction)
        color = colorFunction({
          barHeight,
          barWidth,
          index,
          dataArray,
          audioDuration,
        });
      canvasContext.fillStyle = color;
      canvasContext.fillRect(
        x,
        canvasNode.height - barHeight,
        barWidth,
        barHeight
      );
      x += barWidth;
    }
  },
};

