import React, { useEffect, useState } from "react";
//import "./App.scss";
import block from "../img/block.png";
import netflix from "../img/netflix.png";
import blog from "../img/blog.png";
import flip from "../img/flip.png";
import lol from "../img/lol.png";
import kanban from "../img/kanban.png";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  function handleClick() {
    setShow(!show);
  }

  function handleClick2() {
    if (window.innerWidth < 992) {
      setShow(!show);
    }
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && window.innerWidth >= 992) {
      document.getElementById("navColor").style.backgroundColor = "#fff";
      document.getElementById("navColor").style.boxShadow =
        "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
      document.getElementById("brand").style.color = "#000";
      document.getElementById("link1").style.color = "#000";
      document.getElementById("link2").style.color = "#000";
      document.getElementById("link3").style.color = "#000";
      document.getElementById("link4").style.color = "#000";
    } else if (window.scrollY < 100 && window.innerWidth >= 992) {
      document.getElementById("navColor").style.backgroundColor = "transparent";
      document.getElementById("navColor").style.boxShadow = "none";
      document.getElementById("brand").style.color = "rgba(255, 255, 255, 0.7)";
      document.getElementById("link1").style.color = "rgba(255, 255, 255, 0.7)";
      document.getElementById("link2").style.color = "rgba(255, 255, 255, 0.7)";
      document.getElementById("link3").style.color = "rgba(255, 255, 255, 0.7)";
      document.getElementById("link4").style.color = "rgba(255, 255, 255, 0.7)";
    }
  });

  window.addEventListener("scroll", () => {
    const y = window.scrollY + 72;
    const abouty = document.getElementById("about").offsetTop;
    const abouth = -document.getElementById("about").offsetHeight;
    if (abouty - y < 0 && abouty - y > abouth) {
      document.getElementById("link1").style.color = "#f4623a";
    } else {
      if (window.innerWidth < 992) {
        document.getElementById("link1").style.color = "#6c757d";
      }
    }
    const servicesy = document.getElementById("services").offsetTop;
    const servicesh = -document.getElementById("services").offsetHeight;
    if (servicesy - y < 0 && servicesy - y > servicesh) {
      document.getElementById("link2").style.color = "#f4623a";
    } else {
      if (window.innerWidth < 992) {
        document.getElementById("link2").style.color = "#6c757d";
      }
    }
    const portfolioy = document.getElementById("portfolio").offsetTop;
    const portfolioh = -document.getElementById("portfolio").offsetHeight;
    if (portfolioy - y < 0 && portfolioy - y > portfolioh) {
      document.getElementById("link3").style.color = "#f4623a";
    } else {
      if (window.innerWidth < 992) {
        document.getElementById("link3").style.color = "#6c757d";
      }
    }
    if (portfolioy - y < portfolioh) {
      document.getElementById("link4").style.color = "#f4623a";
    } else {
      if (window.innerWidth < 992) {
        document.getElementById("link4").style.color = "#6c757d";
      }
    }
  });

  window.onload = function () {
    document.getElementById("caption1").onmouseover = function () {
      document.getElementById("caption1").style.opacity = "1";
    };
    document.getElementById("caption1").onmouseout = function () {
      document.getElementById("caption1").style.opacity = "0";
    };
    document.getElementById("caption2").onmouseover = function () {
      document.getElementById("caption2").style.opacity = "1";
    };
    document.getElementById("caption2").onmouseout = function () {
      document.getElementById("caption2").style.opacity = "0";
    };
    document.getElementById("caption3").onmouseover = function () {
      document.getElementById("caption3").style.opacity = "1";
    };
    document.getElementById("caption3").onmouseout = function () {
      document.getElementById("caption3").style.opacity = "0";
    };
    document.getElementById("caption4").onmouseover = function () {
      document.getElementById("caption4").style.opacity = "1";
    };
    document.getElementById("caption4").onmouseout = function () {
      document.getElementById("caption4").style.opacity = "0";
    };
    document.getElementById("caption5").onmouseover = function () {
      document.getElementById("caption5").style.opacity = "1";
    };
    document.getElementById("caption5").onmouseout = function () {
      document.getElementById("caption5").style.opacity = "0";
    };
    document.getElementById("caption6").onmouseover = function () {
      document.getElementById("caption6").style.opacity = "1";
    };
    document.getElementById("caption6").onmouseout = function () {
      document.getElementById("caption6").style.opacity = "0";
    };
  };

  return (
    <div>
      <div className="body">
        <div id="navColor" className="nav">
          <div className="nav-bar">
            <a id="brand" className="nav-a" href="#page-top">
              Trista Portfolio
            </a>
            <button className="toggler" onClick={handleClick}>
              <span className="toggler-icon"></span>
            </button>
            <div
              id="dropdown"
              onClick={handleClick2}
              className={`nav-links ${show ? "show" : "false"}`}
            >
              <ul className="ulColor">
                <li>
                  <a id="link1" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a id="link2" href="#services">
                    Skills
                  </a>
                </li>
                <li>
                  <a id="link3" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a id="link4" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="page-top" className="header">
          <div className="header-content">
            <div className="upper-box">
              <h1 className="text-white">
                Hi, I am{" "}
                <span className="glitch" data-text="Trista">
                  Trista
                </span>
                ,
              </h1>
              <hr className="hr-r" />
            </div>
            <div className="lower-box">
              <p className="header-p text-white-75 mb-48">
                I'm Front-end Developer. I design and code beautifully simple
                things, and I love what I do.
              </p>
              <a className="button back-r text-white" href="#about">
                FIND OUT MORE
              </a>
            </div>
          </div>
        </div>

        <div className="start back-r" id="about">
          <div className="start-content">
            <div className="start-box">
              <h2 className="text-white">I've got what you need!</h2>
              <hr className="hr-w" />
              <p className="text-white-50 mb-24">
                With more than five years of experience in the IT industry
                engaging in front-end development, which includes accumulated
                years of experience using{" "}
                <b className="blod">
                  React,Redux,HTML/HTML5, CSS/CSS3, Sass, Less, Styled
                  Components, JavaScript, TypeScript, Webpack, Babel, Gatsby,
                  jQuery, Node, Express, MongoDB,
                </b>{" "}
                etc.
              </p>
              <a className="button back-w text-black" href="#services">
                NEXT!
              </a>
            </div>
          </div>
        </div>
        <div className="service" id="services">
          <div className="service-content">
            <h2>With My Skills</h2>
            <hr className="hr-r" />
            <div className="service-row">
              <div className="service-box mt-48">
                <i className="fas fa-gem i-r mb-24"></i>
                <h3>Designer</h3>

                <p className="text-muted mb-0">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
              </div>
              <div className="service-box mt-48">
                <i className="fas fa-laptop-code i-r mb-24"></i>
                <h3>Front-end Developer</h3>
                <p className="text-muted mb-0">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
              </div>
              <div className="service-box mt-48">
                <i className="fas fa-globe i-r mb-24"></i>
                <h3>Performance</h3>
                <p className="text-muted mb-0">
                  I like to Make website fast, easy to find, and reach the
                  widest audience possible.
                </p>
              </div>
              <div className="service-box mt-48">
                <i className="fas fa-heart i-r mb-24"></i>
                <h3>Mentor</h3>
                <p className="text-muted mb-0">
                  I genuinely care about people, and love helping fellow
                  designers work on their craft.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery" id="portfolio">
          <div className="gallery-content">
            <div className="box">
              <a
                className="box-a"
                target="_blank"
                href="https://lol-trista.netlify.app/"
              >
                <img src={lol} alt="gallery1" />
                <div className="box-caption" id="caption1">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">League of Legends</p>
                </div>
              </a>
            </div>
            <div className="box">
              <a className="box-a" href="https://trista-web5.netlify.app/">
                <img src={blog} alt="gallery1" />
                <div className="box-caption" id="caption2">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">Fashion Blog</p>
                </div>
              </a>
            </div>

            <div className="box">
              <a className="box-a" href="https://mynetflix-trista.netlify.app/">
                <img src={netflix} alt="gallery1" />
                <div className="box-caption" id="caption3">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">My Netflix</p>
                </div>
              </a>
            </div>
            <div className="box">
              <a
                className="box-a"
                href="https://flipcardsgame-trista.netlify.app"
              >
                <img src={flip} alt="gallery1" />
                <div className="box-caption" id="caption4">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">Flip Cards</p>
                </div>
              </a>
            </div>
            <div className="box">
              <a className="box-a" href="https://15blocks-trista.netlify.app">
                <img src={block} alt="gallery1" />
                <div className="box-caption" id="caption5">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">15 Block</p>
                </div>
              </a>
            </div>
            <div className="box">
              <a
                className="box-a"
                href="https://kanbanboard-trista.netlify.app/"
              >
                <img src={kanban} alt="gallery1" />
                <div className="box-caption" id="caption6">
                  <p className="project text-white-50">PROJECT</p>
                  <p className="name">Kanban Board</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="download back-b">
          <div className="download-content">
            <h2 className="text-white mb-24">Check My Resume!</h2>

            <Link className="button back-w text-black" to="/resume" target='#blank'>
             CLICK NOW!
            </Link>
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="contact-content">
            <div className="contact-row1">
              <h2>Let's Get In Touch!</h2>
              <hr className="hr-r"></hr>
              <p className="text-muted mb-48">
                Wanna get in touch or talk about a project? Give me a call or
                send me an email and I will get back to you as soon as possible!
              </p>
            </div>
            <div className="contact-row2">
              <div className="contact-col1 mb-48">
                <i className="fas fa-phone i-b"></i>
                <p className="contact-p mb-0">+1 (631) 410-9491</p>
              </div>
              <div className="contact-col2 mb-48">
                <i className="fas fa-envelope i-b"></i>
                <a className="lasta" href="mailto:trista.cheng33@gmail.com">
                  trista.cheng33@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content"></div>
      </div>
    </div>
  );
}

export default App;
