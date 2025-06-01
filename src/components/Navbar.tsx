import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-2 md:py-4 px-4 md:px-12 ${
        isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Netflix Logo */}
          <Link to="/" className="mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="30" fill="#E50914" viewBox="0 0 1024 276.742">
              <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 74.59 30.27-74.59h47.295z"/>
            </svg>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/browse" className="text-sm font-medium hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/browse" className="text-sm font-medium hover:text-gray-300 transition-colors">TV Shows</Link>
            <Link to="/browse" className="text-sm font-medium hover:text-gray-300 transition-colors">Movies</Link>
            <Link to="/browse" className="text-sm font-medium hover:text-gray-300 transition-colors">New & Popular</Link>
            <Link to="/browse" className="text-sm font-medium hover:text-gray-300 transition-colors">My List</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button 
              className="flex items-center text-sm"
              onClick={() => setShowMenu(!showMenu)}
            >
              Browse <ChevronDown className={`ml-1 transform transition-transform ${showMenu ? 'rotate-180' : ''}`} size={16} />
            </button>
            
            {/* Mobile Menu Dropdown */}
            {showMenu && (
              <div className="absolute top-full left-0 w-full bg-black/90 py-2 border-t border-gray-800">
                <div className="flex flex-col px-4 space-y-2">
                  <Link to="/browse" className="text-sm py-2 hover:text-gray-300 transition-colors">Home</Link>
                  <Link to="/browse" className="text-sm py-2 hover:text-gray-300 transition-colors">TV Shows</Link>
                  <Link to="/browse" className="text-sm py-2 hover:text-gray-300 transition-colors">Movies</Link>
                  <Link to="/browse" className="text-sm py-2 hover:text-gray-300 transition-colors">New & Popular</Link>
                  <Link to="/browse" className="text-sm py-2 hover:text-gray-300 transition-colors">My List</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>
          
          {/* User Profile */}
          <div className="relative group">
            <button className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile" 
                className="w-8 h-8 rounded" 
              />
              <ChevronDown className="ml-1 group-hover:rotate-180 transition-transform" size={16} />
            </button>
            
            {/* Profile Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 border border-gray-800 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors">Account</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors">Help Center</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors">Sign out of Netflix</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;