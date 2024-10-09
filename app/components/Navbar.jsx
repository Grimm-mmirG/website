/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * Navbar Component
 * This component renders the navigation bar at the top of the page with links to different converter pages.
 * It uses Next.js's `Link` component for navigation between pages.
 * The navbar has a backdrop blur effect and is styled to be fixed at the top of the screen.
 *
 * Props: None
 */

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-700/50 backdrop-blur-md text-white p-4">
      {/* Main container for the navbar, centering content */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Home link */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Home
        </Link>

        {/* Links to different converter pages */}
        <div className="space-x-4">
          {/* Weight Converter */}
          <Link href="/weight" className="hover:text-gray-300 font-bold">
            Weight Converter
          </Link>

          {/* Distance Converter */}
          <Link href="/distance" className="hover:text-gray-300 font-bold">
            Distance Converter
          </Link>

          {/* Temperature Converter */}
          <Link href="/temperature" className="hover:text-gray-300 font-bold">
            Temperature Converter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
