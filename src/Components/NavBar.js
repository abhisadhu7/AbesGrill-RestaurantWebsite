import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbarN">
        <a href="/Bar">BAR</a>
        <a href="/Menu">MENUS</a>
        <a href="/Team">TEAM</a>
        <a href="/PrivateDining">PRIVATE DINING</a>
        <a href="/Happenings">HAPPENINGS</a>
        <a href="/Journal">JOURNAL</a>
        <a href="/">
          <h1>ABE'S GRILL</h1>
        </a>
        <a href="#">RESERVATIONS</a>
      </div>
    </div>
  );
};

export default NavBar;
