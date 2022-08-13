import React from "react";
import classes from "./Header.module.css";
import headImage from "./images/illustration-working.svg";
const Header = () => {
  return (
    <header>
      <div className={classes.headerLeft}>
        <h1>
          More than just
          <br /> shorter links
        </h1>
        <p>
          Build your brand's recognition and get detailed
          <br />
          insights on how your links are performing
        </p>
        <button>Get Started</button>
      </div>

      <img alt="illustration" src={headImage} />
    </header>
  );
};

export default Header;
