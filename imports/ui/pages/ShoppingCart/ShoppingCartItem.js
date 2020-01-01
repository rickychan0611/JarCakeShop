import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Item, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './styles.css'

export default ShoppingCartItem = ( {item} ) => {
  return (
      <Item>
      <Item.Image src='/images/jarcake.jpg' size="tiny"/>
      <Item.Content>
        <Item.Header as='a'>{item.title}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{item.price}</span>
        </Item.Meta>
        <Item.Description>{item.description}</Item.Description>
      </Item.Content>
    </Item>
  )
}
