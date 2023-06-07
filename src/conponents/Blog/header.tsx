import '../../styles/BlogStyles/header.css';

export const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <p className="header">Blog & Article</p>
        <p className="subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="inputWrapper">
          <input placeholder="Search article, news or recipe..."></input>
          <div className="inputBtn">Search</div>
        </div>
      </div>
    </div>
  );
};
