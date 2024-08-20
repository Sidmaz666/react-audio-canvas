import {DrawStatic} from "../Draw";
import { static_visuals } from "../Visuals";

export default function Static({
  dataArray,
  canvasNode,
  canvasContext,
  barWidth = false,
  barHeight = false,
  x = 0,
  color = "white",
  colorFunction = false,
  audioDuration = 0, 
}) {
	DrawStatic({
	audioFrequencyData: dataArray,
	canvasNode,
	canvasContext,
	visualizer: static_visuals.barVisualizer,
        barWidth,
        barHeight,
        x,
        color,
        colorFunction,
	audioDuration
      })
}
