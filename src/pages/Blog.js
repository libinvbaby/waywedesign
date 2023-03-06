import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Blog - Waywedesign</title>
        <meta name="description" content="Blog" />
      </Helmet>
 
      <Breadcrumbs pageurl="Blog" subtitle="BLOG" />
      <h3>Blog</h3>
    </motion.div>
  );
};

export default Blog;
