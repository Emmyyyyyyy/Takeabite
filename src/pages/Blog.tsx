import { Navbar } from '../conponents/Home/navbar';
import { Header } from '../conponents/Blog/header';
import { BlogList } from '../conponents/Blog/blogList';
import { SubscribeCard } from '../conponents/Home/subscribeCard';
import { Footer } from '../conponents/Home/footer';

export const Blog = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogList />
      <SubscribeCard />
      <Footer />
    </div>
  );
};
