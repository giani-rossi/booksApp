import React from 'react';
import Request from './Request';

export default {
    title:'Request',
    component:Request,
}

const Template = (args) => <Request {...args} />


export const RequestBook = Template.bind({})

RequestBook.args ={
    name: 'Karen' ,
    imageProfile:'https://rickandmortyapi.com/api/character/avatar/17.jpeg' , 
    imageBook: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' ,
    bookTitle: 'Madam: The Biography of Polly Adler, Icon of the Jazz Age.' ,
    author:'Autorx: Debby Applegate.',
variant:'',

}

export const RequestBookLendOK = Template.bind({})


RequestBookLendOK.args = {
    name: 'Karen' ,
    imageProfile:'https://rickandmortyapi.com/api/character/avatar/17.jpeg' , 
    imageBook: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' ,
    bookTitle: 'Madam: The Biography of Polly Adler, Icon of the Jazz Age.' ,
    author:'Autorx: Debby Applegate.',
variant:'no-button-lendOK'
}