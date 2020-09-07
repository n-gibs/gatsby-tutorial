import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'

const ProductTemplate = ({ data:{product:{title, price, image:{fixed}, info:{info}}} }) => {

  return (
    <Layout>
      <div style={{textAlign: "center"}}>
        <Link to="/products">back to products</Link>
        <h1>{title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h1>{price}</h1>
          <p>{info}</p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query getProduct($slug:String) {
      product:contentfulProduct(slug: {eq:$slug}) {
        title
        price
        image {
          fixed(width:300) {
            src
            ...GatsbyContentfulFixed
          }
        }
        info{
          info
        }
      }
    }
`

export default ProductTemplate