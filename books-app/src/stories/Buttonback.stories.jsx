import React from 'react'
import { Buttonback } from './Buttonback'

export default {
    title:'Buttonback',
    component:Buttonback ,
}


const Template = (args) => <Buttonback {...args}/>

export const ButtonBackHome = Template.bind({})
ButtonBackHome.args = {
    title:'Volver al inicio',
}