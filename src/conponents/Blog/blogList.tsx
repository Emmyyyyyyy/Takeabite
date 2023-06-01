import '../../styles/BlogStyles/blogList.css';

import adsBg from '../../images/Star 1.png';
import adsImage from '../../images/01.png';
import profileImg from '../../images/Ellipse 2.png';
import foodImage from '../../images/foodImg.png';

export const BlogList = () => {
  return (
    <div className="blogListWrapper">
      <div className="blogListContainer">
        <div className="blogList">
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={foodImage} className="foodImage"></img>
            <div className="blogTextArea">
              <p className="recipeName">Crochet Projects for Noodle Lovers</p>
              <p className="recipesContainerSubHeader">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim.
              </p>
              <div className="authorInfo">
                <img src={profileImg}></img>
                <p className="authorName">John Smith</p>
                <div className="dividerLine"></div>
                <p className="publishDate">15 March 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tastyRecipeAndAdsWrapper">
          <div className="tastyRecipeContainer">
            <p className="tastyRecipeHeader">Tasty Recipes</p>
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
