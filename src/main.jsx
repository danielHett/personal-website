import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Books from './pages/Books/Books.jsx';
import Articles from './pages/Articles/Articles.jsx';
import Article from './pages/Article/Article.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="/articles/:article" />
          </Route>
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
