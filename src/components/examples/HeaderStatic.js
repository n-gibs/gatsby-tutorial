import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
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
      }
    `}
    render={data => <pre>{data.site.info.description}</pre>}
  ></StaticQuery>
)

export default HeaderStatic
