import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { profileImg } from "../components/layout.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        className={profileImg}
        alt="Zach with his cool kids eating some great ice cream in Pigeon Forge, Tennessee."
        src="../images/cruze-fam.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
