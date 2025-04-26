import React from 'react';
import './Nav.css';
import { scrollToSection } from '../../main';

const CollapsedMobileMenu = ({ onClose}) => {
  
  
  // Function to handle the close action
  const handleClose = () => {      
    const menu = document.querySelector('.collapsed-mobile-menu');
    if (menu) {
    menu.classList.add('slide-out');

  // Wait for the animation to finish before calling onClose
  setTimeout(() => {
    menu.classList.remove('slide-out'); // Remove the slide-out class
    onClose(); // Call the onClose function after the animation duration
  }, 500); // Adjust the timeout duration to match your CSS animation duration
  }
 else {
  onClose(); // Call the onClose function immediately if no slideOut class is provided
    }
  };


  return (

    
    <div className='collapsed-mobile-menu' >

<button className='x-close' onClick={handleClose}>
  {/* X Icon */}
   <svg viewBox="14 60 50 50">
  <g filter="url(#filter0_d_1_1006)" >  <path   d="M26.1256 97.9821C25.5833 97.4398 25.5697 96.5738 26.0954 96.0481L48.9404 73.2031C49.466 72.6775 50.3321 72.691 50.8744 73.2334C51.4167 73.7757 51.4302 74.6417 50.9046 75.1673L28.0596 98.0123C27.5339 98.538 26.668 98.5244 26.1256 97.9821Z" fill="black"/></g>
  <g filter="url(#filter1_d_1_1006)">  <path d="M26.1256 72.9821C26.668 72.4397 27.5339 72.4262 28.0596 72.9519L50.9046 95.7969C51.4302 96.3225 51.4168 97.1884 50.8744 97.7308C50.332 98.2732 49.466 98.2867 48.9404 97.761L26.0954 74.9161C25.5697 74.3904 25.5832 73.5245 26.1256 72.9821Z" fill="black"/></g>
  </svg>
  </button>
  <div className='link_mobile'>
  {/* rest */}
  <ul>  <li>  <a onClick={() => scrollToSection('Intro')}> {/* Link nav */} Intro 
  </a>
  </li>
  <li>
  <a onClick={() => scrollToSection('About')}>
   {/* Link nav */} About
  </a>
  </li>
  <li>
  <a onClick={() => scrollToSection('Reper')}>
{/* Link nav */} Repertoire
  </a>
  </li>
  <li><a onClick={() => scrollToSection('Contact')}>
    {/* Link nav */} Contact
  </a>
  </li>
  </ul>
  
 
  </div>
  
    </div>
  );
};

export default CollapsedMobileMenu;