import React,{useEffect,useState} from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import {post} from '../components/services/api'
const Blog = () => {
  const [posts, setPosts] = useState();
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    post().then(res=>{
      setPosts(res)
      setLoading(false);
    
      }).catch(e =>{
  console.log(e)
})
  },[])
  console.log(posts)
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
       {!loading && <>
       <BlogCard  item={posts.posts}/> 
       </>}
    </motion.div>
  );
};

export default Blog;
