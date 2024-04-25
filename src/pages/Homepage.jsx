import Blog from '../components/Blog/Blog';
import PizzaSlide from '../components/PizzaHeader/PizzaSlide';
import Reviews from '../components/Review/Reviews';
import Specialty from '../components/Specialty/Specialty';

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
