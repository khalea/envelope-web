/* Autocomplete reference https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values */

/*
import { useState } from "react";
import { type Entity } from "@prisma/client";
*/

export default function SignUpForm() {
  // const [formData, setFormData] = useState<Entity>();

  /*
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission logic
    const form = e.target as HTMLFormElement;
    for (let i = 0; i < form.length - 1; i++) {
      const input = form[i] as HTMLInputElement;
      console.log(`${input.name}: ${input.value}`);
    }
  };

  const containerStyle = "flex flex-col justify-center items-center my-8";
  const inputGridStyle =
    "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6";

  const labelStyle = "block text-sm font-medium leading-6 text-gray-900";
  const textInputStyle =
    "block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const countryDropdownStyle =
    "block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6";

  return (
    <form className={containerStyle} onSubmit={handleSubmit}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Create your Envelope account
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className={inputGridStyle}>
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className={labelStyle}>
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="middle-name" className={labelStyle}>
              Middle name (optional)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="middle-name"
                id="middle-name"
                autoComplete="given-name"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className={labelStyle}>
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="date-of-birth" className={labelStyle}>
              Date of Birth (MM/DD/YYYY)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="date-of-birth"
                id="date-of-birth"
                autoComplete="bday"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className={labelStyle}>
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="ssn" className={labelStyle}>
              SSN
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="ssn"
                id="ssn"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="address-line1" className={labelStyle}>
              Address Line 1
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address-line1"
                id="address-line1"
                autoComplete="address-line1"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="address-line2" className={labelStyle}>
              Address Line 2 (optional)
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address-line2"
                id="address-line2"
                autoComplete="address-line2"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className={labelStyle}>
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className={labelStyle}>
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className={labelStyle}>
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className={textInputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className={labelStyle}>
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className={countryDropdownStyle}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
