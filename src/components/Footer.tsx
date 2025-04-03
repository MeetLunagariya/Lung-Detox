import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Healita
            </h3>
            <p className="text-gray-600">
              Helping smokers breathe easier with our revolutionary lung detox
              solution.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                1-800-Healita
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                contact@Healita.com
              </p>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                123 Health Street, Wellness City
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Healita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
