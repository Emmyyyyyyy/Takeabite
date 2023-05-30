import '../styles/subscribeCard.css';

import bgImg1 from '../images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png';
import bgImg2 from '../images/Photo.png';

export const SubscribeCard = () => {
  return (
    <div className="subscribeCardWrapper">
      <div className="subscribeCardContainer">
        <img src={bgImg1} className="subscribeCardBg1"></img>
        <img src={bgImg2} className="subscribeCardBg2"></img>
        <div className="subscribeCardTextArea">
          <p className="header">Deliciousness to your inbox</p>
          <p className="subheader">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
          <div className="emailInputWrapper">
            <input placeholder="Your email address..."></input>
            <div className="subscribeBtn">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  );
};
