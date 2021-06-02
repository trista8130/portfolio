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
                    Experience
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
            <h2>With My Experience</h2>
            <hr className="hr-r" />
            <div className="experience">
              <div>
                <h3>ETOMON</h3>
                <h4>NEW YORK, Sep 2020 to May 2021</h4>
                <ul>
                  <li>
                    Work closely with UX designers from ideation to prototyping
                    to define and deliver new features
                  </li>
                  <li>
                    Developed private localization library that using
                    jquery-i18next framework for web page that created with
                    JQuery. Use additional plugins such as use(LanguageDetector)
                    to detect browser language, config i18n instance to inject
                    translation resource.
                  </li>
                  <li>
                    Created localize method in jquery-i18next lib to
                    automatically check and localize every html element which
                    has specified selectorAttr, which can avoid manually inject
                    localize method after each element in each page.
                  </li>
                  <li>
                    Developed private localization library that using
                    react-i18next framework for web page that created with
                    React. Use I18nextProvider to pass i18next instance, use HOC
                    withTranslation or component Trans which provided by
                    react-i18next to localize each component.
                  </li>
                  <li>
                    Created reusable component such as course detail and course
                    listing to show course information and approved active
                    course.
                  </li>
                  <li>
                    Create interaction screens using HTML5, CSS3, JavaScript,
                    React, and Material UI to develop single-page applications
                    using React Redux architecture, ES6, Webpack, and Gulp
                  </li>
                  <li>
                    Use CSS preprocessors like SCSS for reusable component
                    styles
                  </li>
                  <li>
                    Use middleware like Redux-thunk in application to retrieve
                    data from back-end and to also perform RESTful services
                  </li>
                  <li>
                    Manage state within the app using Redux and persist certain
                    parts of the state to the device via Redux Persist
                  </li>
                  <li>
                    Implement modules into Node.js to integrate with designs and
                    requirements
                  </li>
                  <li>
                    Develop the flux pattern by using the Redux library as a
                    core dependency
                  </li>
                  <li>
                    Rapidly build and iterate functional prototypes using HTML5,
                    CSS3, and React
                  </li>
                  <li>
                    Involve in daily Scrum meetings to keep track of the ongoing
                    project status and issues{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h3>OPENMENU</h3>
                <h4>NEW YORK, JAN 2020 to AUG 2021</h4>
                <ul>
                  <li>
                    Worked with React props, state, keys, refs, events, default
                    props, and propTypes.
                  </li>
                  <li>
                    Experience with Redux for state management. Created store,
                    actions, and reducers as pure functions.
                  </li>
                  <li>
                    Experience with Redux middleware’s - react-video,
                    react-select, react-tagsinput, react-datagrid, react-panels,
                    react-calendar.
                  </li>
                  <li>
                    Extensive experience with Promises to make asynchronous
                    calls and use Axios as an interface to fetch resources.
                  </li>
                  <li>
                    Experience with third-party React components library like
                    react-grid, react-sortable, react-tags,
                    react-infinite-scroll, react-date picker, and
                    react-tagsinput, react-select, react-video.
                  </li>
                  <li>
                    Created Menu component on cline interface to display menu
                    photos, price, details, allow user to add or reduce dish
                    amount which also reflect on cart side.
                  </li>
                  <li>
                    Created MenuEditing component on merchant interface with
                    AntDesign, customize Table and Form ferture to full fill the
                    requirement that allow owner to edit menu detail info such
                    as upload photos, edit price and amount, choose category,
                    and set lunch speical time.
                  </li>
                  <li>
                    Experience with JavaScript (ES5/ES6/ES7) - Closures,
                    Hoisting, Strict Mode, Scope, Block Scoping, Promises,
                    Generators, Maps and Sets, String interpolation, async and
                    await, array Extensions, modules, and classes.
                  </li>
                  <li>
                    Built out Restful endpoints and lightweight aggregation
                    layers using NodeJs frameworks such as Express, Body parser,
                    cluster, process, Winston, Redis, passport, mongoose,
                    lodash, etc.
                  </li>
                  <li>
                    Used Mongoose Schema/Model to create, update and delete with
                    Express controllers.
                  </li>
                  <li>
                    Created Restful APIs with Express and used MongoDB for
                    persistence and Redis for caching.
                  </li>
                  <li>
                    Used Socket.IO in the adoption of Node.js by making Web
                    Sockets both accessible and reliable.
                  </li>
                  <li>
                    Created SPA (Single Page Application) by configuring
                    React-Router. Used Browser Router for Web.
                  </li>
                </ul>
              </div>
              <div>
                <h3>ABELMED</h3>
                <h4>NEW YORK, JAN 2018 to DEC 2019 </h4>
                <ul>
                  <li>
                    Responsible for creating efficient design and developing
                    User Interaction screens / SPA using HTML5, CSS3,
                    JavaScript, NodeJS, React.JS and Bootstrap.
                  </li>
                  <li>Implemented MVVM architecture using React and Redux.</li>
                  <li>
                    Developed single-page applications using React Redux
                    architecture, ES6, Webpack, and gulp.
                  </li>
                  <li>
                    Used CSS preprocessors like SASS for re-usable style
                    components.
                  </li>
                  <li>Created charts components using High charts library.</li>
                  <li>
                    Used Middleware like Redux-thunk in application to retrieve
                    data from Back-End and to also perform RESTFUL services.
                  </li>
                  <li>
                    Managed state within the app using Redux and persisted
                    certain parts of the state to the device via Redux Persist.
                  </li>
                  <li>
                    Implement modules into Node JS to integrate with designs and
                    requirements.
                  </li>
                  <li>Built RESTful APIs using Express and NodeJS.</li>
                  <li>
                    Developed the flux pattern by using the redux library as a
                    core dependency.
                  </li>
                  <li>
                    Involved in daily SCRUM meetings to keep track of the
                    ongoing project status and issues.
                  </li>
                </ul>
              </div>
              <div>
                <h3>CLOUD ID</h3>
                <h4>NEW YORK, NOV 2016 to NOV 2017 </h4>
                <ul>
                  <li>
                    Involved in developing the UI, layout, and front-end
                    programming HTML for the web application that matches the
                    requirements of the client.
                  </li>
                  <li>
                    Excellently coordinated with other teammates in project
                    activities and ensure that all project phases are followed
                    and documented properly.
                  </li>
                  <li>
                    Designed business applications using web technologies like
                    HTML5, DHTML, XHTML and CSS based on the W3C standards.
                  </li>
                  <li>
                    Extensively involved in design discussion and
                    user-experience sessions to provide input on the layout and
                    UX.
                  </li>
                  <li>
                    Designed the front-end applications, user interactive UI web
                    pages using web technologies like HTML, CSS, jQuery,
                    JavaScript, JSON, XML.
                  </li>
                  <li>
                    Developed non-functional HTML/5, CSS3 pages from the
                    mock-ups and involved in UI review with the UI architect and
                    Business Units.
                  </li>
                  <li>
                    Developed GUI using JavaScript, HTML/HTML5, DOM, AJAX, CSS3
                    and jQuery in ongoing projects.
                  </li>
                  <li>
                    Converted the mock-ups into hand-written HTML, CSS 2/3,
                    JavaScript, jQuery, Ajax, XML and JSON.
                  </li>
                  <li>
                    Developed the user authentication and order processing
                    modules for customer-facing applications.
                  </li>
                  <li>
                    Created nested forms for users to customize the templates
                    and ordered a print preview.
                  </li>
                  <li>
                    Participated in requirements definition and story carding.
                  </li>
                </ul>
              </div>
            </div>
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

            <Link
              className="button back-w text-black"
              to="/resume"
              target="#blank"
            >
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
