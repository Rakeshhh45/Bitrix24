import React from "react";
import Ragistration from "./Ragistration";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center ">
      <div className="mb-14 ml-auto mr-5 bg-white p-6 rounded-lg shadow-lg relative w-96">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Popup Content */}
        <h2 className="text-xl font-bold mb-4 text-center">Your Bitrix24</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Authorize to enter your company's Bitrix24.
        </p>
        <input className="h-10 ml-14 w-56 mb-5 border border-black-500 pl-16 border rounded-full " type="text" placeholder="USERNAME" />
        <input className="h-10 ml-14 w-56 mb-5 border border-black-500 pl-16 border rounded-full " type="text" placeholder="PASSWORD" />

        <button className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          SIGN IN
        </button>
        <a className="ml-56 text-sm text-blue-500 hover:underline" href="">Forgot Password</a>
        {/* <div className="w-12 h-12 bg-gray-300 mx-auto mt-4 rounded-lg"></div> */}
        <p className="text-center text-sm text-gray-500 mt-2">
          Don't have Bitrix24 yet?
        </p>
        <a href="./Ragistration" className="block text-center text-blue-500 mt-1 hover:underline ml-18">
          Create Your Bitrix24 Now
        </a>
      </div>
    </div>
  );
};

export default LoginPopup;
