import React from 'react'
import { ButtonIcon } from './ButtonIcon'


export default {
    title: 'ButtonIcon',
    component: ButtonIcon,
}

export const PrimaryIcon = () => <ButtonIcon variant='button-primary-icon'>Agregar libros</ButtonIcon>
export const SecondaryIcon = () => <ButtonIcon variant='button-secondary-icon'>No prestar</ButtonIcon>
export const MinimalIcon = () => <ButtonIcon variant='button-minimal-icon'>Prestado a Karen Serfaty</ButtonIcon>