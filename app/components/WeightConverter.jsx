/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * WeightConverter Component
 * This component allows users to convert between Pounds and Kilograms.
 * The user inputs a weight, selects a unit (Pounds or Kilograms), and the converted weight is displayed.
 *
 * Props: None
 * State:
 *   - weight: The weight input by the user.
 *   - convertedWeight: The result of the conversion.
 *   - unit: The unit of measurement selected by the user (Pounds or Kilograms).
 */

"use client";
import React, { useState, useEffect } from "react";

const WeightConverter = () => {
  // State to store the user input weight
  const [weight, setWeight] = useState("");

  // State to store the converted weight
  const [convertedWeight, setConvertedWeight] = useState(null);

  // State to store the selected unit (Pounds or Kilograms)
  const [unit, setUnit] = useState("pounds");

  /**
   * useEffect hook to trigger conversion when weight or unit changes.
   * If weight is empty, set convertedWeight to null.
   */
  useEffect(() => {
    if (weight !== "") {
      convertWeight(); // Call conversion when weight or unit changes
    } else {
      setConvertedWeight(null); // Clear converted weight if input is empty
    }
  }, [weight, unit]);

  /**
   * convertWeight function that handles the conversion between Pounds and Kilograms.
   * It checks if the input weight is a valid number and performs the appropriate calculation based on the selected unit.
   */
  const convertWeight = () => {
    // Parse the input weight to a floating-point number
    const weightValue = parseFloat(weight);

    // If the weight is a valid number, proceed with conversion
    if (!isNaN(weightValue)) {
      if (unit === "pounds") {
        // Convert Pounds to Kilograms (kg = lbs / 2.20462)
        setConvertedWeight((weightValue / 2.20462).toFixed(2));
      } else {
        // Convert Kilograms to Pounds (lbs = kg * 2.20462)
        setConvertedWeight((weightValue * 2.20462).toFixed(2));
      }
    } else {
      // If the input is invalid, set convertedWeight to null
      setConvertedWeight(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Weight Converter</h1>

      {/* Input for weight */}
      <div className="p-6 rounded-lg w-full max-w-md">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          placeholder="Enter weight"
        />

        {/* Dropdown to select unit (Pounds or Kilograms) */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          <option value="pounds">Pounds</option>
          <option value="kilograms">Kilograms</option>
        </select>

        {/* Display selected unit details */}
        {weight !== "" && (
          <div className="mb-2">
            <p className="text-lg text-gray-200">
              Converting from: {unit === "pounds" ? "Pounds" : "Kilograms"}
            </p>
            <p className="text-lg text-gray-200">
              Converting to: {unit === "pounds" ? "Kilograms" : "Pounds"}
            </p>
          </div>
        )}

        {/* Display the converted weight */}
        {convertedWeight !== null && (
          <p className="text-xl text-gray-200 mt-4">
            Converted Weight: {convertedWeight}{" "}
            {unit === "pounds" ? "kg" : "lbs"}
          </p>
        )}
      </div>
    </div>
  );
};

export default WeightConverter;
