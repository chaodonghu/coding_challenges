import React, { useState } from "react";

const CreditCardInput = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [errors, setErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{4})/g, "$1 ") // Add space every 4 digits
      .trim(); // Remove trailing spaces
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);

    // Validation: Ensure exactly 16 digits (excluding spaces)
    // const digitsOnly = formatted.replace(/\s/g, "");
    setErrors((prev) => ({
      ...prev,
      cardNumber:
        formatted.length === 19 ? "" : "Card number must be 16 digits",
    }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length > 4) value = value.slice(0, 4); // Limit to MMYY format

    if (value.length >= 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setExpiry(value);

    // Validate expiry date (MM should be 01-12, YY should be in the future)
    const [mm, yy] = value.split("/");
    const month = parseInt(mm, 10);
    const year = parseInt(yy, 10);
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of year

    let error = "";
    if (value.length === 5) {
      if (month < 1 || month > 12) {
        error = "Invalid month";
      } else if (year < currentYear) {
        error = "Card expired";
      }
    } else {
      error = "Invalid expiry format";
    }

    setErrors((prev) => ({
      ...prev,
      expiry:
        error === "Invalid expiry format" && value.length < 5 ? "" : error,
    }));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvv(value);

    setErrors((prev) => ({
      ...prev,
      cvv: value.length >= 3 ? "" : "CVV must be 3 or 4 digits",
    }));
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* Card Number */}
      <label className="block text-sm font-medium text-gray-700">
        Card Number
      </label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="1234 5678 9012 3456"
        className={`w-full p-2 border ${
          errors.cardNumber ? "border-red-500" : "border-gray-300"
        } rounded-md mb-1 text-black`}
        maxLength={19}
      />
      {errors.cardNumber && (
        <p className="text-red-500 text-sm">{errors.cardNumber}</p>
      )}

      {/* Expiry Date */}
      <label className="block text-sm font-medium text-gray-700 mt-2">
        Expiry Date
      </label>
      <input
        type="text"
        value={expiry}
        onChange={handleExpiryChange}
        placeholder="MM/YY"
        className={`w-full p-2 border ${
          errors.expiry ? "border-red-500" : "border-gray-300"
        } rounded-md mb-1 text-black`}
        maxLength={5}
      />
      {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}

      {/* CVV */}
      <label className="block text-sm font-medium text-gray-700 mt-2">
        CVV
      </label>
      <input
        type="text"
        value={cvv}
        onChange={handleCvvChange}
        placeholder="123"
        className={`w-full p-2 border ${
          errors.cvv ? "border-red-500" : "border-gray-300"
        } rounded-md mb-1 text-black`}
        maxLength={4}
      />
      {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
    </div>
  );
};

export default CreditCardInput;
