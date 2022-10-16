import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import Food1 from "../../assets/images/food1.jpg";
import Room1 from "../../assets/images/room1.jpg";
import Gym1 from "../../assets/images/gym1.jpg";
import Sub from "../../assets/images/sub.png";
import User from "../../assets/images/user.png";
import { APIURL } from "../API/environment";
import axios from "axios";

class HomeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${APIURL}/customer/customer-details`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.setState({ customer: response.data.CustomerDetails });
        console.log("customer =>", this.state.customer);
      });
  }
  render() {
    return (
      <div>
        <header id="home">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="img-profile rounded-circle"
                  src={User}
                  alt=""
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 1355,
                    marginBottom: -70,
                  }}
                />
              </a>
              <p
                style={{
                  color: "black",
                  marginLeft: 1400,
                  fontStyle: "italic",
                  fontSize: 12,
                  marginTop: -10,
                }}
              >
                {this.state.customer.customer_name}
              </p>

              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="/"
                  data-toggle="modal"
                  data-target="#accountModal"
                >
                  {" "}
                  <i className="fas fa-user-alt fa-sm fa-fw mr-2 text-gray-400" />
                  My Account
                </a>
                <a
                  className="dropdown-item"
                  href="/"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  {" "}
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </header>

        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content" style={{ marginTop: -135 }}>
              <h1>
                <a id="logo" className="logo" href="/">
                  <img src={Logo} alt="" style={{ marginLeft: -240 }} />
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
                      <a
                        href="/customer-home"
                        className="active-page"
                        style={{ color: "blue" }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/food-menu">Food Menu</a>
                    </li>

                    <li>
                      <a href="/room_list_customer">Rooms</a>
                    </li>

                    <li>
                      <a href="/gym_list">Gym</a>
                    </li>

                    <li>
                      <a href="/get_liquor_customer">Liquor</a>
                    </li>

                    <li>
                      <a href="/get_parking_slot">Parking</a>
                    </li>

                    <li>
                      <a href="/get_laundry_list">Laundry</a>
                    </li>

                    <li>
                      <a href="/all_orders">Orders</a>
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
                    <h5>Discover all our specials</h5>
                    <h3 className="text-da mb-4">
                      GAS, <span>APP</span>
                    </h3>
                    <p>
                      welcome to the GAS.App, Come, delight &
                      breathe an air of luxury at the GAS.App!
                    </p>
                    <a href="/" className="button-w3ls active mt-5">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="/login" className="button-w3ls mt-5 ml-2">
                      Order Now
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
                  <p className="w3ls-title-sub">About Us</p>
                  <h3 className="w3ls-title">
                    Welcome to <span>GAS.App</span>
                  </h3>
                </div>
                <p className="about-text">
                  The story of Royal Ramesses Hotel Seeduwa which opened its
                  doors in 1984 is a splendid tale of continual improvement of
                  product and the highest standards of quality in hospitality.
                  Having embraced over 3 decades of expertise in hospitality our
                  vision and beliefs are firmly grounded in extending a true
                  personalized service to all our guests, laced with an
                  unforgettable luxury hotel experience. <br />
                  The brand has enticed many elite personalities from around the
                  world including heads of government, prime ministers of
                  leading nations, royalty, well known sports and entertainment
                  personalities and many more.
                </p>
                <a href="/" className="button-w3ls mt-5">
                  Read More
                  <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="blog_w3ls py-5">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">Royal Ramesses</p>
              <h3 className="w3ls-title">
                Our <span>Special</span>
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src={Food1}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="/">Moments of pleasure and exceptional taste</a>
                    </h5>
                    <p className="mt-3">
                      Taste sweet bliss with our delicate handmade chocolates,
                      moist, delectable cakes and scrumptious desserts or if
                      savory is more to your taste, try our wide selection of
                      pastries, sandwiches, breads and lunch
                    </p>
                    <a href="/login" className="btn button-w3ls mt-4 mb-3">
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
                        src={Room1}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                        Superior Room Royal Ramesses Hotel Sri Lankan
                      </a>
                    </h5>
                    <p className="mt-3">
                      Extra Large Beds, Modern ‘Deluxe’ 5 Star facilities that
                      include International Cable TV, Hair dryer, Air
                      conditioning to name a few, that the discerning traveler
                      would expect and more. To cap it all, the breath taking
                      view of the Indian Ocean awaits.
                    </p>
                    <a href="/login" className="button-w3ls active mt-4 mb-3">
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
                        src={Gym1}
                        alt="Cardimage cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">
                        More Expirience With Luxary Gym Facilities
                      </a>
                    </h5>
                    <p className="mt-3">
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita. Cras ultricies ligula sed magna dictum porta
                      auris blandita. Cras ultricies ligula sed magna dictum
                      porta auris blandita. Cras ultricies ligula sed magna
                      dictum porta auris blandita. Cras ultricies ligula sed
                      magna blandita.
                    </p>
                    <a href="/login" className="button-w3ls mt-4 mb-3">
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

        <section className="offer pt-lg-3">
          <div className="row no-gutters">
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Best Fast Food Collection</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="/login" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3 blog-sec-w3-2">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Organic Best &amp; Fresh Food</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="/login" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section className="wthree-slider" id="masthead"></section>

        <section className="subscribe-main py-5">
          <div className="container py-xl-5 py-3">
            <div className="row pb-lg-4 pt-lg-5">
              <div className="col-lg-6 col-md-9 text-center">
                <h3 className="w3ls-title mb-2">Subscribe to Newsletter</h3>
                <p className="mb-xl-5 mb-4">
                  Free Delivery on your first order!
                </p>
                <form
                  action="#"
                  method="post"
                  className="d-flex newsletter-info"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email..."
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-6 col-md-3"></div>
            </div>
            <img src={Sub} alt="" className="img-fluid sub-img" />
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
                    <span></span> Royal Ramesses
                  </a>
                </h2>
              </div>
              <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                <div className="footer-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>Address : Negombo-Colombo Main Rd, Seeduwa</p>
                  <p className="my-2">Phone : +94- 70 700 0005</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:info@example.com">
                      ramesseshotel@gmail.com
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
          <p>© 2021 HOTEL ROYAL RAMESSES-SEEDUWA-. All rights reserved</p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>

        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="/">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="accountModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Do you want go settings?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body">
                Select "My Account" below if you are ready to go your account
                settings.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <Link className="btn btn-primary" to={`/my-account`}>
                  My Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLogin;
