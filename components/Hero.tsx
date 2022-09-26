import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Illia",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesToCodeMoer />"
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackgroundCircles />

      <h1>
        <span>{text}</span>

        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  )
}