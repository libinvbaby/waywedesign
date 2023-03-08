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
        "https://api-ap-south-1.hygraph.com/v2/clex48z1v04h801t8hg1t8wcx/master",
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
   <section className="news-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="news-details__left">
          <div className="news-details__img">
            <img src={blog.coverPhoto.url} alt />
            <div className="news-details__date-box">
              <p>{blog.publishedDate}</p>
            </div>
          </div>
          <div className="news-details__content">
            <ul className="list-unstyled news-details__meta">
              <li><a href="news-details.html"><i className="far fa-user-circle" /> by {blog.author.name}</a></li>
              <li><a href="news-details.html"><i className="far fa-comments" /> 2 Comments</a>
              </li>
            </ul>
            <h3 className="news-details__title">{blog.title}</h3>
            <p className="news-details__text-1">{blog.content.html}</p>
          </div>
          <div className="news-details__bottom">
            <p className="news-details__tags">
              <span>Tags</span>
              <a href="#">Software</a>
              <a href="#">cyber</a>
            </p>
            <div className="news-details__social-list">
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-facebook" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="news-details__pagenation-box">
            <ul className="list-unstyled news-details__pagenation clearfix">
              <li>What is Holding Back the IT <br /> Solution Industry?</li>
              <li>What is Holding Back the IT <br /> Solution Industry?</li>
            </ul>
          </div>
        
        </div>
      </div>
      <div className="col-xl-4 col-lg-5">
        <div className="sidebar">
          <div className="sidebar__single sidebar__search">
            <form action="#" className="sidebar__search-form">
              <input type="search" placeholder="Search here" />
              <button type="submit"><i className="icon-magnifying-glass" /></button>
            </form>
          </div>
          <div className="sidebar__single sidebar__categories">
            <h3 className="sidebar__title">Categories</h3>
            <ul className="sidebar__categories-list list-unstyled">
              <li><a href="#">Managed IT <span className="icon-right-arrow" /></a></li>
              <li className="active"><a href="#">IT Support <span className="icon-right-arrow" /></a>
              </li>
              <li><a href="#">IT Consultancy <span className="icon-right-arrow" /></a></li>
              <li><a href="#">Cloud Computing <span className="icon-right-arrow" /></a></li>
              <li><a href="#">Cyber Security <span className="icon-right-arrow" /></a></li>
              <li><a href="#">Custom Software <span className="icon-right-arrow" /></a></li>
            </ul>
          </div>
          <div className="sidebar__single sidebar__post">
            <h3 className="sidebar__title">Latest Posts</h3>
            <ul className="sidebar__post-list list-unstyled">
              <li>
                <div className="sidebar__post-image">
                  <img src="assets/images/blog/lp-1-1.jpg" alt />
                </div>
                <div className="sidebar__post-content">
                  <h3>
                    <a href="#" className="sidebar__post-content_meta"><i className="far fa-user-circle" />by admin</a>
                    <a href="news-details.html">A Day in the Life of Entrepreneur
                      Co-Founder</a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="sidebar__post-image">
                  <img src="assets/images/blog/lp-1-2.jpg" alt />
                </div>
                <div className="sidebar__post-content">
                  <h3>
                    <a href="#" className="sidebar__post-content_meta"><i className="far fa-user-circle" />by admin</a>
                    <a href="news-details.html">A Day in the Life of Entrepreneur
                      Co-Founder</a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="sidebar__post-image">
                  <img src="assets/images/blog/lp-1-3.jpg" alt />
                </div>
                <div className="sidebar__post-content">
                  <h3>
                    <a href="#" className="sidebar__post-content_meta"><i className="far fa-user-circle" />by admin</a>
                    <a href="news-details.html">A Day in the Life of Entrepreneur
                      Co-Founder</a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar__single sidebar__tags">
            <h3 className="sidebar__title">Tags</h3>
            <div className="sidebar__tags-list">
              <a href="#" className="thm-btn sidebar__tags-btn">Software</a>
              <a href="#" className="thm-btn sidebar__tags-btn">cyber</a>
              <a href="#" className="thm-btn sidebar__tags-btn">IT</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Computing</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Consulting</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Business</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default BlogDeatil