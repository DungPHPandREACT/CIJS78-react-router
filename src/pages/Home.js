import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

const Home = (props) => {
  const [listData, setListData] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const handleFetchListBlogs = () => {
      fetch(
        `https://639493274df9248eada6578d.mockapi.io/api/v1/list-blogs?page=${pagination}&limit=10`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setListData(data);
        });
    };

    handleFetchListBlogs();
  }, []);

  return (
    <>
      <Header banner={props.banner}></Header>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {listData.length > 0 ? (
              listData?.map((blog, index) => {
                return (
                  <>
                    {/* Post preview*/}
                    <div className="post-preview">
                      <Link to={`/post/${blog.id}`}>
                        <h2 className="post-title">{blog.title}</h2>
                        <h3 className="post-subtitle">{blog.description}</h3>
                      </Link>
                      <p className="post-meta">
                        Posted by
                        <a href="#!"> {blog.author} </a>
                        on {blog.createdAt}
                      </p>
                    </div>
                    {/* Divider*/}
                    <hr className="my-4" />
                  </>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}

            {/* Pager*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
