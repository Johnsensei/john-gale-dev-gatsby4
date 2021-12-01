import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import MobileApps from "../components/mobileapps";



const IndexPage = ({data}) => {
  return (
    <>
      <Header/>
      <MobileApps
        data={data}
      />
      {/* {(data) ? 'True' : 'False'} */}
    </>
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
            gatsbyImageData
          }
        }
        ios
        android
      }
    }
  }

}
`