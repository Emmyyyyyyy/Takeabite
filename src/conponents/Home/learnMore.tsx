import '../../styles/HomeStyles/learnMore.css';

import React from 'react';

import tomatoImg from '../../images/image 27.png';
import meatImg from '../../images/image 21.png';
import onionImg from '../../images/image 28.png';
import vegetableImg from '../../images/image 20.png';
import chefImag from '../../images/portrait-happy-male-chef-dressed-uniform 1.png';

export const LearnMore = () => {
  return (
    <div className="learnMoreWrapper">
      <div className="learnMoreContainer">
        <div className="learnMoreTextArea">
          <p className="learnMoreHeader">
            Everyone can be a chef in their own kitchen
          </p>
          <p className="learnMoreDescription">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
          <p className="learnMornBtn">Learn More</p>
        </div>
        <div className="learnMoreImgArea">
          <div className="bgColor"></div>
          <img src={tomatoImg} className="smallBgImg tomato"></img>
          <img src={meatImg} className="medBgImg meat"></img>
          <img src={onionImg} className="smallBgImg onion"></img>
          <img src={vegetableImg} className="medBgImg vegetable"></img>
          <img src={chefImag} className="chefImg"></img>
        </div>
      </div>
    </div>
  );
};
