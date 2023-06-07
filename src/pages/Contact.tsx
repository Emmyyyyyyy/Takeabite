import { Navbar } from '../conponents/Home/navbar';
import { ContactUs } from '../conponents/Contact/contactUs';
import { SubscribeCard } from '../conponents/Home/subscribeCard';
import { RecommendationRecipe } from '../conponents/Contact/recommendationRecipe';
import { Footer } from '../conponents/Home/footer';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <SubscribeCard />
      <RecommendationRecipe />
      <Footer />
    </div>
  );
};
