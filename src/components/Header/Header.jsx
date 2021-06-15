import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import React from "react";

function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"
          alt=""
        />
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </header>
      <div className={classes.strip}></div>
    </div>
  );
}

export default Header;
