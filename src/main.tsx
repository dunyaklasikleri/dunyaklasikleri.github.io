import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx';
import NotFound from './not-found.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
