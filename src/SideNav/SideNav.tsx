import React from "react";
import { Button } from "../Button/Button";
import "./SideNav.scss";

function SideNav(props: any) {
  return (
    <div className="sidenav-container">
      <div id="wrapper">
        <span>Settings</span>
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default SideNav;
