import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layout/Header';

const Post = (props) => {
  const params = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const handleFetchBlog = () => {
      fetch(
        'https://639493274df9248eada6578d.mockapi.io/api/v1/list-blogs/' +
          params.idBlog
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
          // in ra trên màn hình
        });
    };

    handleFetchBlog();
  }, []);

  return (
    <>
      <Header
        banner={props.banner}
        title={blog.title}
        description={blog.description}
      ></Header>
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>{blog.content}</p>
              <img className="img-fluid" src={blog.image} alt="..." />

              <p>
                Placeholder text by
                <a href="http://spaceipsum.com/">Space Ipsum</a>· Images by
                <a href="https://www.flickr.com/photos/nasacommons/">
                  NASA on The Commons
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
