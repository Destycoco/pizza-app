import ReviewItem from './ReviewItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const ReviewList = [
  {
    name: 'Tayo Aina',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Youtuber',
    rating: 5,
    id: 0,
  },
  {
    name: 'Sharon yvonne',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Dentist',
    rating: 3,
    id: 1,
  },
  {
    name: 'Victor Osimhen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Chemist',
    rating: 5,
    id: 2,
  },
  {
    name: 'Wizkid Aina',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Software Engineer',
    rating: 4,
    id: 3,
  },
  {
    name: 'Ibrahim Musa',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Data Analyst',
    rating: 3,
    id: 4,
  },
  {
    name: 'Tom George',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Content Creator',
    rating: 5,
    id: 5,
  },
  {
    name: 'Chioma Eze',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: 'review-5.jpg',
    proffession: 'Digital Marketer',
    rating: 4,
    id: 6,
  },
];

function Reviews() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h2 className="text-center mt-6 font-pizzaHeader text-3xl">
        What Our Customers say about us
      </h2>
      <Carousel
        responsive={responsive}
        itemClass="py-10 "
        draggable={false}
        showDots={true}
        className="w-[80%] m-auto mb-8"
      >
        {ReviewList.map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </Carousel>
    </>
  );
}

export default Reviews;
