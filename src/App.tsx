import { Navbar } from "./conponents/navbar";
import { Carousel } from "./conponents/carousel";

import "./styles/app.css";

function App() {
  return (
    <div className="appWrapper">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
