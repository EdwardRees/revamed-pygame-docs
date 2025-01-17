"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const BegTopics = [
    "Color",
    "Display",
    "Draw",
    "Events",
    "Font",
    "Image",
    "Key",
    "Locals",
    "Mixer",
    "Mouse",
    "Rect",
    "Surface",
    "Time",
    "Music",
    "Pygame",
  ];

  const InterTopics = ["Cursors", "Sprites"];

  return (
    <nav className="bg-gray-800 shadow-lg text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="block h-10 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2570/2570575.png"
                alt="pygame-icon"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 font-mono">
            <Link
              href="/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Home
            </Link>
            <div className="relative ml-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-white focus:outline-none"
              >
                Features
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } absolute right-0 mt-2 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5`}
              >
                <div className="py-1" role="menu">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => setIsOpen2(!isOpen2)}
                        type="button"
                        className="inline-flex justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Beg Topics
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
                        </svg>
                      </button>

                      <button
                        onClick={() => setIsOpen3(!isOpen3)}
                        type="button"
                        className="inline-flex justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Pro Topics
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
                        </svg>
                      </button>

                      <div
                        className={`${
                          isOpen2 ? "block" : "hidden"
                        } absolute right-0 pb-30 mb-20 w-48 rounded-md bg-gray-300 ring-1 ring-black ring-opacity-5`}
                      >
                        <div className="py-1" role="menu">
                          {BegTopics.map((topic) => (
                            <Link
                              key={topic}
                              href={`/${topic
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <span
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                                role="menuitem"
                              >
                                {topic}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`${
                          isOpen3 ? "block" : "hidden"
                        } absolute right-0 mt-2 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5`}
                      >
                        <div className="py-1" role="menu">
                          {InterTopics.map((topic) => (
                            <Link
                              key={topic}
                              href={`/${topic
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <span
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {topic}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/donate"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Donate
            </Link>
            <Link
              href="/"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className={isOpen ? "block lg:hidden" : "hidden"} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Features
          </Link>

          <Link
            href="/donate"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Donate
          </Link>

          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Log in
          </Link>
        </div>
        <Link
          href="/signup"
          className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
