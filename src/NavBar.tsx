import React from "react";
import { FaRegKeyboard } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import "./NavBar.scss";

function NavBar(props: any) {
  return (
    <div className="navbar-container">
      <div id="logo">
        <FaRegKeyboard size={35} />
        <span>Amir.dev</span>
      </div>
      <div id="btns-center">
        <div className="btn">
          <span>Button 1</span>
        </div>
        <div className="btn">
          <span>Button 1</span>
        </div>
        <div className="btn">
          <span>Button 1</span>
        </div>
        <div className="btn">
          <span>Button 1</span>
        </div>
        <div className="btn">
          <span>Button 1</span>
        </div>
      </div>
      <div id="btns-right">
        <BiBell size={25} />
        <div id="btn-profile"></div>
        <div id="upload">
          <FiLogIn size={20} />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
