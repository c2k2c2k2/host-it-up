import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faMoneyBill, faStar, faTree } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer-light">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-4">
                        <img
                            src="img/logo.png"
                            alt=""
                            style={{ width: 200, height: 40 }}
                        />
                        <div className="spacer-20" />
                        <p>
                            We are HostItUp, a web hosting company with 24/7 customer
                            support. We provide best hosting solutions for your hosting
                            needs. Our clients from personal to corporate. Our data center
                            are all over the world to ensure your website is always up. You
                            can choose shared hosting, wordpress hosting or cloud hosting.
                            You can also be hosting reseller here. Happy hosting with us.
                        </p>
                        <div className="spacer-10" />
                        <div className="widget-two">
                            <h5>We Accepted</h5>
                            <img className="img-card-sm" src="img/visa.png" alt="" />
                            <img className="img-card-sm" src="img/master-card.png" alt="" />
                            <img className="img-card-sm" src="img/jcb.png" alt="" />
                            <img className="img-card-sm" src="img/paypal.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="widget-two">
                                    <h5>Hosting</h5>
                                    <ul>
                                        <li>
                                            <a href="shared-hosting.html">Shared Hosting</a>
                                        </li>
                                        <li>
                                            <a href="wordpress-hosting.html">Wordpress Hosting</a>
                                        </li>
                                        <li>
                                            <a href="cloud-hosting.html">Cloud Hosting</a>
                                        </li>
                                        <li>
                                            <a href="premium-hosting.html">Premium Hosting</a>
                                        </li>
                                        <li>
                                            <a href="reseller-hosting.html">Reseller Hosting</a>
                                        </li>
                                        <li>
                                            <a href="https://manage.hostitup.in/cart.php?a=add&domain=transfer">
                                                Transfer Domain
                                            </a>
                                        </li>
                                        <li>
                                            <a href="domain-name-search.html">Register A Domain</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="widget-two">
                                    <h5>Company</h5>
                                    <ul>
                                        <li>
                                            <a href="about-us.html">About</a>
                                        </li>
                                        <li>
                                            <a href="affiliate-program.html">Affiliates</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="term-and-condition.html">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html">Privcay Policy</a>
                                        </li>
                                        <li>
                                            <a href="refund-policy.html">Refund Policy</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget-two">
                            <h5>Newsletter</h5>
                            <p>
                                Signup for our newsletter to get the latest news in your
                                inbox.
                            </p>
                            <form
                                action="blank.php"
                                className="row form-dark"
                                id="form_subscribe"
                                method="post"
                                name="form_subscribe"
                            >
                                <div className="col-two text-center">
                                    <input
                                        className="form-control-two"
                                        id="txt_subscribe"
                                        name="txt_subscribe"
                                        placeholder="Enter Your Email Id"
                                        type="text"
                                    />{" "}
                                    <a href="#" id="btn-subscribe">
                                        <i className="fa-solid bg-color-secondary">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </a>
                                    <div className="clearfix" />
                                </div>
                            </form>
                            <div className="spacer-10" />
                            <small>Your email is safe with us. We don't spam.</small>
                            <div className="spacer-30" />
                            <div className="widget-two">
                                <h5>Follow Us on</h5>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/profile.php?id=61559308252754">
                                        <i className="fa fa-facebook fa-lg" />
                                    </a>
                                    <a href="https://x.com/HostItUp" target="_blank">
                                        <i className="fa fa-twitter fa-lg" />
                                    </a>
                                    <a href="https://youtube.com/@HostItUp">
                                        <i className="fa fa-youtube fa-lg" />
                                    </a>
                                    <a
                                        href="https://instagram.com/@hostitup_official"
                                        target="_blank"
                                    >
                                        <i className="fa fa-instagram fa-lg" />
                                    </a>
                                    <a href="https://wa.me/918822715092" target="_blank">
                                        <i className="fa fa-whatsapp fa-lg" />
                                    </a>
                                </div>
                                <div
                                    className="msme"
                                    style={{ marginTop: 30, marginBottom: "-60px" }}
                                >
                                    <h5>MSME Regsistered Company</h5>
                                    <p style={{ fontWeight: 600, fontSize: 16 }}>
                                        UDYAM-AS-16-0027234
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <a href="index.html">
                                        Copyright 2024 - All Rights Reservered By Hasibul
                                        Technology Private Limited
                                    </a>
                                </div>
                                <ul className="menu-simple">
                                    <li>
                                        <a href="terms-conditions.html">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
