import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function RoutedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
