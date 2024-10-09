/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * TemperatureConverterPage Component
 * This page component contains the TemperatureConverter and Navbar components.
 * It sets the background image for the page and centers the content.
 *
 * Props: None
 * State: None
 */

"use client";

import Navbar from "../components/Navbar";
import TemperatureConverter from "../components/TemperatureConverter";
import React from "react";

export default function TemperatureConverterPage() {
  return (
    // Main wrapper with a fixed background and dark overlay
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('../background.gif')" }}
    >
      {/* Navbar component at the top of the page */}
      <Navbar />

      {/* Container for the TemperatureConverter centered on the page */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-70 bg-gray-900 text-white">
        {/* TemperatureConverter component that will handle the conversion logic */}
        <TemperatureConverter />
      </div>
    </div>
  );
}
