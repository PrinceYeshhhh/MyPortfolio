import React from 'react';
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import { featuredContent, popularContent, trendingContent, newReleasesContent, actionMovies, comedyShows } from '../data/mockData';

const BrowsePage = () => {
  return (
    <div className="pb-16">
      <Hero content={featuredContent} />
      
      <div className="mt-4 sm:mt-0 sm:-mb-16 relative z-20">
        <ContentRow title="Popular on Netflix" content={popularContent} />
        <ContentRow title="Trending Now" content={trendingContent} />
        <ContentRow title="New Releases" content={newReleasesContent} />
        <ContentRow title="Action Movies" content={actionMovies} />
        <ContentRow title="Comedy Shows" content={comedyShows} />
      </div>
    </div>
  );
};

export default BrowsePage;