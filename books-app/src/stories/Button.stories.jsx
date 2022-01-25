import React from 'react';

import { Button } from './Button';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
 

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const PrimaryDefault = ()=> <Button variant='button-primary-default'>Agregar libros</Button>
export const SecondaryDefault = ()=> <Button variant='button-secondary-default'>No prestar</Button>
export const MinimalDefault = ()=> <Button variant='button-minimal-default'>Prestado a Karen Serfaty</Button>

