import React from 'react';
import { Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold">GameHub</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate destination for online gaming. Discover thousands of free games across all genres and platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Popular Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Leaderboards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>By Moussab Fatmi</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 GameHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;