import * as React from "react";
import '../css/custom.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppleStore from '../images/apple-store.png';
import GoogleStore from '../images/google-play-store.png';


const WebGames = (props) => {

  return (
    <Container fluid className='web-games-container'>
      <h1>Featured Web Games</h1>

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
              objectFit={'fill'}
            />

          </Col>                   
        ))}
        
      </Row>
          
    </Container>
    
  )
}

export default WebGames;
