import * as React from "react";
import '../css/custom.css';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';

import FourthEnergy from '../images/4E-mobile.png';
import AppleStore from '../images/apple-store.png';
import GoogleStore from '../images/google-play-store.png';


const MobileApps = (props) => {

  return (
        <div className='mobile-apps-container'>
          <h1>Mobile Apps</h1>
    
          {/* Cards Container */}
          <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}>

            {props.data.apps.edges.map(({node}) => (
              
              <Col style={{}}>
                <GatsbyImage
                  image={node.image.childImageSharp.gatsbyImageData}
                  alt={node.name}
                  style={{ width: '365px', height: '250px', border: '1px solid black' }}
                  imgStyle={{ width: '325px', height: '250px' }}
                  objectFit={'fill'}
                />
                
                {/* App Store Icons */}
                <div style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <img
                    src={AppleStore}
                    alt='Apple App Store Logo'
                    style={{width: '160px', height: '47px', margin: '10px'}}
                  />
                  <img
                    src={GoogleStore}
                    alt='Google Play Store Logo'
                    style={{width: '160px', height: '47px', margin: '10px'}}
                  />
                </div>
              </Col>
                
                               
            ))}
            
          </div>
              
           
        </div>
    
  )
}

export default MobileApps;
