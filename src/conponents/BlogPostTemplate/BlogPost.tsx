import '../../styles/BlogPostStyles/BlogPost.css';

import profileImg from '../../images/Ellipse 2.png';
import blogimg from '../../images/image 29.png';
import sectionimg from '../../images/Rectangle 23.png';
import facebookIcon from '../../images/facebook-app-symbol.png';
import twitterIcon from '../../images/twitter.png';
import igIcon from '../../images/instagram.png';

export const BlogPost = () => {
  return (
    <div className="blogPostWrapper">
      <div className="blogPostHeaderContainer">
        <h1>Full Guide to Becoming a Professional Chef</h1>
        <div className="authorInfo">
          <img src={profileImg}></img>
          <p className="authorName">John Smith</p>
          <div className="dividerLine"></div>
          <p className="publishDate">15 March 2022</p>
        </div>
        <p className="subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
      </div>
      <div className="blogPostImg">
        <img src={blogimg}></img>
      </div>
      <div className="blogPostBottomContainer">
        <div className="blogPostContent">
          <div className="blogSection">
            <p className="blogSectionHeder">
              How did you start out in the food industry?
            </p>
            <p className="blogSectionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          <div className="blogSection">
            <p className="blogSectionHeder">
              What do you like most about your job?
            </p>
            <p className="blogSectionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          <div className="blogSection">
            <p className="blogSectionHeder">
              Do you cook at home on your days off?
            </p>
            <img src={sectionimg}></img>
            <p className="blogSectionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          <div className="blogSection">
            <p className="blogSectionHeder">
              What would your advice be to young people looking to get their
              foot in the door?
            </p>
            <p className="blogSectionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <div className="adviceHighlight">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.”
              </p>
            </div>
          </div>
          <div className="blogSection">
            <p className="blogSectionHeder">
              What is the biggest misconception that people have about being a
              professional chef?Do you cook at home on your days off?
            </p>
            <p className="blogSectionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
        </div>
        <div className="shareBtn">
          <p className="shareBtnHeader">SHARE THIS ON:</p>
          <div className="shareIcon">
            <img src={facebookIcon} className="socialMediaIcon"></img>
            <img src={twitterIcon} className="socialMediaIcon"></img>
            <img src={igIcon} className="socialMediaIcon"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
