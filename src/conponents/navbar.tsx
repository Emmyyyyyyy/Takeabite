import "../styles/navbar.css";

import facebookIcon from "../images/facebook-app-symbol.png";
import twitterIcon from "../images/twitter.png";
import igIcon from "../images/instagram.png";
import hamburgerIcon from "../images/more.png";

export const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="logo">
          <p className="logoText">
            Foodieland<span className="logoTextDot">.</span>
          </p>
        </div>
        <div className="navigatorWrapper">
          <a href="/">Home</a>
          <a href="/">Recipes</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
          <a href="/">About us</a>
        </div>
        <div className="socialMediaIconWrapper">
          <a href="/">
            <img src={facebookIcon} className="socialMediaIcon" />
          </a>
          <a href="/">
            <img src={twitterIcon} className="socialMediaIcon" />
          </a>
          <a href="/">
            <img src={igIcon} className="socialMediaIcon" />
          </a>
          <div className="hamburgerMenu">
            <img src={hamburgerIcon} className="hamburgerIcon"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
