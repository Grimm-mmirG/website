/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * WeightConverterPage Component
 * This page component contains the WeightConverter and Navbar components.
 * It sets the background image for the page and centers the content.
 *
 * Props: None
 * State: None
 */

"use client";

import Navbar from "../components/Navbar";
import WeightConverter from "../components/WeightConverter";
import React from "react";

export default function WeightConverterPage() {
  return (
    // Main wrapper with a fixed background and dark overlay
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('./background.gif')" }}
    >
      {/* Navbar component at the top of the page */}
      <Navbar />

      {/* Container for the WeightConverter centered on the page */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-70 bg-gray-900 text-white">
        {/* WeightConverter component that will handle the conversion logic */}
        <WeightConverter />
      </div>
    </div>
  );
}
