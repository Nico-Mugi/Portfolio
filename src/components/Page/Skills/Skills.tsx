import React from 'react';
import { Languages } from './Languages';
import { Personal } from './Personal';
import { Technical } from './Technical';

export const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <Technical />
      <Languages />
      <Personal />
    </>
  );
};
