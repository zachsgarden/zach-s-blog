import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My posts will go here</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage