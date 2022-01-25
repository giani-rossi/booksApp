import React from 'react';

import { ButtonLoading } from './ButtonLoading';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ButtonLoading',
  component: ButtonLoading,
 

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const LoadingPrimary = ()=> <ButtonLoading variant='button-loading-primary'>Agregar libros</ButtonLoading>
export const LoadingSecondary = ()=> <ButtonLoading variant='button-loading-secondary'>No prestar</ButtonLoading>
export const LoadingMinimal = ()=> <ButtonLoading variant='button-loading-minimal'>Prestado a Karen Serfaty</ButtonLoading>
