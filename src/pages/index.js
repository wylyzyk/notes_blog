import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.subTitle || "Notes"
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio/>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio/>
      <ol style={{listStyle: `none`}}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h4>
                    <Link style={{textDecoration: "none", boxShadow: "none" }} to={post.fields.slug} itemProp="url">
                      <span style={{ textDecoration: "none" }} itemProp="headline">{title}</span>
                    </Link>
                  </h4>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section style={{marginTop: 0}}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Notes" description={"A blog by MorningStar"}/>

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        subTitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
