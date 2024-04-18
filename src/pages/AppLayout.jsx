import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
