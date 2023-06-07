import '../../styles/ContactStyles/contactUs.css';

import chefPic from '../../images/chefPic.png';

export const ContactUs = () => {
  return (
    <div className="contactUsWrapper">
      <div className="contactUsContainer">
        <div className="contactUsImageWrapper">
          <img src={chefPic}></img>
        </div>
        <div className="formWrapper">
          <h1>Contact us</h1>
          <form>
            <div className="inputContainer">
              <label>NAME</label>
              <input type="text" placeholder="Enter your name..."></input>
            </div>
            <div className="inputContainer">
              <label>EMAIL ADDRESS</label>
              <input type="text" placeholder="Your email address..."></input>
            </div>
            <div className="inputContainer">
              <label>SUBJECT</label>
              <input type="text" placeholder="Enter subject..."></input>
            </div>
            <div className="inputContainer">
              <label>ENQUIRY TYPE</label>
              <input type="text" placeholder="Advertising"></input>
            </div>
            <div className="meassagesInput">
              <label>MESSAGES</label>
              <input type="text" placeholder="Enter your messages..."></input>
            </div>
          </form>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
