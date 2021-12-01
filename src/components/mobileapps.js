import * as React from "react";
// import {Text} from 'react';
import '../css/custom.css';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';

import FourthEnergy from '../images/4E-mobile.png'


const MobileApps = (props) => {

  // const image = getImage(props.data.apps.edges.node.image);


  return (
        <div className='mobile-apps-container'>
          <h1>Mobile Apps</h1>
    
          {/* Cards Container */}
          <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}>

            {props.data.apps.edges.map(({node}) => (
              
                <GatsbyImage
                  image={node.image.childImageSharp.gatsbyImageData}
                  alt={node.name}
                  style={{width: '325px', height: '250px', border: '1px solid black'}}
                  imgStyle={{width: '325px', height: '250px'}}
                />

                
                               
            ))}
            
          </div>
              
           
        </div>
    
  )
}

export default MobileApps;

// export const appsQuery = graphql`
// query {
//   apps: allMobileappsJson {
//     edges {
//       node {
//         id
//         name
//         image {
//           id
//           relativePath
//         }
//         ios
//         android
//       }
//     }
//   }
// }
// `

// const appQuery = () => {

//   return(
//     <StaticQuery
//       query={
//         graphql`
// query {
//   apps: allMobileappsJson {
//     edges {
//       node {
//         id
//         name
//         image {
//           id
//           relativePath
//         }
//         ios
//         android
//       }
//     }
//   }
// }
// `
//       }

//       render={
//         {data.apps.edges.map(({node}) => (
//           <Col lg={4} key={node.id}>
//             Test
//           </Col>
//         ))}
//       }
    
//     />
//   );

// }