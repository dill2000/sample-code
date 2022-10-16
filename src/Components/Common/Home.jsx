import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import QR_Scan from "../../assets/images/QR_Scan.jpg";
import Gas_Leak from "../../assets/images/gas-leak.jpg";
import web_App from "../../assets/images/webApp.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <header id="home"></header>

        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="logo" className="logo" href="/">
                  <img
                    src={Logo}
                    alt=""
                    style={{ marginLeft: -100  }}
                  />
                  GAS.APP
                </a>
              </h1>

              <div className="nav_web-dealingsls">
                <nav>
                  <label htmlFor="drop" className="toggle">
                    Menu
                  </label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li>
                      <a href="/" className="active-page">
                        Home
                      </a>
                    </li>

                    <li>
                      <label htmlFor="drop-3" className="toggle toogle-2">
                        Pages
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </label>
                      
                      <input type="checkbox" id="drop-3" />
                      
                    </li>
                    <li>
                      <a href="/about-us"> About Us</a>
                    </li>

                    <li>
                      <a href="contact.html"> User Details</a>
                    </li>
                    <li>
                      <a href="contact.html"> Notices</a>
                    </li>

                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="/login">Sign In</a>
                    </li>

                    <li>
                      <a href="/register">Sign Up</a>
                    </li>
                    <li>
                      <Link
                        to="https://w3layouts.com/"
                        target="_blank"
                        className="dwn-button ml-lg-5"
                      ></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="baneer-w3ls">
          <div className="row no-gutters">
            <div className="col-xl-5 col-lg-6">
              <div className="banner-left-w3">
                <div className="container">
                  <div className="banner-info_agile_w3ls">
                    <h4><b> Welcome to Gas Distribution System</b></h4>
                    <h3 className="text-da mb-4">
                      <b>GAS. <span>APP</span></b>
                    </h3>
                    <p>
                      Welcome to the GAS.APP, Feasible Solution for Gas Distribution in Sri Lanka to avoid conflicts 
                      among the customers
                    </p>
                    <a href="/register" className="button-w3ls active mt-5">
                      Sign Up
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="/login" className="button-w3ls mt-5 ml-2">
                      Sign In
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 callbacks_container">
              <div className="csslider infinity" id="slider1">
                <input
                  type="radio"
                  name="slides"
                  defaultChecked="checked"
                  id="slides_1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <ul className="banner_slide_bg">
                  <li>
                    <div className="banner-top1" />
                  </li>
                  <li>
                    <div className="banner-top2" />
                  </li>
                  <li>
                    <div className="banner-top3" />
                  </li>
                </ul>
                <div className="arrows">
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                </div>
                <div className="navigation">
                  <div>
                    <label htmlFor="slides_1" />
                    <label htmlFor="slides_2" />
                    <label htmlFor="slides_3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix" />

        <div className="about-bottom">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6 about"></div>
            <div className="col-lg-7 col-md-6 about-right-w3 text-right py-md-5">
              <div className="right-space py-xl-5 py-lg-3">
                <div className="title-section mb-4">
                  
                  <h3 className="w3ls-title">
                    Welcome to <span>GAS.App</span>
                  </h3>
                </div>
                <p className="about-text">
                Users can register to the system and receive tokens and QR codes. By scanning the QR code 
                and the token, the shop owner can get the gas cylinders on the day corresponding to the token.
                Also, our gas leak detection system is used to protect against gas leaks and gas explosions. We 
                can use for gas leak detection system with an alarm system. The alarm system protects users 
                from accidents caused by gas leaks.
                </p>
                <a href="https://docs.google.com/presentation/d/1vyNuNx7oifoA9RW9YWaIU0bULLG0aM9v/edit?usp=sharing&ouid=115847081495776702695&rtpof=true&sd=true" className="button-w3ls active mt-5">
                  Read More
                  <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

       

        <section className="wthree-slider" id="masthead"></section>

        

        <footer className="py-5">
          <div className="container py-xl-4">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_1its footer-text">
                {/* logo */}
                <h2>
                  <a className="logo text-wh" href="index.html">
                    <img src={Logo} alt="" className="img-fluid" />
                    <br />
                    
                  </a>
                </h2>
              </div>
              <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                <div className="footer-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>Address : Gas distribution center, malabe, Sri Lanka.</p>
                  <p className="my-2">Phone : +94- 70 700 0005</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:info@example.com">
                      gas.app@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 footer-grid_section_1its">
                <div className="footer-title">
                  <h3>Request Info</h3>
                </div>
                <div className="info-form-right mt-4 p-0">
                  <form action="/" method="post">
                    <div className="row">
                      <div className="col-lg-6 form-group mb-2 pr-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group mb-2 pl-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        name="Comment"
                        className="form-control"
                        placeholder="Comment"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn submit-contact ml-auto"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy-right text-center py-3">
          <p>© 2022 Gas distribution center-Malabe. All rights reserved</p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
      
      </div>
    );
  }
}

export default Home;
