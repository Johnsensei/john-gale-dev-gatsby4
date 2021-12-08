import * as React from "react";
import '../css/custom.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Projects = (props) => {

  return (
    <Container fluid className='projects-container'>
      <h1 style={{marginBottom: '25px'}}>Projects</h1>

      {/* Cards Container Row */}
      <Row
        style={{display: 'flex', justifyContent: 'space-evenly'}}
      >

        {props.data.projects.edges.map(({node}) => (
          
          // Single Card
          
          <Col
            xl={4}
            lg={6}
            style={{marginBottom: '20px'}}
          >
            <h3>{node.title}</h3>

            {/* {node.image.childImageSharp.gatsbyImageData ? 'True' : 'False'} */}

            <a href={node.url} target='_blank' rel="noreferrer">
                <GatsbyImage
                image={node.image.childImageSharp.gatsbyImageData}
                alt={node.name}
                // style={{border: '1px solid black' }}
                />
            </a>

            <h3>{node.text1}</h3>
            <h3 style={{marginBottom: '25px'}}><a href={node.github} target='_blank' rel="noreferrer">{node.text2}</a></h3>

          </Col>                   
        ))}
        
      </Row>
          
    </Container>
    
  )
}

export default Projects;
