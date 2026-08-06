import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhatsOnPage from './pages/WhatsOnPage';
import MenuPage from './pages/MenuPage';
import PrivateHirePage from './pages/PrivateHirePage';
import BottomlessBrunchPage from './pages/BottomlessBrunchPage';
import BookingsPage from './pages/BookingsPage';
import SplitTheGPage from './pages/SplitTheGPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whats-on" element={<WhatsOnPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/private-hire" element={<PrivateHirePage />} />
        <Route path="/bottomless-brunch" element={<BottomlessBrunchPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/split-the-g" element={<SplitTheGPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
