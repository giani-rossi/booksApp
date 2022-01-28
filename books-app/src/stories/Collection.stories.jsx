import React from 'react'
import Collection from './Collection'

export default {
    title:'Collection',
    component: Collection,
    
}


const Template = (args) => <Collection {...args}/>

export const Collections = Template.bind({});
Collections.args = {
name: 'Karen Serfaty ',
qtybooks:'15',
image:'',
variant:''
}

export const Collectionsv2 = Template.bind({});
Collectionsv2.args = {
name: 'Gianina Rossi ',
qtybooks:'12',
image:'',
variant:'collection-books-copy'
}

export const Collectionsv3 = Template.bind({});
Collectionsv3.args = {
name: 'Gianina Rossi ',
qtybooks:'12',
image:'',
variant:'collection-books-copy'
}