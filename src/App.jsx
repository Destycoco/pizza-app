import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import PizzaDetails from './pages/PizzaDetails';
import CartPage from './pages/CartPage';
import CreateOrder from './pages/CreateOrder';
import Order from './pages/Order';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="home" element={<Homepage />}></Route>
          <Route path="menu" element={<MenuPage />} />
          <Route path="pizza/:id" element={<PizzaDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="create" element={<CreateOrder />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
