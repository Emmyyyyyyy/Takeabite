import { Navbar } from '../conponents/Home/navbar';
import { RecipeDetailTemplate } from '../conponents/RecipeDetail/recipeDetail';
import { SubscribeCard } from '../conponents/Home/subscribeCard';
import { RecommendationRecipe } from '../conponents/Contact/recommendationRecipe';
import { Footer } from '../conponents/Home/footer';

export const RecipeDetail = () => {
  return (
    <div>
      <Navbar />
      <RecipeDetailTemplate />
      <SubscribeCard />
      <RecommendationRecipe />
      <Footer />
    </div>
  );
};
