import '../../styles/RecipeDetailStyles/recipeDetail.css';

import printIcon from '../../images/printer.png';
import shareIcon from '../../images/share.png';
import profileImg from '../../images/Ellipse 2.png';
import timerIcon from '../../images/Timer.png';
import foodCatagoryIcon from '../../images/ForkKnife.png';
import foodImg from '../../images/foodImg.png';
import adsBg from '../../images/Star 1.png';
import adsImage from '../../images/01.png';
import foodImage from '../../images/foodImg.png';
import directionImg from '../../images/Rectangle 23.png';

export const RecipeDetailTemplate = () => {
  return (
    <div className="recipeDetailTemplateWrapper">
      <div className="recipeDetailTemplateHeaderContainer">
        <div className="recipeDetailTemplateHeaderTopContainer">
          <div className="recipeDetailTemplateHeader">
            <h1>Health Japanese Fried Rice</h1>
            <div className="authorInfo">
              <img src={profileImg}></img>
              <div className="profileText">
                <p className="authorName">John Smith</p>
                <p className="publishDate">15 March 2022</p>
              </div>
              <div className="dividerLine"></div>
              <div className="recipeDetailHeader">
                <img src={timerIcon}></img>
                <div>
                  <p>PREP TIME</p>
                  <p>15 Minutes</p>
                </div>
              </div>
              <div className="dividerLine"></div>
              <div className="recipeDetailHeader">
                <img src={timerIcon}></img>
                <div>
                  <p>COOK TIME</p>
                  <p>15 Minutes</p>
                </div>
              </div>
              <div className="dividerLine"></div>
              <div className="recipeDetailHeader">
                <img src={foodCatagoryIcon}></img>
                <div>
                  <p style={{ marginBottom: '0' }}>PREP TIME</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shareBtnWrapper">
            <div className="shareBtnContainer">
              <img src={printIcon} />
              <p>PRINT</p>
            </div>
            <div className="shareBtnContainer">
              <img src={shareIcon} />
              <p>SHARE</p>
            </div>
          </div>
        </div>
        <div className="recipeDetailTemplateHeaderMiddleContainer">
          <div className="imageWrapper">
            <img src={foodImg}></img>
          </div>
          <div>
            <p className="nutritionCardHeader">Nutrition Information</p>
            <div className="nutritionInfo">
              <p>Calories</p>
              <p>219.9 kcal</p>
            </div>
            <div className="dividerLine"></div>
            <div className="nutritionInfo">
              <p>Total Fat</p>
              <p>10.7 g</p>
            </div>
            <div className="dividerLine"></div>
            <div className="nutritionInfo">
              <p>Protein</p>
              <p>7.9 g</p>
            </div>
            <div className="dividerLine"></div>
            <div className="nutritionInfo">
              <p>Carbohydrate</p>
              <p>22.3 g</p>
            </div>
            <div className="dividerLine"></div>
            <div className="nutritionInfo">
              <p>Cholesterol</p>
              <p>37.4 mg</p>
            </div>
            <div className="dividerLine"></div>
            <p className="nutritionDescription">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{' '}
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="recipeDetailTemplateContainer">
        <div className="recipeDetailTemplate">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <h4>For main dish</h4>
            <div className="form-control">
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1"></label>
              <p className="checked">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox3" />
              <label htmlFor="checkbox3"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox4" />
              <label htmlFor="checkbox4"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox5" />
              <label htmlFor="checkbox5"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <h4>For the sauce</h4>
            <div className="form-control">
              <input type="checkbox" id="checkbox6" />
              <label htmlFor="checkbox6"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox7" />
              <label htmlFor="checkbox7"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox8" />
              <label htmlFor="checkbox8"></label>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="dividerLine"></div>
          </div>
          <div className="direction">
            <h3>Directions</h3>
            <div className="form-control">
              <input type="checkbox" id="checkbox9" />
              <label htmlFor="checkbox9"></label>
              <h4>1. Lorem ipsum dolor sit amet </h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
                <span>
                  <img src={directionImg}></img>
                </span>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox10" />
              <label htmlFor="checkbox10"></label>
              <h4>2. Lorem ipsum dolor sit amet</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="dividerLine"></div>
            <div className="form-control">
              <input type="checkbox" id="checkbox11" />
              <label htmlFor="checkbox11"></label>
              <h4>3. Lorem ipsum dolor sit amet</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="dividerLine"></div>
          </div>
        </div>
        <div className="tastyRecipeAndAdsWrapper">
          <div className="tastyRecipeContainer">
            <p className="tastyRecipeHeader">Other Recipe</p>
            <div className="tastyRecipeList">
              <div className="tastyRecipe">
                <img src={foodImage} className="foodImage"></img>
                <div className="blogTextArea">
                  <p className="recipeName">
                    Crochet Projects for Noodle Lovers
                  </p>
                  <p className="recipesContainerSubHeader">By Andreas Paula</p>
                </div>
              </div>
              <div className="tastyRecipe">
                <img src={foodImage} className="foodImage"></img>
                <div className="blogTextArea">
                  <p className="recipeName">
                    Crochet Projects for Noodle Lovers
                  </p>
                  <p className="recipesContainerSubHeader">By Andreas Paula</p>
                </div>
              </div>
              <div className="tastyRecipe">
                <img src={foodImage} className="foodImage"></img>
                <div className="blogTextArea">
                  <p className="recipeName">
                    Crochet Projects for Noodle Lovers
                  </p>
                  <p className="recipesContainerSubHeader">By Andreas Paula</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ads">
            <p className="adsHeader">Don’t forget to eat healthy food</p>
            <img src={adsImage} className="adsImg"></img>
            <img src={adsBg} className="adsbg"></img>
            <p className="adsWebsite">www.foodieland.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
