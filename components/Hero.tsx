import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AVATAR_LINK } from '../constants'
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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="rounded-full relative h-32 w-32 mx-auto object-cover"
        src={AVATAR_LINK}
        alt="avatar"
      />

      <h1>
        <span>{text}</span>

        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  )
}