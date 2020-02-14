import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"

export const query = graphql`
query GET_DATA {
  allStripeSku {
    edges {
      node {
        id
        price
        product {
          name
          metadata {
            description
            wear
            img
          }
        }
      }
    }
  }
  allSite {
    edges {
      node {
        siteMetadata {
          description
        }
      }
    }
  }
}`

const IndexPage = ({data}) => (
    
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      <Products products={data.allStripeSku.edges} />
    </>
  )

export default IndexPage
