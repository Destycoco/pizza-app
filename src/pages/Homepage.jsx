import Blog from '../components/Blog';
import PizzaSlide from '../components/PizzaSlide';
import Reviews from '../components/Reviews';
import Specialty from '../components/Specialty';

function Homepage() {
  return (
    <>
      <PizzaSlide />
      <Specialty />
      <Blog />
      <Reviews />
    </>
  );
}
export default Homepage;
