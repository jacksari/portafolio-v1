import React from "react"
import Layout from "../components/layout"
import BreadCrumb from "../components/breadcrumb"

const Blog = () => (
  <>
    <Layout>
      <BreadCrumb titulo="Blog" message="My diary"/>
      <div className="blog">
        <h1>Blog</h1>
      </div>
    </Layout>
  </>
)

export default Blog
