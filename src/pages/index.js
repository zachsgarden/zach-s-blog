import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  profileImg
} from "../components/layout.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this gooooooood.</p>
      <StaticImage
        className={profileImg}
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/cruze-fam.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Zaxby Site</title>

export default IndexPage