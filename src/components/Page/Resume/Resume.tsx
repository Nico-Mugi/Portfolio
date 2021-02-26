import React from 'react';
import { Education } from './Education';
import { Experiences } from './Experiences';

export const Resume = () => {
  return (
    <>
      <h2>Resume</h2>
      <Experiences />
      <Education />
      <a>Download CV (créer un module Button)</a>
    </>
  );
};
