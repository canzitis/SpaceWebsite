import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="News">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Music">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Users">Users</NavLink>
      </div>
      <div className={classes.settings}>
        <NavLink to="Settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
