import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import web_app from "../../assets/images/webApp.jpeg";
import QR_Scan from "../../assets/images/QR_Scan.jpg";
//import Gas_Leak from "../../assets/images/gasLeakdetect.jpg";
import Gas_Leak from "../../assets/images/gas-leak.jpg";
import web_App from "../../assets/images/webApp.jpeg";

class AboutUS extends Component {
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
                      <a href="contact.html"> About Us</a>
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

        <section className="blog_w3ls py-5">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">GAS.App</p>
              <h3 className="w3ls-title">
                Our <span>Features</span>
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={web_App}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                    <a href="/">User friendly web application interface</a>
                    </h5>
                    <p className="mt-3">
                    A web-based application for distributing gas cylinders around the country. 
                    This application will mitigate the Problem of gas queues. Also, this application
                     has the ability to notify the customers about the availability of the gas with notices.

                    </p>
                    <a href="https://economynext.com/sri-lanka-to-start-cooking-gas-distribution-from-may-19-litro-chairman-94400/" className="button-w3ls active mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={QR_Scan}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                        QR generate and Detection System
                      </a>
                    </h5>
                    <p className="mt-3">
                    Detect QR code page- the shopkeeper can detect generated QR code.
                    When agents scan the QR codes of many customers and check details about 
                    customers from the database all the agents could do that without any problems.
                    </p>
                    <a href="https://www.kaspersky.com/resource-center/definitions/what-is-a-qr-code-how-to-scan" className="button-w3ls active mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={Gas_Leak}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                      Gas leak Detection system
                      </a>
                    </h5>
                    <p className="mt-3">
                    For web applications, any device with a 
                    browser can access the application
                    For the Gas leak Detection system 
                    minimum 5v power supply is needed to 
                    power up the device. 
                    </p>
                    <a href="https://www.info.rikenkeiki.co.jp/l/871991/2020-11-01/bkx1yn?utm_term=gas%20monitor&gclid=Cj0KCQjw166aBhDEARIsAMEyZh6EMGsN15ECs43rQ2_ip2n08_aH-tCuvJXYJKS3uqgB5jIoHl9TbZQaAhgbEALw_wcB" className="button-w3ls active mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
              
        


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

export default AboutUS;