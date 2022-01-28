import React from 'react'
import Navbar from './Navbar'

export default {
    title: 'Navbar',
    component:Navbar,
}

const Template= (args)=> <Navbar {...args} />

export const NavbarProfile = Template.bind({})
NavbarProfile.args = {
    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
}




