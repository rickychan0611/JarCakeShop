import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Item, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './styles.css'
import ShoppingCartItem from './ShoppingCartItem.js'

let localStorageItems = JSON.parse(localStorage.getItem("addedItems"));

export default ShoppingCart = () => {
  return (
    <div>
      this is shopping cart
      {JSON.stringify(localStorageItems)}
      <Item.Group divided>
         {localStorageItems.map(item => {
           return (
            <ShoppingCartItem item={item}/>
           )
         })}
    </Item.Group>
    </div>
  )
}
