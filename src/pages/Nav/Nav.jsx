import React, { useEffect, useState} from 'react';
import './Nav.css';
import '../../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-brands-svg-icons';
import { ssStickyHeader, scrollToSection, WhiteMode } from '../../main';
import HamburgerMenu from './hamburgerIcon';
import CollapsedMobileMenu from './collapsedMobileMenu';


const resetView = (onClose) => {
  const menu = document.querySelector('.collapsed-mobile-menu');
  if (menu) {
    // Add the 'slide-out' class to trigger the close animation
    menu.classList.add('slide-out');

    // Wait for the animation to finish before resetting the menu's state
    setTimeout(() => {
      // Remove conflicting classes
      menu.classList.remove('slide-in');
      menu.classList.remove('slide-out');

      // Call the onClose function if it exists
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
    }, 500); // Match this duration to your CSS animation duration
  }
};
  
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className='hamburger-menu'>
      <HamburgerMenu closed={!isOpen} onClick={toggleMenu} />
      {isOpen && <CollapsedMobileMenu onClose={toggleMenu} />}
    </div>
  );

};


const Nav = () => {

  const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])
library.add(...iconList);

  useEffect(() => {
    ssStickyHeader(); // Invoke the sticky header function
  }, []); // Run once after initial render


  return (
    <div className='nav-container'>

<a onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        scrollToSection('Intro'); // Call the scrollToSection function
        resetView(); // Call the resetView function
        WhiteMode(); // Call the WhiteMode function
      }} rel="home" className='branding'>Zack Diaz.</a>

<nav>

  <ul className='links_navbar'>
    <li><a  onClick={() => scrollToSection('Intro')}>Intro</a></li>
    <li><a onClick={() => scrollToSection('About')}>About</a></li>
    <li><a  onClick={() => scrollToSection('Reper')}>Repertoire</a></li>
    <li><a onClick={() => scrollToSection('Contact')}>Contact</a></li>
  </ul>
  
  </nav>
  <MobileMenu />
  <ul className='links_navbar_social'>
                    <li>
                        <a href="https://www.facebook.com/ZackDiazOfficial" target="_blank" 
    rel="noopener noreferrer">
                          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />

                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ZackDiaz01/" target="_blank" 
    rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />

                        </a>
                    </li>
                    </ul>
      
    </div>
  );
                    
            
              

}


export default Nav