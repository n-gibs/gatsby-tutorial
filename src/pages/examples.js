import React from 'react'
import Header from '../components/examples/Header'
import HeaderStatic from '../components/examples/HeaderStatic'
import Layout from '../components/layout'
import { graphql } from "gatsby"

const examples = ({ data }) => {

  const {site:{info:{author}}} = data;
  return (
    <Layout>
      <p> examples </p>
      <Header />
      <HeaderStatic/>
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
query {
  site {
    info: siteMetadata {
      title
      description
      author
      data
      person {
        name
        year
      }
    }
  }
}`

export default examples
