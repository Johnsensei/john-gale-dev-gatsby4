import * as React from "react";
import '../css/custom.css';
import { graphql } from "gatsby";
import Header from "../components/header";
import MobileApps from "../components/mobileapps";
import WebGames from "../components/webgames";
import Projects from "../components/projects";
import Footer from "../components/footer";

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
      <Projects
        data={data}
      />
      <Footer/>
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

  projects: allProjectsJson {
    edges {
      node {
        github
        text1
        text2
        title
        url
        name
        image {
          childImageSharp {
            gatsbyImageData
            resize(fit: CONTAIN, width: 365, height: 250) {
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