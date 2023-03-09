import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String!) {
    blogPost(where: { slug: $slug }) {
      title
      content
      # Add any other fields you want to fetch here
    }
  }
`;

function BlogPostDetailPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG_POST_BY_SLUG, {
    variables: { slug },
  });
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    if (!loading && !error && data && data.blogPost) {
      setBlogPost(data.blogPost);
    }
  }, [loading, error, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div>{blogPost.content}</div>
      {/* Add any other components or elements you want to render here */}
    </div>
  );
}

export default BlogPostDetailPage;
