import React, { useState } from 'react';
import Header from '../layout/Header';

const Contact = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSetTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSetAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSetDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSetContent = (event) => {
    setContent(event.target.value);
  };

  const handlePostBlog = () => {
    console.log({
      content,
      author,
      description,
      title,
    });

    const newBlog = {
      content,
      author,
      description,
      title,
    };

    fetch('https://639493274df9248eada6578d.mockapi.io/api/v1/list-blogs', {
      method: 'POST',
      body: JSON.stringify(newBlog),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(JSON.stringify(data));
      });
  };

  return (
    <>
      <Header banner={props.banner}></Header>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div className="my-5">
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    onChange={handleSetTitle}
                    value={title}
                  />
                  <label htmlFor="name">Title</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                    onChange={handleSetDescription}
                    value={description}
                  />
                  <label htmlFor="email">Description</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    data-sb-validations="required"
                    onChange={handleSetAuthor}
                    value={author}
                  />
                  <label htmlFor="phone">Author</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: '12rem' }}
                    data-sb-validations="required"
                    defaultValue={''}
                    onChange={handleSetContent}
                    value={content}
                  />
                  <label htmlFor="message">Content</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <br />
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* Submit Button*/}
                <button
                  className="btn btn-primary text-uppercase"
                  id="submitButton"
                  onClick={handlePostBlog}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
