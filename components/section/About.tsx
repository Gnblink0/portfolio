import React from 'react'
import { Grid } from './Grid'

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col items-center justify-center m-4 md:my-24">
      <h2 className="heading-responsive-size font-bold">Who I am</h2>
      <Grid />
      </div>
    </div>
  )
}

export default About