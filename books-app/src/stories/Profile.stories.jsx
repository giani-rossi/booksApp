import React from 'react'
import {Profile} from './Profile'

export default {
    title:'Profile',
    component:Profile,
}

const Template = (args) => <Profile {...args}/>

export const ProfileInfo = Template.bind({});   
ProfileInfo.args = {
    name:'Karen Serfaty',
    qtybooks:'15',
    lendings:'3',
    image:"https://rickandmortyapi.com/api/character/avatar/17.jpeg",
}