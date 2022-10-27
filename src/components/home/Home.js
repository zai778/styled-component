import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../home/Home.css";
import Cards from "../Cards/Cards";
import Footer from "../footer/Footer";
import Posts from "../Posts/Posts";
function Home() {
  return (
    <>
      <div>
        <Navbar className="top">
          <nav className="topLeft">
            <h1 className="logo">BraveCodersBlog</h1>
          </nav>

          <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
            </ul>
          </div>

          <div className="topRight">
            <a href="https://www.instagram.com">
              {" "}
              <i className="topIcon fab fa-instagram-square"></i>
            </a>
            <a href="https://pinterest.com">
              <i className="topIcon fab fa-pinterest-square"></i>
            </a>

            <a href="https://twitter.com">
              {" "}
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </div>
        </Navbar>
        <Cards />
        <Posts />
        <Footer />
      </div>
    </>
  );
}
export default Home;
