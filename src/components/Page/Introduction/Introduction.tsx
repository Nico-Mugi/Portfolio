import React from 'react';
import { JobObjective } from './JobObjective';
import { PersonalInterests } from './PersonalInterests';

export const Introduction = () => {
  return (
    <>
      <h2>About Me</h2>
      <JobObjective />
      <PersonalInterests />
    </>
  );
};
