import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
// import { loadPizza } from '../features/cartSlice';

function AppLayout() {
  // const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  console.log(cart);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] overflow-x-clip">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default AppLayout;
