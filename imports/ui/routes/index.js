import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
// import { TableContext } from "../contexts/TableContextProvider"

// route components
import CakeOrder from '../pages/CakeOrder'
import ShoppingCart from '../pages/ShoppingCart'

const browserHistory = createBrowserHistory();
const getTableNumber = 0
export const renderRoutes = () => (
    // <TableContext.Consumer> 
    //     {({getTableNumber})=>{
        // return (
            <Router history={browserHistory}>
            {/* if no table number cookie, go to welcome page */}
            {getTableNumber === 0 ? 
            <Switch>
                <Route exact path="/" component={CakeOrder} />
                <Route exact path="/cake-order" component={CakeOrder} />
                <Route exact path="/shopping-cart" component={ShoppingCart} />

                <Redirect from="*" to="/" />
            </Switch>
                : 
            <Switch>
                <Route exact path="/" component={CakeOrder} />
                <Route exact path="/cake-order" component={CakeOrder} />
                <Route exact path="/shopping-cart" component={ShoppingCart} />
                <Redirect from="*" to="/" />
            </Switch>}
        </Router>
        // )
    //   }}
    // </TableContext.Consumer>
    
);