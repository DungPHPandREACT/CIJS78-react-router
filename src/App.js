import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Post from './pages/Post';
import Product from './pages/Product';

function App(props) {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home banner="assets/img/home-bg.jpg" />} />
        <Route
          path="/contact"
          element={<Contact banner="assets/img/contact-bg.jpg" />}
        />
        <Route path="/product" element={<Product />} />
        {/* Cách 1: tạo 2 đường dẫn */}
        <Route
          path="/post"
          element={<Post banner="assets/img/post-bg.jpg" />}
        />
        <Route
          path="/post/:idBlog"
          element={<Post banner="assets/img/post-bg.jpg" />}
        />
        {/* Cách 2: tạo group route */}
        <Route path="/post" element={<Post banner="assets/img/post-bg.jpg" />}>
          <Route
            path=":idBlog"
            element={<Post banner="assets/img/post-bg.jpg" />}
          />
        </Route>

        <Route
          path="/about"
          element={<About banner="assets/img/about-bg.jpg" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
