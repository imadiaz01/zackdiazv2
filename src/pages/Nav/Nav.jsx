import React, { useEffect } from 'react';
import './Nav.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-brands-svg-icons';
import { ssStickyHeader } from '../../main';



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

      <a href="./index.html" rel="home" className='branding'>Zack Diaz.</a>

<nav>
  <ul className='links_navbar'>
    <li><a href="#intro">Intro</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#reper">Repertoire</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  </nav>
  <ul className='links_navbar_social'>
                    <li>
                        <a href="https://www.facebook.com/ZackDiazOfficial">
                          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />

                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ZackDiaz01/">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />

                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/zackdiaz01">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />

                        </a>
                    </li>
                </ul>


    </div>
  )
}

export default Nav