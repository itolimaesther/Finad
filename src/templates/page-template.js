import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  const page = data.allWpPage
  
  return (
    <Layout>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}

export const pageData = graphql`
    {
        wpPage(id: {eq: "cG9zdDoxMg=="}) {
            title
            content
            uri
        }
    }
      
    `

