import React, { useState, createRef } from 'react'
import { Menu, Responsive, Icon, Segment, Sidebar, Divider } from 'semantic-ui-react'

const NavBar = ({ cities, onCityClick }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const closeSidebar = () => setSidebarVisible(false)
  const handleMenuClick = (cb, ...args) => {
    closeSidebar()
    cb(...args)
  }
  const menuItems = cities.map(city => <Menu.Item header onClick={() => handleMenuClick(onCityClick, city)}>{city}</Menu.Item>)

  return (
    <Menu attached='top'>
      <Menu.Item header>Xconf 2019</Menu.Item>
      <Responsive as={Menu.Menu} position='right' {...Responsive.onlyComputer} >
        {menuItems}
        <Menu.Item header>Venue</Menu.Item>
        <Menu.Item header>Feedback</Menu.Item>
      </Responsive>
      <Responsive as={Menu.Menu} position='right' {...Responsive.onlyMobile} >
        <Menu.Item onClick={() => setSidebarVisible(true)}>
          <Icon name='sidebar' />
        </Menu.Item>
        <Sidebar as={Segment} animation={'scale down'} direction={'right'} visible={sidebarVisible} onHide={closeSidebar}>
          {menuItems}
          <Divider />
          <Menu.Item header onClick={closeSidebar}>Venue</Menu.Item>
          <Menu.Item header onClick={closeSidebar}>Feedback</Menu.Item>
        </Sidebar>
      </Responsive>
    </Menu>
  )
}

export default NavBar;
