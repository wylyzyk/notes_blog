/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import profilePic from "../images/profile-pic.jpg"
import {rhythm} from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio" style={{display: "flex", marginBottom: rhythm(2)}}>
      {/*<StaticImage*/}
      {/*  className="bio-avatar"*/}
      {/*  layout="fixed"*/}
      {/*  formats={["auto", "webp", "avif"]}*/}
      {/*  src={profilePic}*/}
      {/*  width={50}*/}
      {/*  height={50}*/}
      {/*  quality={95}*/}
      {/*  alt="Morning Star"*/}
      {/*/>*/}

      <img src={profilePic} alt="MorningStar" style={{
        width: rhythm(2),
        height: rhythm(2),
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        borderRadius: '50%'
      }}/>
      {author?.name && (
        <p>
          Written by
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            { author?.name }
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
