import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/snippits" element={<div>TODO: Add writings here.</div>} />
          <Route path="/books" element={<div>TODO: Add a list of books here.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
