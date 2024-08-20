import { useEffect, useRef, useCallback } from 'react'

export default function useCanvas({width,height}) {
  const canvas = useRef(null)
  const canvasContext = useRef(null)
  useEffect(() => {
      if(canvas == null) return
      const canvas_context = canvas.current.getContext("2d")
      canvasContext.current = canvas_context
  },[canvas,width,height])
  const Canvas = useCallback(({...props}) => {
    return (
      <canvas ref={canvas} width={width} height={height} {...props}></canvas>
    )
  },[canvas,width,height])
  return {Canvas,canvasContext:canvasContext?.current,canvasNode:canvas?.current}
}
