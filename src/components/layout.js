import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div class ="top-menu">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/talks">Talks</Link>
            <ThemeChanger/>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Delog &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
  )
}
