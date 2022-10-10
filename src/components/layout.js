import * as React from "react"
import {Link} from "gatsby"
import {scale} from "../utils/typography"
import Footer from "../components/Footer"

const Layout = ({location, title, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h3 style={{...scale(0.75), marginBottom: 0, marginTop: 0}}>
        <Link style={{
          boxShadow: 'none',
          textDecoration: 'none',
        }} to="/">{title}</Link>
      </h3>
    )
  } else {
    header = (
      <h3 style={{
        fontFamily: "Montserrat, sans-serif",
        marginTop: 0,
        marginBottom: 0,
        height: 42,
        lineHeight: "2.625rem"
      }}>
        <Link style={{boxShadow: "none", textDecoration: "none"}} to="/">
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
