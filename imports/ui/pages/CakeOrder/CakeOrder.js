import React, { Fragment, useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './styles.css'
import TopNavBar from '../../components/TopNavBar';
import AddtoCartButton from '../../components/AddtoCartButton';


const tastes = [
  {
    title: 'Chocolate Jar Cake', taste: 'Chocolate', thumbnail: '/images/tastes/chocolate-s.jpg', price: 6,
    description: "this is chocolate.", qty: 1
  },
  {
    title: 'Durian Jar Cake', taste: 'Durian', thumbnail: '/images/tastes/durian-s.jpg', price: 6,
    description: "this is Durian.", qty: 1
  },
  {
    title: 'Vanilla Jar Cake', taste: 'Vanilla', thumbnail: '/images/tastes/vanilla-s.jpg', price: 6,
    description: "this is Vanilla.", qty: 1
  },
  {
    title: 'Red Velvet Jar Cake', taste: 'Red Velvet', thumbnail: '/images/tastes/redVelvet-s.jpg', price: 6,
    description: "this is Red Velvet.", qty: 1
  },
  {
    title: 'Carrot Jar Cake', taste: 'Carrot', thumbnail: '/images/tastes/carrot-s.jpg', price: 6,
    description: "this is Carrot.", qty: 1
  },
  {
    title: 'Lemon Jar Cake', taste: 'Lemon', thumbnail: '/images/tastes/lemon-s.jpg', price: 6,
    description: "this is Lemon.", qty: 1
  },
  {
    title: 'Coconut Jar Cake', taste: 'Coconut', thumbnail: '/images/tastes/coconut-s.jpg', price: 6,
    description: "this is Coconut.", qty: 1
  },
  {
    title: 'Matcha Jar Cake', taste: 'Matcha', thumbnail: '/images/tastes/matcha-s.jpg', price: 6,
    description: "this is Matcha.", qty: 1
  }
]

const CakeOrder = () => {
  let localStorageItems = JSON.parse(localStorage.getItem("addedItems"));
  const [addedItems, setAddedItems] = useState(localStorageItems)
  const [selectedItem, setSelectedItem] = useState({
    title: "Please select a taste :)",
    price: null,
    description: null,
    qty: 1
  })

  const qtyMinus = () =>{
    if(selectedItem.qty > 1){
      setSelectedItem({...selectedItem, qty: selectedItem.qty - 1})
    }
  }
  const qtyPlus = () =>{
    if(selectedItem.qty >= 1){
      setSelectedItem({...selectedItem, qty: selectedItem.qty + 1})

    }
  }

  const onAddItemToCart = () => {
    setAddedItems(prevItems =>[...prevItems, selectedItem])
  }

  const onSelectItem = (item) => {
    setSelectedItem(item)
  }

  useEffect(() => {
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
  }, [addedItems]);

  return (
    <Fragment>
      <TopNavBar />
      <div className="wrapper">
        <div className="picWrapper">
          <img className="cakePic" src='/images/jarcake.jpg' alt='pic' />
        </div>

        <div className="scrolling-wrapper" id="style-1">
          {tastes.map((taste) => {
            return (
              <div className="tastesContainer">
                <div className="tastePicTitleWrapper">
                  <div className="tastePic">
                    <img src={taste.thumbnail} alt={taste.taste}
                      onClick={() => { onSelectItem(taste) }}
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
            {selectedItem.title !== "Please select a taste :)" ?
              <div className="itemOrderButtonWrapper">
              <div className="itemOrderQtyWrapper">
                <Button size="tiny" icon="minus" circular 
                  onClick={qtyMinus}/>
                <span className="qtyText">
                {selectedItem.qty}
                </span>
                <Button size="tiny" icon="plus" circular 
                onClick={qtyPlus}/>
              </div> 
            </div> : <div></div>
            }
          </div>
          <Button fluid positive className="cartButton"
            disabled={selectedItem.title === "Please select a taste :)"}
            onClick={onAddItemToCart}>
            Add to Cart
          </Button>
            <Button onClick={()=>{
              localStorage.setItem("addedItems", JSON.stringify([]));
              setAddedItems([])
            }}>clear</Button>
      {JSON.stringify(localStorageItems)}
        </div>
      </div>
    </Fragment>
  )
}

export default CakeOrder