import { FaFacebookF } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
function Footer() {
  return (
    <div className="bg-black py-6 text-gray-200">
      <div className="flex flex-wrap w-[80%] m-auto">
        <div className="flex-grow flex flex-col gap-3 ">
          <h2 className="font-bold">9JA PIZZA</h2>
          <div>
            <p>20 round road ikeja Lagos</p>
            <p>Phone: +234814552276</p>
            <p>Email: support@9japizza.com</p>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-3 justify-self-center">
          <h2 className="font-bold">OPENING HOURS</h2>
          <div className="flex gap-10">
            <div>
              <p>MON - TUES</p>
              <p>WED - THURS</p>
              <p>LAUNCH</p>
              <p>SUNDAYS</p>
            </div>
            <div>
              <p>6:00am - 10:00pm</p>
              <p>6:00am - 10:00pm</p>
              <p>Everyday</p>
              <p className="bg-red-500 w-[50%] text-white">CLOSED</p>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-3  justify-self-right">
          <h2 className="font-bold">USEFUL LINKS</h2>
          <div className="cursor-pointer">
            <p className=" hover:underline">Privacy Policy</p>
            <p className=" hover:underline">Order Pricing</p>
            <p className=" hover:underline">Quantity and services</p>
            <p className=" hover:underline">About</p>
            <p className=" hover:underline">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 my-3 text-xl">
        <FaFacebookF />
        <BsTwitterX />
        <BsInstagram />
      </div>
    </div>
  );
}

export default Footer;
