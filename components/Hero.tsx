import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import StarBackground from './StarBackground' 

const words = "I create things for web and mobile"

const Hero = () => {
  return (
    <div className="pb-20 h-100 flex flex-col items-center justify-center">
      <StarBackground />
      <div className="flex flex-col items-center justify-center">
        <TextGenerateEffect words={words} className="" />
      </div>

      <div>
        <span>
          Hello, I&apos;m Gina.
        </span>
      </div>
    </div>
  )
}

export default Hero