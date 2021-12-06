import * as React from "react";
import '../css/custom.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppleStore from '../images/apple-store.png';
import GoogleStore from '../images/google-play-store.png';


const MobileApps = (props) => {

  return (
    <Container fluid className='mobile-apps-container'>
      <h1>Mobile Apps</h1>

      {/* Cards Container Row */}
      <Row
        style={{display: 'flex', justifyContent: 'space-evenly'}}
      >

        {props.data.apps.edges.map(({node}) => (
          
          // Single Card
          <Col
            xl={4}
            lg={6}
            style={{marginBottom: '20px'}}
          >

            <GatsbyImage
              image={node.image.childImageSharp.gatsbyImageData}
              alt={node.name}
              style={{border: '1px solid black' }}
              // imgStyle={{ width: '365px', height: '250px' }}
              objectFit={'fill'}
            />
            
            {/* App Store Icons */}
            <div style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <a href={node.ios} target='_blank' rel="noreferrer">
                <img
                  src={AppleStore}
                  alt='Apple App Store Logo'
                  style={{width: '160px', height: '47px', margin: '10px'}}
                />
              </a>
              <a href={node.android} target='_blank' rel="noreferrer">
                <img
                  src={GoogleStore}
                  alt='Google Play Store Logo'
                  style={{width: '160px', height: '47px', margin: '10px'}}
                />
              </a>
            </div>

          </Col>                   
        ))}
        
      </Row>
          
    </Container>
    
  )
}

export default MobileApps;
