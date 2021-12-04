import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm border-b bg-white">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {" "}
        {/* using Tailwind to style */}
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit=""
          ></Image>
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain" // Preserves aspect raetio
          ></Image>
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md  ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-grey-400" />
            </div>
            <input
              className="bg-grey-50 block w-full pl-10 sm:text-sm border-grey-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn"></HomeIcon>
          <MenuIcon className="h-6 md:hidden cursor-pointer"></MenuIcon>
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45"></PaperAirplaneIcon>
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn"></PlusCircleIcon>
              <UserGroupIcon className="navBtn"></UserGroupIcon>
              <HeartIcon className="navBtn"></HeartIcon>
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
