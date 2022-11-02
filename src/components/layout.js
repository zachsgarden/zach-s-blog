import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { profileImg, navLinkText } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="font-rubik container sm py-5 flex flex-col items-center">
      <StaticImage
        className="rounded-full w-64 my-5"
        alt="Zach with his cool kids eating some great ice cream in Pigeon Forge, Tennessee."
        src="../images/cruze-fam.jpeg"
      />
      <header className="text-5xl font-medium">
        {data.site.siteMetadata.title}
      </header>
      <nav className="w-1/2 my-5">
        <ul className="w-full flex justify-around">
          <li>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
