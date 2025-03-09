import { useState } from "react";

import styles from "./PhoneNumberInput.module.css";

const PhoneNumberInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errors, setErrors] = useState({
    phoneNumber: "",
  });

  const formatPhoneNumber = (phone: string) => {
    const digits = phone.replace(/\D/g, ""); // Remove all non-digit characters

    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)})${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const formattedValue = formatPhoneNumber(rawValue);

    setErrors((prev) => ({
      ...prev,
      phoneNumber: !rawValue ? "Phone number is invalid" : "",
    }));
    setInputValue(formattedValue);
  };

  return (
    <div className={styles.phoneNumber__wrapper}>
      <label className="text-gray-700 text-sm">Phone Number Input</label>
      <input
        type="tel"
        value={inputValue}
        onChange={handleChange}
        placeholder="(123) 456-7890"
        maxLength={14}
        className={`border p-2 rounded w-full text-black ${
          errors.phoneNumber ? styles.phoneNumber__input_error : ""
        }`}
      />
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
