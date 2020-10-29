import React from 'react';
import {Container} from 'reactstrap';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Skills from '../views/Skills';



const Resume = (props) => {
  return (
    <Container>
      <AboutMe about_me={props.resume.about_me}/>
      <Experience experience={props.resume.experience}/>
      <Education education={props.resume.education}/>
      <Skills skills={props.resume.skills}/>
    </Container>
  )
}

export default Resume;