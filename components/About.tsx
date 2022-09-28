import React from 'react'
import { motion } from 'framer-motion'
import { MY_PHOTO } from '../constants'

export const About: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
  >
    <h3 className="absolute top-24 uppercase tracking-[28px] text-gray-500 text-2xl">
      About
    </h3>

    <motion.img
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h95 xl:w-[500px] xl:h-[600px]'
      initial={{
        x: -200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true }}
      src={MY_PHOTO}
      alt="photo"
    />

    <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold">
        Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background
      </h4>

      <p className="text-lg">
        I am a front-end developer with over 2+ years of experience. I can be part of
        a strong team, improve my personal development skills and learn new things.
        Fully committed to working hard to do my best in the projects that I will be
        involved in. I have production experience and a solid theoretical & practical
        base.
      </p>
    </div>
  </motion.div>
)