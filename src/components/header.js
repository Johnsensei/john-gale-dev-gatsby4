import * as React from "react";
import '../css/custom.css';
import { StaticImage } from 'gatsby-plugin-image';

import Johnsensei from '../images/johnsensei-animated.gif';



const Header = () => {
  return (
        <div className='header'>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className='my-name'>John Gale</h1>
            <img
              src={Johnsensei}
              style={{width: '48px', height: '48px'}}
            />
          </div>
          <h2 className='site-title'>Development Portfolio</h2>
        </div>
    
  )
}

export default Header;
