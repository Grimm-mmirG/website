/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * Home Component
 * This is the homepage of the Unit Converter application.
 * It displays a welcome message, a brief description, and applies a background image.
 *
 * Props: None
 * State: None
 */

"use client";

import Navbar from "./components/Navbar";
import React from "react";

export default function Home() {
  return (
    // Main wrapper with a fixed background and dark overlay
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('../background.gif')" }}
    >
      {/* Navbar component at the top of the page */}
      <Navbar />

      {/* Container for the welcome text and description centered on the page */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-70 bg-gray-900 text-white">
        {/* Welcome header */}
        <h1 className="text-4xl font-bold text-center mb-4 ">
          Welcome to the Unit Converter
        </h1>

        {/* Short description */}
        <p className="text-xl">
          Convert weight, distance, and temperature with ease.
        </p>
      </div>
    </div>
  );
}
