import { Navbar } from '../conponents/Home/navbar';
import { Carousel } from '../conponents/Home/carousel';
import { Recipes } from '../conponents/Home/recipes';
import { LearnMore } from '../conponents/Home/learnMore';
import { Instagram } from '../conponents/Home/instagram';
import { MoreRecipes } from '../conponents/Home/moreRecipes';
import { SubscribeCard } from '../conponents/Home/subscribeCard';
import { Footer } from '../conponents/Home/footer';

export const Home = () => {
  return (
    <div>
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
};
