import * as React from "react";
import '../css/custom.css';
import { graphql } from "gatsby";
import Header from "../components/header";
import MobileApps from "../components/mobileapps";
import WebGames from "../components/webgames";
// import Test from "../components/test";
import 'bootstrap/dist/css/bootstrap.min.css'



const IndexPage = ({data}) => {
  return (
    <div style={{backgroundColor: '#008080'}}>
      <Header/>
      <MobileApps
        data={data}
      />
      <WebGames
        data={data}
      />
    </div>
  )
}

export default IndexPage;

export const appsQuery = graphql`
query {
  apps: allMobileappsJson {
    edges {
      node {
        id
        name
        image {
          childImageSharp {
            gatsbyImageData(
              width: 365
              height: 250
            )
            resize(fit: FILL, width: 365, height: 250) {
              width
              height
            }
          }
        }
        ios
        android
      }
    }
  }

  webGames: allWebgamesJson {
    edges {
      node {
        name
        url
        image {
          childImageSharp {
            gatsbyImageData(width: 365, height: 250)
            resize(fit: FILL, width: 365, height: 250) {
              width
              height
            }
          }
        }
      }
    }
  }

}
`