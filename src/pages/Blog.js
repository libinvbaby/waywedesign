import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { GraphQLClient,gql } from "graphql-request";

const graphcms  = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/clex48z1v04h801t8hg1t8wcx/master');

const QUERY = gql`
{
  posts {
    createdAt,
    datePublished,
    id,
    publishedAt,
    slug,
    title,
    coverPhoto {
      id
    },
    updatedAt,
    content_inner{
      html
    }

  }
}`
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
      <div className="container py-5">
        <div className="row">
        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
  {/*News One Single*/}
  <div className="news-one__single">
    <div className="news-one__img">
      <img src="assets/images/blog/news-page-img-1.jpg" alt />
      <a href="news-details.html">
        <span className="news-one__plus" />
      </a>
      <div className="news-one__date-box">
        <p>20 <br /> Aug</p>
      </div>
    </div>
    <div className="news-one__content">
      <ul className="list-unstyled news-one__meta">
        <li><a href="#"><i className="far fa-user-circle" /> by admin</a></li>
        <li><a href="#"><i className="far fa-comments" /> 2 Comments</a>
        </li>
      </ul>
      <h3 className="news-one__title">
        <a href="news-details.html">What is Holding Back the IT Solution Industry?</a>
      </h3>
      <p className="news-one__text">Lorem ipsum is simply free text used by copytyping refreshing.
      </p>
      <div className="news-one__read-more">
        <a href="news-details.html" className="news-one__read-more-btn">Read More</a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
