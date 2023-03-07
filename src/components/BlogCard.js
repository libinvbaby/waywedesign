import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({item}) => {
    console.log(item)
  return (
    <>
   
        
                <div className="container py-5">
                <div className="row">
                    
                {
            item.map((items,index) =>{
                console.log(items.name);
                return (
                    <div key={index} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        {/*News One Single*/}
                        <div className="news-one__single">
                            <div className="news-one__img">
                              <img src={items.coverPhoto.url} alt />
                              <Link to={items.slug}>
                                <span className="news-one__plus" />
                              </Link>
                              <div className="news-one__date-box">
                                <p>{items.datePublished}</p>
                              </div>
                            </div>
                            <div className="news-one__content">
                              <ul className="list-unstyled news-one__meta">
                                <li><a ><i className="far fa-user-circle" /> by {items.author.name}</a></li>
                                {/* <li><a href="#"><i className="far fa-comments" /> 2 Comments</a>
                                </li> */}
                              </ul>
                              <h3 className="news-one__title">
                                <a href="news-details.html">{items.title}</a>
                              </h3>
                              <p className="news-one__text">{items.smalldesc}
                              </p>
                              <div className="news-one__read-more">
                                <Link to={items.slug} className="news-one__read-more-btn">Read More</Link>
                              </div>
                            </div>
                        </div>
                    </div>
                );
            })
            
        }
                </div>
              </div> 
            
       
    </>
    )
}

export default BlogCard