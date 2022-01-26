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
qtybooks:'15'
}

