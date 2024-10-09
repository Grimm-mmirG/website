/**
 * Name: Isaac Hill
 * Date: 2024-10-09
 *
 * TemperatureConverter Component
 * This component allows users to convert between Celsius and Fahrenheit.
 * The user inputs a temperature, selects a unit (Celsius or Fahrenheit), and the converted temperature is displayed.
 *
 * Props: None
 * State:
 *   - temperature: The temperature input by the user.
 *   - convertedTemperature: The result of the conversion.
 *   - unit: The unit of measurement selected by the user (Celsius or Fahrenheit).
 */

"use client";
import React, { useState, useEffect } from "react";

const TemperatureConverter = () => {
  // State to store the user input temperature
  const [temperature, setTemperature] = useState("");

  // State to store the converted temperature
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  // State to store the selected unit (Celsius or Fahrenheit)
  const [unit, setUnit] = useState("celsius");

  /**
   * useEffect hook to trigger conversion when temperature or unit changes.
   * If temperature is empty, set convertedTemperature to null.
   */
  useEffect(() => {
    if (temperature !== "") {
      convertTemperature(); // Call conversion when temperature or unit changes
    } else {
      setConvertedTemperature(null); // Clear converted temperature if input is empty
    }
  }, [temperature, unit]);

  /**
   * convertTemperature function that handles the conversion between Celsius and Fahrenheit.
   * It checks if the input temperature is a valid number and performs the appropriate calculation based on the selected unit.
   */
  const convertTemperature = () => {
    // Parse the input temperature to a floating-point number
    const tempValue = parseFloat(temperature);

    // If the temperature is a valid number, proceed with conversion
    if (!isNaN(tempValue)) {
      if (unit === "celsius") {
        // Convert Celsius to Fahrenheit (F = (C * 9/5) + 32)
        setConvertedTemperature(((tempValue * 9) / 5 + 32).toFixed(2));
      } else {
        // Convert Fahrenheit to Celsius (C = (F - 32) * 5/9)
        setConvertedTemperature((((tempValue - 32) * 5) / 9).toFixed(2));
      }
    } else {
      // If the input is invalid, set convertedTemperature to null
      setConvertedTemperature(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Temperature Converter</h1>

      {/* Input for temperature */}
      <div className="p-6 rounded-lg w-full max-w-md">
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          placeholder="Enter temperature"
        />

        {/* Dropdown to select unit (Celsius or Fahrenheit) */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border border-gray-300 p-3 text-gray-900 mx-2 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>

        {/* Display selected unit details */}
        {temperature !== "" && (
          <div className="mb-2">
            <p className="text-lg text-gray-200">
              Converting from: {unit === "celsius" ? "Celsius" : "Fahrenheit"}
            </p>
            <p className="text-lg text-gray-200">
              Converting to: {unit === "celsius" ? "Fahrenheit" : "Celsius"}
            </p>
          </div>
        )}

        {/* Display the converted temperature */}
        {convertedTemperature !== null && (
          <p className="text-xl text-gray-200 mt-4">
            Converted Temperature: {convertedTemperature}°{" "}
            {unit === "celsius" ? "F" : "C"}
          </p>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;
