import { Navbar } from "./conponents/navbar";
import { Carousel } from "./conponents/carousel";
import { Footer } from "./conponents/footer";

import "./styles/app.css";

function App() {
  return (
    <div className="appWrapper">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
