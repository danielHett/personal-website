import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import SiteContainer from './SiteContainer.jsx';
import Home from './pages/Home/Home.jsx';
import './main.css';

const navRoutes = [
  {
    label: 'resume',
    isRouter: false,
    link: '/official_resume.pdf',
  },
  {
    label: 'linkedin',
    isRouter: false,
    link: 'https://www.linkedin.com/in/daniel-hettinger/',
  },
  {
    label: 'github',
    isRouter: false,
    link: 'https://github.com/danielHett',
  },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteContainer navRoutes={navRoutes} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
