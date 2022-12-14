import React from "react";
import classes from "./Footer.module.css";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <h1>Shortly</h1>

      <div className={classes.about}>
        <div>
          <h3>Feature</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div>
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developer</p>
          <p>Support</p>
        </div>

        <div>
          <h3>company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div className={classes.socialIcons}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pintrest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
