import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom'
import { renderRoutes } from '../imports/ui/routes/';
import { Container } from 'semantic-ui-react'
import '../imports/startup/accounts-config.js';


const App = () => {
  return(
    <BrowserRouter>
    {/* <Container style={{ margin: 20 }}> */}
      {/* <TableContextProvider> */}
        {renderRoutes()}
      {/* </TableContextProvider> */}
    {/* </Container> */}
    </BrowserRouter>
  )
}

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
