import React, { useState } from "react";
import { Menu, Responsive, Icon, Sidebar, Divider } from "semantic-ui-react";
import { navigate, Link } from "@reach/router";

const NavBar = ({ days }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const selectedLocation = localStorage.getItem("selectedLocation");

  const handleMenuClick = path => {
    setSidebarVisible(false);
    navigate(path);
  };

  const navigateToDay = day => {
    localStorage.setItem("selectedLocation", day);
    handleMenuClick(`/day/${day}`);
  };

  console.log(selectedLocation);
  const daysMenuItems = days.map(day => (
    <Menu.Item
      header
      key={day}
      onClick={() => navigateToDay(day)}
      active={day === selectedLocation}
    >
      {day}
    </Menu.Item>
  ));

  const menuItems = (
    <>
      <Menu.Item header>Days:</Menu.Item>
      {daysMenuItems}
      <Divider fitted />
      <Menu.Item header onClick={() => handleMenuClick("/venue")}>
        Venue
      </Menu.Item>
      <Menu.Item header onClick={() => handleMenuClick("/feedback")}>
        Feedback
      </Menu.Item>
    </>
  );

  return (
    <Menu attached="top">
      <Link to="/">
        <Menu.Item header>DE Away Day 2019</Menu.Item>
      </Link>
      <Responsive as={Menu.Menu} position="right" {...Responsive.onlyComputer}>
        {menuItems}
      </Responsive>
      <Responsive as={Menu.Menu} position="right" {...Responsive.onlyMobile}>
        <Menu.Item onClick={() => setSidebarVisible(true)}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Sidebar
          as={Menu}
          vertical={true}
          animation={"scale down"}
          direction={"right"}
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
        >
          {menuItems}
        </Sidebar>
      </Responsive>
    </Menu>
  );
};

export default NavBar;
