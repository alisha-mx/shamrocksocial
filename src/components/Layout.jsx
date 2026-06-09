import Navbar from './Navbar';
import Footer from './Footer';
import SplitTheGFab from './SplitTheGFab';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <SplitTheGFab />
  </div>
);

export default Layout;
