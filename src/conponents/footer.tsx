import "../styles/footer.css";

import facebookIcon from "../images/facebook-app-symbol.png";
import twitterIcon from "../images/twitter.png";
import igIcon from "../images/instagram.png";
import hamburgerIcon from "../images/more.png";

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="topContent">
          <div>
            <p className="logoText">
              Foodieland<span className="logoTextDot">.</span>
            </p>
            <p className="slogan">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>
          <div className="navigatorWrapper navigatorFooter">
            <a href="/">Recipes</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
            <a href="/">About us</a>
          </div>
        </div>
        <div className="dividerLine"></div>
        <div className="bottomContent">
          <p className="copyRight">© 2020 Flowbase. Powered by Webflow</p>
          <div className="socialMediaIconWrapper socialMediaIconFooter">
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
    </div>
  );
};
