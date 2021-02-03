import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <div className="navbarN" style={{ backgroundColor: props.color }}>
        <a href="/Bar">BAR</a>
        <a href="/Menu">MENUS</a>
        <a href="/">
          <h1>ABE'S GRILL</h1>
        </a>
        <a href="/Team">TEAM</a>
        <a href="/Reservations">RESERVATIONS</a>
      </div>
    </div>
  );
};

export default NavBar;
