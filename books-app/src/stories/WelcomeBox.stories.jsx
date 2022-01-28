import React from 'react';
import WelcomeBox from './WelcomeBox'

export default {

    title:'WelcomeBox',
    component: WelcomeBox,

}


const Template = (args) => <WelcomeBox {...args} />

export const WelcomeDialog = Template.bind({})

WelcomeDialog.args = {
    name: 'Karen' ,
}