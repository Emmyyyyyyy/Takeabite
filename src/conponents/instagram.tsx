import '../styles/instagram.css';

import igIcon from '../images/004-instagram.png';
import topIg from '../images/Top.png';
import postIg from '../images/Rectangle.png';
import captionIg from '../images/Bottom.png';

export const Instagram = () => {
  return (
    <div className="instagramWrapper">
      <div className="instagramContainer">
        <div className="instagramTextArea">
          <p className="header">Check out @foodieland on Instagram</p>
          <p className="subheader">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
        </div>
        <div className="instagramPostArea">
          <div className="instagramPost">
            <img src={topIg} className="igPostImage"></img>
            <img src={postIg} className="igPostImage"></img>
            <img src={captionIg} className="igPostImage"></img>
          </div>
          <div className="instagramPost">
            <img src={topIg} className="igPostImage"></img>
            <img src={postIg} className="igPostImage"></img>
            <img src={captionIg} className="igPostImage"></img>
          </div>
          <div className="instagramPost">
            <img src={topIg} className="igPostImage"></img>
            <img src={postIg} className="igPostImage"></img>
            <img src={captionIg} className="igPostImage"></img>
          </div>
          <div className="instagramPost">
            <img src={topIg} className="igPostImage"></img>
            <img src={postIg} className="igPostImage"></img>
            <img src={captionIg} className="igPostImage"></img>
          </div>
        </div>
        <p className="visitInstagramBtn">
          Visit Our Instagram
          <span>
            <img src={igIcon} className="socialMediaIcon"></img>
          </span>
        </p>
      </div>
    </div>
  );
};
