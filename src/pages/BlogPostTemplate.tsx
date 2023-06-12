import { Navbar } from '../conponents/Home/navbar';
import { BlogPost } from '../conponents/BlogPostTemplate/BlogPost';
import { SubscribeCard } from '../conponents/Home/subscribeCard';
import { RecommendationRecipe } from '../conponents/Contact/recommendationRecipe';
import { Footer } from '../conponents/Home/footer';

export const BlogPostTemplate = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <SubscribeCard />
      <RecommendationRecipe />
      <Footer />
    </div>
  );
};
