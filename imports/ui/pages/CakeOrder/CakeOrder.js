import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './styles.css'
import TopNavBar from '../../components/TopNavBar';

const tastes = [
  {title: 'Chocolate Jar Cake', taste: 'Chocolate', thumbnail: '/images/tastes/chocolate-s.jpg', price: 6, 
    description: "this is chocolate."},
  {title: 'Durian Jar Cake', taste: 'Durian', thumbnail: '/images/tastes/durian-s.jpg', price: 6,
    description: "this is Durian."},
  {title: 'Vanilla Jar Cake', taste: 'Vanilla', thumbnail: '/images/tastes/vanilla-s.jpg', price: 6,
    description: "this is Vanilla."},
  {title: 'Red Velvet Jar Cake', taste: 'Red Velvet', thumbnail: '/images/tastes/redVelvet-s.jpg', price: 6,
    description: "this is Red Velvet."},
  {title: 'Carrot Jar Cake', taste: 'Carrot', thumbnail: '/images/tastes/carrot-s.jpg', price: 6,
    description: "this is Carrot."},
  {title: 'Lemon Jar Cake', taste: 'Lemon', thumbnail: '/images/tastes/lemon-s.jpg', price: 6,
   description: "this is Lemon."},
  {title: 'Coconut Jar Cake', taste: 'Coconut', thumbnail: '/images/tastes/coconut-s.jpg', price: 6,
   description: "this is Coconut."},
  {title: 'Matcha Jar Cake', taste: 'Matcha', thumbnail: '/images/tastes/matcha-s.jpg', price: 6,
    description: "this is Matcha."}
  ]

const CakeOrder = () => {
  const [selectedItem, SetSelectedItem] = useState({
    title: "Please select a taste :)",
    price: null,
    description: null
  })
  const onSelectItem = (item) => {
    SetSelectedItem(item)
  }
  return (
    <Fragment>
      <TopNavBar/>
      <div className="wrapper">
        <div className="picWrapper">
        <img className="cakePic" src='/images/jarcake.jpg' alt='pic' />
        </div>

          <div className="scrolling-wrapper" id="style-1">
            {tastes.map((taste)=>{
              return(
              <div className="tastesContainer">
                <div className="tastePicTitleWrapper">
                  <div className="tastePic">
                    <img src={taste.thumbnail} alt={taste.taste} 
                      onClick={()=>{onSelectItem(taste)}}
                      />
                  </div>
                  <div className="tasteTitle">{taste.taste}</div>
                </div>
              </div>
              )
            })}
            </div>

            <div className="itemContentWrapper">
              <div className="itemContents">
                <h3>{selectedItem.title}</h3>
                <h3>{selectedItem.price ? "$" : null} {selectedItem.price}</h3>
                <p>{selectedItem.description}</p>
              </div>
              <div className="itemOrderButtonWrapper">
                <div className="itemOrderQtyWrapper">
                  <Button size="tiny" icon="minus" circular />
                  <span className="qtyText">2</span>
                  <Button size="tiny" icon="plus" circular />
                </div>
              </div>

            <Button fluid positive className="cartButton">Add to Cart</Button>
            </div>
      </div>

    </Fragment>
  )
}

export default CakeOrder