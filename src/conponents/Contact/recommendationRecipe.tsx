import '../../styles/ContactStyles/recommendationRecipe.css';

import foodImage from '../../images/image 26.png';
import timerIcon from '../../images/Timer.png';
import foodCatagoryIcon from '../../images/ForkKnife.png';
import likeIcon from '../../images/like.png';
// import afterLikeIcon from '../images/afterLike.png';

export const RecommendationRecipe = () => {
  return (
    <div className="recommendationRecipeWrapper">
      <div className="recommendationRecipeContainer">
        <h3>Check out the delicious recipe</h3>
        <div className="moreRecipesList">
          <div className="moreRecipesCard">
            <div className="imageArea">
              <img src={foodImage} className="recipeImage"></img>
              <div className="likeIconWrapper">
                <img src={likeIcon}></img>
              </div>
            </div>
            <div className="recipeInfo">
              <p className="recipeName">
                Big and Juicy Wagyu Beef Cheeseburger
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
                  Snack
                </p>
              </div>
            </div>
          </div>
          <div className="moreRecipesCard">
            <div className="imageArea">
              <img src={foodImage} className="recipeImage"></img>
              <div className="likeIconWrapper">
                <img src={likeIcon}></img>
              </div>
            </div>
            <div className="recipeInfo">
              <p className="recipeName">
                Big and Juicy Wagyu Beef Cheeseburger
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
                  Snack
                </p>
              </div>
            </div>
          </div>
          <div className="moreRecipesCard">
            <div className="imageArea">
              <img src={foodImage} className="recipeImage"></img>
              <div className="likeIconWrapper">
                <img src={likeIcon}></img>
              </div>
            </div>
            <div className="recipeInfo">
              <p className="recipeName">
                Big and Juicy Wagyu Beef Cheeseburger
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
                  Snack
                </p>
              </div>
            </div>
          </div>
          <div className="moreRecipesCard">
            <div className="imageArea">
              <img src={foodImage} className="recipeImage"></img>
              <div className="likeIconWrapper">
                <img src={likeIcon}></img>
              </div>
            </div>
            <div className="recipeInfo">
              <p className="recipeName">
                Big and Juicy Wagyu Beef Cheeseburger
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
                  Snack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
