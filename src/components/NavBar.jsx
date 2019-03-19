import React, { useState } from "react";
import {
  Menu,
  Responsive,
  Icon,
  Segment,
  Sidebar,
  Divider
} from "semantic-ui-react";
import { navigate, Link } from "@reach/router";

const NavBar = ({ cities }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const selectedLocation = localStorage.getItem("selectedLocation");

  const handleMenuClick = path => {
    setSidebarVisible(false);
    navigate(path);
  };

  const navigateToCity = city => {
    localStorage.setItem("selectedLocation", city);
    handleMenuClick(`/city/${city}`);
  };

  const navigateToVenue = () => {
    if (selectedLocation) {
      handleMenuClick(`/venue/${selectedLocation}`);
    } else {
      handleMenuClick("/venue");
    }
  };

  console.log(selectedLocation);
  const citiesMenuItems = cities.map(city => (
    <Menu.Item
      header
      key={city}
      onClick={() => navigateToCity(city)}
      active={city == selectedLocation}
    >
      {city}
    </Menu.Item>
  ));

  const menuItems = (
    <>
      {citiesMenuItems}
      <Divider fitted />
      <Menu.Item header onClick={navigateToVenue}>
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
        <Menu.Item header>Xconf 2019</Menu.Item>
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
