import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-12 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unlimited movies, TV shows, and more</h1>
            <p className="text-xl md:text-2xl mb-6">Watch anywhere. Cancel anytime.</p>
            <p className="text-lg md:text-xl mb-8">Ready to watch? Enter your email to create or restart your membership.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow p-4 text-black rounded"
              />
              <Link 
                to="/browse" 
                className="netflix-btn-primary flex items-center justify-center text-lg sm:text-xl py-4"
              >
                Get Started <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 border-b-8 border-gray-800">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy on your TV</h2>
              <p className="text-lg md:text-xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="TV" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 border-b-8 border-gray-800">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download your shows to watch offline</h2>
              <p className="text-lg md:text-xl">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mobile device" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch everywhere</h2>
              <p className="text-lg md:text-xl">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/4009626/pexels-photo-4009626.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Multiple devices" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;