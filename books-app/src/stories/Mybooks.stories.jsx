import React from 'react'
import Mybooks from './Mybooks'


export default {
    title:'Mybooks',
    component:Mybooks,
}

const Template = (args) => <Mybooks {...args} />

export const MyBook = () => <Mybooks stateList='stateList' />

export const MyBookList = Template.bind({})
MyBookList.args = {
    variant:'mybook-image-list',
    variant2: 'nobutton-list',
    variant3:'mybook-author-list',
    variant4:'mybook-card-list',
state:'showStateList',

}
