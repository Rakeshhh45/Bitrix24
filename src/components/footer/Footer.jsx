import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaPinterest   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <h6 className="font-semibold">Company</h6>
            <ul className="mt-4 space-y-2">
              <li>Media kit</li>
              <li>Contact us</li>
              <li>In the press</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold">Support</h6>
            <ul className="mt-4 space-y-2">
              <li>How-to videos</li>
              <li>Contact support</li>
              <li>Schedule a demo</li>
              <li>Status</li>
              <li>Courses</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold">Learn</h6>
            <ul className="mt-4 space-y-2">
              <li>Solutions</li>
              <li>Testimonials</li>
              <li>Alternatives</li>
              <li>Uses</li>
              <li>Resources</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold">Products</h6>
            <ul className="mt-4 space-y-2">
              <li>Monday</li>
              <li>Zoho</li>
              <li>Trello</li>
              <li>Hubspot</li>
              <li>Microsoft Project</li>
              <li>Deskera</li>
              <li>Sharepoint</li>
              <li>Odoo</li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm space-x-4">
            <a href="#" className="hover:underline">LEGAL</a>
            <a href="#" className="hover:underline">TERMS</a>
            <a href="#" className="hover:underline">PRIVACY</a>
            <a href="#" className="hover:underline">GDPR</a>
            <a href="#" className="hover:underline">SECURITY</a>
            <a href="#" className="hover:underline">ABUSE</a>
            <a href="#" className="hover:underline">DO NOT SELL OR SHARE MY INFORMATION</a>
          </div>
          <p className="text-sm text-gray-200">© 2024 Alaio</p>
          <div className="flex space-x-4">
            <img
              src="data:image/png;base64,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"
              alt="Google Play"
              className="h-8"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-8"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6 ">
          <a href="#" className="text-white hover:text-gray-300">
            <i className=""><FaFacebook /></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className=""><FaYoutube /></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className=""><FaInstagram /></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className=""><FaLinkedin /></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className=""><FaPinterest /></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
