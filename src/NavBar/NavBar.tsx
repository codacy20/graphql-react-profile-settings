import { FaRegKeyboard } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { Button } from "../Button/Button";
import "./NavBar.scss";

function NavBar(props: any) {
  return (
    <div className="navbar-container">
      <div id="logo">
        <FaRegKeyboard size={35} />
        <span>Amir.dev</span>
      </div>
      <div id="btns-center">
        <Button />
        <Button />
        <Button />
        <Button />
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
