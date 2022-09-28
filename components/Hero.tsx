import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AVATAR_LINK } from '../constants'
import BackgroundCircles from './BackgroundCircles'

export const Hero: React.FC = () => {
  const [text] = useTypewriter({
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

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>

          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}