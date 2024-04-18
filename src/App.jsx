import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import PizzaDetails from './pages/PizzaDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="homepage" element={<Homepage />}></Route>
          <Route path="menupage" element={<MenuPage />} />
          <Route path="pizza/:id" element={<PizzaDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
