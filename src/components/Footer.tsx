import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-gray-400 py-12 mt-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-12">
        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>
        
        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-6">
          <a href="#" className="hover:underline">Audio Description</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        
        {/* Service Code */}
        <button className="border border-gray-600 px-2 py-1 text-xs hover:text-white transition-colors mb-4">
          Service Code
        </button>
        
        {/* Copyright */}
        <p className="text-xs">
          &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;