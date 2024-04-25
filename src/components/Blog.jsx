import BlogItem from './BlogItem';

function Blog() {
  const blogList = [
    {
      link: 'https://en.wikipedia.org/wiki/Debonairs_Pizza',
      title: 'Debonairs Pizza',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      image: 'blog-1.jpg',
      id: 0,
    },
    {
      link: 'https://en.wikipedia.org/wiki/New_York%E2%80%93style_pizza',
      title: 'New York Pizza',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      image: 'blog-2.jpg',
      id: 1,
    },
    {
      link: 'https://en.wikipedia.org/wiki/Roman_pizza',
      title: 'Roman Pizza',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      image: 'blog-3.jpg',
      id: 2,
    },
  ];
  return (
    <div className="text-center py-6 ">
      <h2 className=" font-pizzaHeader text-3xl mb-8">Our Blog</h2>
      <div className="flex gap-10 w-[80%] m-auto flex-shrink flex-wrap">
        {blogList.map((blog) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
