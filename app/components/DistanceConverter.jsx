/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * DistanceConverter Component
 * This component allows users to convert between kilometers and miles.
 * The user inputs a distance, selects a unit (kilometers or miles), and the converted distance is displayed.
 *
 * Props: None
 * State:
 *   - distance: The distance input by the user.
 *   - convertedDistance: The result of the conversion.
 *   - unit: The unit of measurement selected by the user (kilometers or miles).
 *
 */

"use client";
import React, { useState, useEffect } from "react";

const DistanceConverter = () => {
  // State to store the user input distance
  const [distance, setDistance] = useState("");

  // State to store the converted distance
  const [convertedDistance, setConvertedDistance] = useState(null);

  // State to store the selected unit (kilometers or miles)
  const [unit, setUnit] = useState("kilometers");

  /**
   * useEffect hook to trigger conversion when distance or unit changes.
   * If distance is empty, set convertedDistance to null.
   */
  useEffect(() => {
    if (distance !== "") {
      convertDistance(); // Call conversion when distance or unit changes
    } else {
      setConvertedDistance(null); // Clear converted distance if input is empty
    }
  }, [distance, unit]);

  /**
   * convertDistance function that handles the conversion between kilometers and miles.
   * It checks if the input distance is a valid number and performs the appropriate calculation based on the selected unit.
   */
  const convertDistance = () => {
    // Parse the input distance to a floating-point number
    const distanceValue = parseFloat(distance);

    // If the distance is a valid number, proceed with conversion
    if (!isNaN(distanceValue)) {
      if (unit === "kilometers") {
        // Convert kilometers to miles (1 km = 0.621371 miles)
        setConvertedDistance((distanceValue / 1.60934).toFixed(2));
      } else {
        // Convert miles to kilometers (1 mile = 1.60934 km)
        setConvertedDistance((distanceValue * 1.60934).toFixed(2));
      }
    } else {
      // If the input is invalid, set convertedDistance to null
      setConvertedDistance(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Distance Converter</h1>

      {/* Input for distance */}
      <div className="p-6 rounded-lg w-full max-w-md">
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          placeholder="Enter distance"
        />

        {/* Dropdown to select unit (kilometers or miles) */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
        </select>

        {/* Display selected unit details */}
        {distance !== "" && (
          <div className="mb-2">
            <p className="text-lg text-gray-200">
              Converting from: {unit === "kilometers" ? "Kilometers" : "Miles"}
            </p>
            <p className="text-lg text-gray-200">
              Converting to: {unit === "kilometers" ? "Miles" : "Kilometers"}
            </p>
          </div>
        )}

        {/* Display the converted distance */}
        {convertedDistance !== null && (
          <p className="text-xl text-gray-200 mt-4">
            Converted Distance: {convertedDistance}{" "}
            {unit === "kilometers" ? "miles" : "km"}
          </p>
        )}
      </div>
    </div>
  );
};

export default DistanceConverter;
