import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import AccountsUIWrapper from '../Accounts/AccountsUIWrapper'

const TopNavBar = () => {
  const [activeItem, setActiveItem] = useState('home')

  handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return (
    <div>
       <Menu pointing secondary>
       <h1 className="header">Cake in the Jar</h1>

          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <AccountsUIWrapper />
{/* 
              <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              />
               <Menu.Item
              name='signup'
              active={activeItem === 'signup'}
              onClick={handleItemClick}
              />
              <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
              /> */}
          </Menu.Menu>
        </Menu>
    </div>
  )
}

export default TopNavBar