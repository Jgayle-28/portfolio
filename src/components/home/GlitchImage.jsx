import React, { useEffect, useRef } from 'react'
import styles from '@/styles/glitch-image.module.scss'

export default function GlitchImage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    let currentFrame = 0
    const totalFrame = 10
    let offset = 0.01
    let width
    let height
    let imgData

    const pr = window.devicePixelRatio || 1
    const w = window.innerWidth
    const h = window.innerHeight

    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame

    window.requestAnimationFrame = requestAnimationFrame

    img.crossOrigin = 'Anonymous'
    img.src = img.src = '/assets/images/hero/hero.png'
    // img.src =
    //   'https://images.pexels.com/photos/5922835/pexels-photo-5922835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    img.onload = function () {
      init()
      glitchAnimation()
    }

    const init = function () {
      // canvas.width = width = w * pr
      // canvas.height = height = h * pr
      // offset = width * offset
      const aspectRatio = img.width / img.height

      // Adjust canvas dimensions based on the image aspect ratio
      canvas.width = width = window.innerWidth * pr
      canvas.height = height = width / aspectRatio

      offset = width * offset
    }

    const glitchAnimation = function () {
      if (!(currentFrame % totalFrame) || currentFrame > totalFrame) {
        clearCanvas()

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          offset,
          0,
          width - offset * 2,
          height
        )

        imgData = ctx.getImageData(0, 0, width, height)

        imgData = pixelProcessor(imgData, 4, pixelCooler)

        ctx.putImageData(imgData, 0, 0)

        currentFrame = 0
      }

      if (currentFrame === randInt(0, totalFrame)) {
        imgData = pixelProcessor(imgData, 1, pixelFlick)

        ctx.putImageData(imgData, 0, 0)

        drawGlitch(width, height, randInt(3, 10), glitchBlock)

        drawGlitch(width, height, randInt(3, 30), glitchLine)
      }

      currentFrame++

      window.requestAnimationFrame(glitchAnimation)
    }

    const pixelFlick = function (i, d) {
      d[i] = d[i + 16]
    }

    const pixelCooler = function (i, d) {
      d[i] = 0 // Set red channel to 0 (black)
      d[i + 1] = 0 // Set green channel to 0 (black)
      d[i + 2] = 0 // Set blue channel to 0 (black)
      d[i + 3] = 255 // Set alpha channel to 255 (fully opaque)
    }

    // OLD ------------------------------------------------
    // const pixelCooler = function (i, d) {
    //   d[i] = 1
    //   d[i + 1] += randInt(2, 5)
    //   d[i + 2] *= randInt(1, 3) + 8
    // }

    // OLD ------------------------------------------------
    const glitchBlock = function (i, x, y) {
      if (i > 3) {
        const spliceHeight = 1 + randInt(0, 10)

        ctx.drawImage(
          canvas,
          x,
          y,
          x,
          spliceHeight,
          randInt(0, x),
          y,
          randInt(x, width),
          spliceHeight
        )
      }
    }

    const glitchLine = function (i, x, y) {
      const spliceHeight = 1 + randInt(1, 50)

      ctx.drawImage(
        canvas,
        offset,
        y,
        width - offset * 2,
        spliceHeight,
        1 + randInt(0, offset * 2),
        y + randInt(0, 10),
        width - offset,
        spliceHeight
      )
    }

    const pixelProcessor = function (imageData, step, callback) {
      const data = imageData.data || []
      step = step * 4 || 4

      if (data.length) {
        for (let i = 0; i < data.length; i += step) {
          callback && callback(i, data)
        }

        return imageData
      } else {
        return imageData
      }
    }

    const drawGlitch = function (width, height, amount, callback) {
      for (let i = 0; i < (amount || 10); i++) {
        const x = Math.random() * width + 1
        const y = Math.random() * height + 1

        callback(i, x, y)
      }
    }

    const randInt = function (a, b) {
      return ~~(Math.random() * (b - a) + a)
    }

    const clearCanvas = function () {
      ctx.clearRect(0, 0, width, height)
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.glitchContainer} opacity-70`}
        style={{ zIndex: 999999 }}
      >
        <canvas ref={canvasRef} id='canvas'></canvas>
      </div>
    </>
  )
}
