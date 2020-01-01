import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './styles.css'

export default AddtoCartButton = ( {getQty} ) => {
  const [qty, setQty] = useState(1) 

  const qtyMinus = () =>{
    if(qty > 1){
      setQty(qty-1)
      getQty(qty)
    }
  }
  const qtyPlus = () =>{
    if(qty >= 1){
      setQty(qty+1)
      getQty(qty)
    }
  }
  return (
    <Fragment>
      <div className="itemOrderButtonWrapper">
        <div className="itemOrderQtyWrapper">
          <Button size="tiny" icon="minus" circular 
            onClick={qtyMinus}/>
          <span className="qtyText">{qty}</span>
          <Button size="tiny" icon="plus" circular 
          onClick={qtyPlus}/>
        </div> 
      </div>
      
    </Fragment>
  )
}