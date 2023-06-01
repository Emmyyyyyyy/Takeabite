import { Home } from './pages/Home';
import { Blog } from './pages/Blog';

import { Routes, Route } from 'react-router-dom';

import './styles/HomeStyles/app.css';

function App() {
  return (
    <div className="appWrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
