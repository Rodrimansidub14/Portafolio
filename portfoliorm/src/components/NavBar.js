"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const getNavClass = (path) => {
    return currentPath === path ? 'text-white' : 'text-white dark:text-white';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-1/6 left-12 space-y-1 z-50">
      <div className="max-w-screen-xl flex flex-col items-start">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col space-y-5">
            <li>
              <Link href="/" className={`block text-2xl font-sans ${getNavClass("/")} hover:text-gray-200 transition duration-300`} aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`block text-2xl font-sans ${getNavClass("/about")} hover:text-gray-200 transition duration-300`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`block text-2xl font-sans ${getNavClass("/projects")} hover:text-gray-200 transition duration-300`}>
                Projects
              </Link>
            </li>
            {/* Añade más enlaces según sea necesario */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
