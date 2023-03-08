import { gql } from 'graphql-request';

export const postsQuery =()=>{
    const query =gql`
      query postsQuery() {
    posts {
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
  }
`
return query;
}
 
export const getAllPostQuery =()=>{
    const query = gql`
    query getAllPostQuery($slug:String!) {
    post(where: {slug: $slug}){
       createdAt
      datePublished
      coverPhoto {
        id
        url
      }
      author {
        name
      }
      id
      publishedAt
      slug
      title
      updatedAt
      content {
        html
      }
    }
  }
  
`
return query
} 