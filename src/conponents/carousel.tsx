import "../styles/carousel.css";

import foodImage from "../images/Mask Group.jpg";
import foodTag from "../images/image 14.png";
import timerIcon from "../images/Timer.png";
import foodCatagoryIcon from "../images/ForkKnife.png";
import profileImg from "../images/Ellipse 2.png";
import viewRecipeIcon from "../images/PlayCircle.png";

export const Carousel = () => {
  return (
    <div className="carouselWrapper">
      <div className="carouselMain">
        <div className="carouselTextArea">
          <p className="topicTag">
            <span>
              <img src={foodTag} className="icon"></img>
            </span>
            Hot Recipes
          </p>
          <p className="foodName">Spicy delicious chicken wings</p>
          <p className="foodDescription">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </p>
          <div className="foodMoreInfo">
            <p className="cookingTime">
              <span>
                <img src={timerIcon} className="icon"></img>
              </span>
              30 Minutes
            </p>
            <p className="foodCatagory">
              <span>
                <img src={foodCatagoryIcon} className="icon"></img>
              </span>
              Chicken
            </p>
          </div>
          <div className="carouselFooter">
            <div className="authorInfo">
              <div className="profileImage">
                <img src={profileImg}></img>
              </div>
              <div className="profileText">
                <p className="authorName">John Smith</p>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
            <div className="viewRecipeBtn">
              <p>View Recipes</p>
              <img src={viewRecipeIcon} className="icon"></img>
            </div>
          </div>
        </div>
        <div className="foodImageWrapper">
          <img src={foodImage} className="foodImage"></img>
        </div>
      </div>
    </div>
  );
};
