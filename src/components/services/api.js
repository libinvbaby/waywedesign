import {request, gql} from 'graphql-request'
import * as gqlQuery from './gql'

export const post = async ()=>{
    const url= "https://api-ap-south-1.hygraph.com/v2/clex48z1v04h801t8hg1t8wcx/master";
    
  const res = await request(url,gqlQuery.postsQuery())
  return res
}
export const getAllPost = async (id)=>{
  const idObject={
    slug:id
  }
    const url= "https://api-ap-south-1.hygraph.com/v2/clex48z1v04h801t8hg1t8wcx/master";
    
  const res = await request(url,gqlQuery.getAllPostQuery(),idObject)
  return res
}
