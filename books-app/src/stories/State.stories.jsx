import React from 'react'
import State from './State'


export default {
    title:'State' ,
    component:State,
}

const Template = (args) => <State {...args}/>

export const StateGreen = Template.bind({})
StateGreen.args = {
    variant:'green' , 
    children: 'Prestado a Karen Serfaty',
    icon: 'greenIcon' ,
    icon2:'icon2-none'

}


export const StateYellow= Template.bind({})
StateYellow.args = {
    variant:'yellow' , 
    children: 'Pedido pendiente',
    icon: 'icon-none' ,
    icon2:'yellowIcon'

}

export const StateBlack= Template.bind({})
StateBlack.args = {
    variant:'black' , 
    children: 'No está prestado',
    icon: 'icon-none' ,
    icon2:'icon2-none'

}