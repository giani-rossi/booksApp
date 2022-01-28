import React from 'react'
import Divisor from './Divisor'

export default {
    title:'Divisor',
    component:Divisor,
}

const Template = (args) => <Divisor {...args} />

export const DivisorLineAmigues = Template.bind({})
DivisorLineAmigues.args = {
    text:'Amigues y sus libros: ' ,
    variant:'divisor-text-amigues' ,
    variant2:''
    
}

export const DivisorLineProfileAmigue = Template.bind({})
DivisorLineProfileAmigue.args = {
    text:'Sus libros:' , 
    variant:'divisor-text-profile-amigue' 
}

export const DivisorLineProfile = Template.bind({})
DivisorLineProfile.args = {
    text:'Mis libros:' , 
    variant:'divisor-text-profile-own' 
}


export const DivisorLineProfileLendings = Template.bind({})
DivisorLineProfileLendings.args = {
    text:'Pedidos de préstamos:' , 
    variant:'divisor-text-profile-lendings' ,
}



export const DivisorLine = Template.bind({})
DivisorLine.args = {
    text:'Amigues y sus libros: ' ,
    variant:'divisor-text-amigues' ,
    variant2:'divisor-copy'
}

export const DivisorLinev2 = Template.bind({})
DivisorLinev2.args = {
    text:'Amigues y sus libros: ' ,
    variant:'divisor-text-amigues' ,
    variant2:'divisor-copy-v2'
}
