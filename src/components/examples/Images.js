import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../../images/image1.jpg"
import Image from "gatsby-image"

const getImages = graphql`
{
  fixed:file(relativePath: {eq: "image2.jpg"}) {
    childImageSharp {
      fixed(width:400) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
  fluid:file(relativePath: {eq: "image3.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages);
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic React Image</h3>
        <img alt="hiking" src={ img } width="100%"/>
      </article>
      <article className="single-image">
        <h3>fixed Image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}/>
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid}/>
        </div>
      </article>
    </section>
  )
}

export default Images
