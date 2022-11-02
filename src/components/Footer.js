import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Back to top  */}
      <div className="flex items-center justify-center bg-amazon_blue-light text-white p-3 cursor-pointer hover:underline     ">
        <p onClick={scrollToTop}>Back to top</p>
      </div>

      {/* Mid footer */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  bg-amazon_blue-medium text-white p-10 px-10 lg:px-40">
        <div className="px-3 cursor-pointer items-center">
          <h2 className="font-bold py-2">Get to Know Us</h2>
          <p className="text-sm hover:underline py-1 font-light">Careers</p>
          <p className="text-sm hover:underline py-1 font-light">About Us</p>
          <p className="text-sm hover:underline py-1 font-light">
            UK Modern Slavery
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Sustainability
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Science
          </p>
        </div>

        <div className="px-3 cursor-pointer">
          <h2 className="font-bold py-2 ">Make Money with Us</h2>
          <p className="text-sm hover:underline py-1 font-light">
            Sell on Amazon
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Sell on Amazon Business
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Sell on Amazon Handmade
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Sell on Amazon Launchpad
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Protect and build your brand
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Associates Program
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Fulfilment by Amazon
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Seller Fulfilled Prime
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Advertise your Products
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Independently Publish with Us
          </p>
          <p className="text-sm hover:underline py-1 font-light">Amazon Pay</p>
          <p className="text-sm hover:underline py-1 font-light">
            Host an Amazon Hub
          </p>
          <p className="flex text-sm hover:underline py-1 ">
            {" "}
            <ChevronRightIcon className="h-2 flex mt-1 mr-1" /> See More Make
            Money with Us
          </p>
        </div>

        <div className="px-3 cursor-pointer">
          <h2 className="font-bold py-2 ">Amazon Payment Methods</h2>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Platinum Mastercard
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Classic Mastercard
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Money Store
          </p>
          <p className="text-sm hover:underline py-1 font-light">Gift Cards</p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Currency Converter
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Payment Methods Help
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Shop with Points
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Top Up Your Account
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Top Up Yoour Account in Store
          </p>
        </div>

        <div className="px-3 cursor-pointer">
          <h2 className="font-bold py-2 ">Let Us Help You</h2>
          <p className="text-sm hover:underline py-1 font-light">
            COVID-19 and Amazon
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Track Packages or View Orders
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Delivery Rates & Policies
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Prime
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Returns & Replacements
          </p>
          <p className="text-sm hover:underline py-1 font-light">Recycling</p>
          <p className="text-sm hover:underline py-1 font-light">
            Manage Your Content and Devices
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Mobile App
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Amazon Assistant
          </p>
          <p className="text-sm hover:underline py-1 font-light">
            Customer Service
          </p>
        </div>
      </div>

      {/* Amazon Countries  */}
      <div className=" bg-amazon_blue-medium items-center justify-center text-center p-5 border-t-[2px] border-amazon_blue-light   ">
        <Image
          src="https://links.papareact.com/f90"
          width={105}
          height={28}
          objectFit="contain"
          className="cursor-pointer"
        />

        <div className="flex flex-wrap p-2 justify-center space-x-3  text-white text-xs font-extralight  ">
          <p className="cursor-pointer hover:underline">Australia</p>
          <p className="cursor-pointer hover:underline">Brasil</p>
          <p className="cursor-pointer hover:underline">Canada</p>
          <p className="cursor-pointer hover:underline">China</p>
          <p className="cursor-pointer hover:underline">France</p>
          <p className="cursor-pointer hover:underline">Germany</p>
          <p className="cursor-pointer hover:underline">India</p>
          <p className="cursor-pointer hover:underline">Italy</p>
          <p className="cursor-pointer hover:underline">Japan</p>
          <p className="cursor-pointer hover:underline">Mexico</p>
          <p className="cursor-pointer hover:underline">Netherlands</p>
          <p className="cursor-pointer hover:underline">Poland</p>
          <p className="cursor-pointer hover:underline">Singapore</p>
          <p className="cursor-pointer hover:underline">Spain</p>
          <p className="cursor-pointer hover:underline">United States</p>
        </div>
      </div>

      {/* Other Services */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-amazon_blue text-white text-[11px] p-5 pl-10  xl:px-40 ">
        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Amazon Music</h3>
          <p className="font-extralight ">Stream millions of songs</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">AbeBooks</h3>
          <p className="font-extralight ">Books, art & collectables</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">ACX</h3>
          <p className="font-extralight ">Audiobook Publishing Made Easy</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Amazon Web Services</h3>
          <p className="font-extralight ">Scalable Cloud Computing Services</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Audible</h3>
          <p className="font-extralight ">Download Audiobooks</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Book Depository</h3>
          <p className="font-extralight ">Books With Free Delivery Worldwide</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">DPReview</h3>
          <p className="font-extralight ">Digital Photography</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Goodreads</h3>
          <p className="font-extralight ">Book reviews & recomendations</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Amazon Home Services</h3>
          <p className="font-extralight ">Experienced props </p>
          <p className="font-extralight ">Happiness Garantee</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">IMDb</h3>
          <p className="font-extralight ">Movies, TV & Celebrities</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Kindle Direct Publishing</h3>
          <p className="font-extralight ">Indie Digital & Print</p>
          <p className="font-extralight "> Publishing Made Easy</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Shopbop</h3>
          <p className="font-extralight ">Designer Fashion Brands</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Amazon Warehouse</h3>
          <p className="font-extralight ">Deep Discounts</p>
          <p className="font-extralight ">Open-Box Products</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Amazon Business</h3>
          <p className="font-extralight ">Service for business customers</p>
        </div>

        <div className="grid py-5 cursor-pointer hover:underline">
          <h3 className="font-bold ">Whole Foods Market</h3>
          <p className="font-extralight ">We Believe in Real Food</p>
        </div>
      </div>

      <div className="  bg-amazon_blue text-white text-xs p-5 border-t-[1px] border-amazon_blue-medium">
        <div className="flex justify-center p-5 text-xs ">
          <p className="px-5">Conditions of Use & Sale</p>
          <p className="px-5"> Privacy Notice</p>
          <p className="px-5"> Cookies Notice</p>
          <p className="px-5">Interest-Based Ads Notice</p>
        </div>

        <div className="flex justify-center px-5 text-[9px] ">
          <p>© Rita Buils 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
