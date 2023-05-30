import { Navbar } from './conponents/navbar';
import { Carousel } from './conponents/carousel';
import { Recipes } from './conponents/recipes';
import { LearnMore } from './conponents/learnMore';
import { Instagram } from './conponents/instagram';
import { MoreRecipes } from './conponents/moreRecipes';
import { SubscribeCard } from './conponents/subscribeCard';
import { Footer } from './conponents/footer';

import './styles/app.css';

function App() {
  return (
    <div className="appWrapper">
      <Navbar />
      <Carousel />
      <Recipes />
      <LearnMore />
      <Instagram />
      <MoreRecipes />
      <SubscribeCard />
      <Footer />
    </div>
  );
}

export default App;
