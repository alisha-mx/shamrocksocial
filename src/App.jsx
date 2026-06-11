import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SplitTheGPage from './pages/SplitTheGPage';
import PlaceholderPage from './components/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop';

// NOTE: Teaser mode — only the Home page and the Split the G game are live.
// The other pages show a placeholder. The full pages still exist in /pages;
// to switch them back on, restore the imports and routes (see git history).
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whats-on" element={<PlaceholderPage title="What's On" />} />
        <Route path="/menu" element={<PlaceholderPage title="Menu" />} />
        <Route path="/private-hire" element={<PlaceholderPage title="Private Hire" />} />
        <Route path="/bottomless-brunch" element={<PlaceholderPage title="Bottomless Brunch" />} />
        <Route path="/bookings" element={<PlaceholderPage title="Bookings" />} />
        <Route path="/split-the-g" element={<SplitTheGPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
