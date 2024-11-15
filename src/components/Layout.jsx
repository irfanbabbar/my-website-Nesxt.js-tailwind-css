// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
