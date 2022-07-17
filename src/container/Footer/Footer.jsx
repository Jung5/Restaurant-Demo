import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          2625 Old Denton Rd #612, Carrollton, TX 75007
        </p>
        <p className="p__opensans">+1 112-119-1541</p>
        <p className="p__opensans">+1 123-456-7894</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEQoS3Ini43zAAAAYIK_nrQMCW4D4f6MKxL4y7G-2VluM2MTmhet6kA7QCUYfTCNj69JIa8ofl0paeTEB8ChZDfmUZ3qfxxRJmM4wegf1WKaoNmOKgQL6s8XEjeGG2XLpg5LKc=&original_referer=https://noahstudio.photography/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnoah-cho-5151aa221%2F">
            <FiLinkedin />
          </a>
          <a href="https://www.facebook.com/noahstudiodallastx">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/noah_studio_tx/">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">06:00 pm - 02:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">06:00 pm - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Noah's. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
