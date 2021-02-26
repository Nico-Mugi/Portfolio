import React from 'react';
import { Introduction } from './Introduction';
import { Resume } from './Resume';
import { Skills } from './Skills';
import { Projects } from './Projects';

export const Page = () => {
  return (
    <>
      <Introduction />
      <Resume />
      <Skills />
      <Projects />
    </>
  );
};
