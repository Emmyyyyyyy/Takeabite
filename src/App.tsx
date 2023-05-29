import { Navbar } from "./conponents/navbar";
import { Carousel } from "./conponents/carousel";
import { Recipes } from "./conponents/recipes";
import { Footer } from "./conponents/footer";

import "./styles/app.css";

function App() {
  return (
    <div className="appWrapper">
      <Navbar />
      <Carousel />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
