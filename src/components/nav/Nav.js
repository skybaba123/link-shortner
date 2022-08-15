import React, { useState } from "react";
import classes from "./Nav.module.css";

const MobileNav = () => {
  return (
    <section className={classes.mobileNav}>
      <div className={classes.navcontainer}>
        <p>Shortly</p>
        <p>Feature</p>
        <p>Pricing</p>
        <p>Resources</p>
        <hr />
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </section>
  );
};

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav>
        <div className={classes.navLeft}>
          <h1>Shortly</h1>
          <p>Feature</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div onClick={showNavHandler} className={classes.handbuger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.navRight}>
          <p>Login</p>
          <button>Sign Up</button>
        </div>
      </nav>
      {showNav && <MobileNav />}
    </>
  );
};

export default Nav;
