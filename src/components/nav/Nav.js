import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={classes.navLeft}>
        <h1>Shortly</h1>
        <p>Feature</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className={classes.navRight}>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
