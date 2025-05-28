"use client"

import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo-no-image.png"
                alt="Missy Bakes Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="rubik text-black hover:text-gray-800 px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="rubik text-black hover:text-gray-800 px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Menu
            </Link>
            <Link
              href="/order"
              className="rubik text-black hover:text-gray-800 px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Order
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0 px-4 py-4">
              <div className="absolute top-4 right-4">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 px-4 py-6">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 text-lg font-semibold text-black hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="flex items-center px-4 py-3 text-lg font-semibold text-black hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  href="/order"
                  className="flex items-center px-4 py-3 text-lg font-semibold text-black hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
