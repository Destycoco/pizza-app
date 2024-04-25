import SpecialItem from './SpecialItem';

function Specialty() {
  const specialtyList = [
    {
      header: 'Delicious Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-1.png',
      id: 0,
    },
    {
      header: 'Fantabulous Flavours',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-2.png',
      id: 1,
    },
    {
      header: 'Mouthwatering Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'pizza-3.png',
      id: 2,
    },
  ];

  return (
    <div className="text-center py-8">
      <h2 className=" font-pizzaHeader text-3xl mb-8">Our 9JA Specialty</h2>
      <div className="flex w-[80%] m-auto gap-6 ">
        {specialtyList.map((special) => (
          <SpecialItem key={special.id} {...special} />
        ))}
      </div>
    </div>
  );
}

export default Specialty;
