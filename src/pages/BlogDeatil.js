import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { request } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const BlogDeatil = () => {
  const [blog, setBlog] = useState([])
  const { slug } = useParams();
  useEffect(()=>{
    const fetchPost = async()  =>{
      const {post} = await request(
        "https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master",
          `{
            post(where:{slug: "${slug}"}){
              createdAt
              datePublished
              coverPhoto {
                id
                url
              }
              id
              publishedAt
              slug
              title
              author {
                name
              }
              content {
                html
              }
              smalldesc
            }
          }`

      );
      setBlog(post)
    }
    fetchPost();
  },[slug])
  return (
    <h1>{blog.title}</h1>

  )
}

export default BlogDeatil