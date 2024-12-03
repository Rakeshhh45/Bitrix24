import React from "react";

const RegistrationPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="bg-blue-500 text-white flex-1 flex flex-col justify-center items-center ">
        <img className="" src="https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg" alt="" srcset="" />
        <h1 className="text-4xl font-bold">Your company. United.</h1>
        <p className="text-lg mt-2">Free. Unlimited. Online.</p>
        <div className="absolute bottom-4 left-80 mb-20">
          <select className="bg-blue-400 text-white px-3 py-1 rounded">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white flex-1 flex flex-col justify-center px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-6">Bitrix24 registration</h2>
        <p className="mb-4">Use your social account to register</p>
        <div className="flex gap-4 mb-6">
          <button className="bg-blue-600 text-white rounded-full p-2">
            <i className="fab fa-facebook"></i> 
          </button>
          <button className="bg-red-500 text-white rounded-full p-2">
            <i className="fab fa-google"></i>
          </button>
          <button className="bg-black text-white rounded-full p-2">
            <i className="fab fa-apple"></i>
          </button>
          <button className="bg-orange-500 text-white rounded-full p-2">
            <i className="fab fa-microsoft"></i>
          </button>
          <button className="bg-blue-400 text-white rounded-full p-2">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
        <p className="text-center mb-4">or</p>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <div className="flex flex-col mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>
              I want to receive product updates info and special offers
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>I want to receive training materials</span>
          </label>
        </div>
        <p className="text-sm mb-4">
          By registering you confirm that you accept the{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Service
          </a>{" "}
          and the{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
          .
        </p>
        <button className="bg-green-500 text-white w-full py-2 rounded-lg">
          REGISTER FOR FREE
        </button>
        <button className="text-blue-500 underline mt-4">I HAVE A COUPON</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
