import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Search bar */}
        <div
          className="flex items-center  h-10 rounded-md flex-grow 
        cursor-pointer bg-yellow-400 hover:bg-yellow-500 invisible sm:visible  "
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right Section */}
        <div
          className="text-white flex  items-center text-xs 
        space-x-6 mx-6 whitespace-nowrap  "
        >
          <div onClick={!session ? signIn : signOut} className="link ">
            <p className="hover:underline ">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold  md:text-sm">Account & lists</p>
          </div>

          <div className="link" onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className=" relative link flex items-center"
          >
            <span
              className="absolute top-0 right-0 sm:right-10 h-4 w-4
           bg-yellow-400 text-center rounded-full text-black 
           font-bold "
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className=" hidden md:text-sm sm:inline font-extrabold  mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center font-semibold  ">
          <Bars3Icon className="h-6 mr-4" />
          All
        </p>
        <p className="link flex items-center">Prime Video</p>
        <p className="link flex items-center">Amazon Business</p>
        <p className="link flex items-center">Today's Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food £ Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
