import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
// import { Blaze } from 'meteor/blaze';
import Blaze from 'meteor/gadicc:blaze-react-component'
import './styles.css'

export default class AccountsUIWrapper extends Component {
 render() {
    // Just render a placeholder container that will be filled in
    return (
    <Blaze className="dropDownMenu" template="loginButtons" />

    // <span ref="container" />;
    )
  }
}
