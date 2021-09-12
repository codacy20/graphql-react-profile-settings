import React from "react";
import "./SideNav.scss";

function SideNav(props: any) {
  return (
    <div className="sidenav-container">
      <div id="wrapper">
        <span>Settings</span>
        <div id="profile">
          <span>Profile Settings</span>
        </div>
        <div id="logout">
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
