import React from 'react'
import { Grid } from './Grid'

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="heading-responsive-size font-bold mb-12">Who I am</h2>
        <Grid />
      </div>
    </div>
  )
}

export default About