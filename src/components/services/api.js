import {request, gql} from 'graphql-request'

export const post = async ()=>{
    const url= "https://api-ap-south-1.hygraph.com/v2/clex48z1v04h801t8hg1t8wcx/master";
    const query =gql`
    
query postsQuery {
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
      content{
        html
      }
      smalldesc
    }
  }
  
  `
  const res = await request(url,query)
  return res
}