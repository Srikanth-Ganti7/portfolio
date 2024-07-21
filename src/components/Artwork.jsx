import React from 'react';
import{ Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import {github} from '../assets';
import { SectionWrapper } from '../hoc';
import { projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

// Import all the artwork images
import artwork1 from '../assets/Artwork/artwork1.jpg';
import artwork2 from '../assets/Artwork/artwork2.jpg';
import artwork3 from '../assets/Artwork/artwork3.jpg';
import artwork4 from '../assets/Artwork/artwork4.png';
import artwork5 from '../assets/Artwork/artwork5.png';
import artwork6 from '../assets/Artwork/artwork6.jpg';
import artwork7 from '../assets/Artwork/artwork7.jpg';
import artwork8 from '../assets/Artwork/artwork8.jpg';
import artwork9 from '../assets/Artwork/artwork9.jpg';
import artwork10 from '../assets/Artwork/artwork10.jpg';
import artwork11 from '../assets/Artwork/artwork11.jpg';
import artwork12 from '../assets/Artwork/artwork12.jpg';
import artwork13 from '../assets/Artwork/artwork13.jpg';
import artwork14 from '../assets/Artwork/artwork14.jpg';
import artwork15 from '../assets/Artwork/artwork15.jpg';
// Add more imports as needed

const artworks = [
  { id: 1, src: artwork1 },
  { id: 2, src: artwork2 },
  { id: 3, src: artwork3 },
  { id: 4, src: artwork4 },
  { id: 5, src: artwork5 },
  { id: 6, src: artwork6 },
  { id: 7, src: artwork7 },
  { id: 8, src: artwork8 },
  { id: 9, src: artwork9 },
  { id: 10, src: artwork10 },
  { id: 11, src: artwork11 },
  { id: 12, src: artwork12 },
  { id: 13, src: artwork13 },
  { id: 14, src: artwork14 },
  { id: 15, src: artwork15 },
  // Add more artworks as needed
];

const Artwork = () => {
  return (
    <section className="bg-black min-h-screen p-10">
      
      <h2 className={`${styles.sectionHeadText} mb-12 text-center`}>
          My Artwork
        </h2>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white p-2">
            <img src={artwork.src} alt={`Artwork ${artwork.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artwork;
