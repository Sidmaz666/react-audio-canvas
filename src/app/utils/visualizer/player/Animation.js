import { DrawAnimation } from "../Draw";
import { animation_visuals } from "../Visuals";

export default function Animation({
  isMute,
  isPlaying,
  analyzer,
  bufferLength,
  dataArray,
  canvasNode,
  canvasContext,
  barWidth = false,
  barHeight = false,
  x = 0,
  color = "black",
  colorFunction = false,
  audioDuration=0,
  type
}) {
  DrawAnimation({
    isMute,
    isPlaying,
    analyzer,
    bufferLength,
    dataArray,
    canvasNode,
    canvasContext,
    visualizer: animation_visuals.barVisualizer,
    barHeight,
    barWidth,
    x,
    color,
    colorFunction,
    type,
    audioDuration
  });
}
