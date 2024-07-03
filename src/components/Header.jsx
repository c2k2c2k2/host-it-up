import React from 'react'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container header-container">
                <div className="row">
                    <div className="col-lg-2 col-md-10 col-9 order-sm-1 order-2">
                        <a href="index.html" className="header-logo">
                            <img src="img/logo.png" alt="HostItUp logo" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-2 col-3 order-sm-1 order-3">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button
                                id="menubtn"
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i id="menuicon" className="fa fa-bars-staggered" />
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul
                                    className="navbar-nav mr-auto"
                                    style={{ paddingLeft: 30 }}
                                >
                                    <div className="menutop-wrap">
                                        <a
                                            href="https://manage.hostitup.in/index.php?rp=/login"
                                            className="client-login"
                                        >
                                            <i className="fas fa-user" /> Client Login
                                        </a>
                                        <button
                                            id="menubtn"
                                            className="close-btn"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Hosting
                                        </a>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a className="dropdown-item" href="shared-hosting.html">
                                                <i className="fas fa-cube fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Shared Hosting</h6>
                                                <p>
                                                    Looking for flexible and reliable hosting plans |
                                                    Start <b>Rs 999/year</b>
                                                </p>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="wordpress-hosting.html"
                                            >
                                                <i className="fa fa-wordpress fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>
                                                    WordPress Hosting{" "}
                                                    <span
                                                        style={{
                                                            background: "#191919",
                                                            color: "#fff",
                                                            fontSize: 10,
                                                            padding: "0px 5px",
                                                            marginLeft: 5,
                                                            borderRadius: 3,
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        10% OFF
                                                    </span>
                                                </h6>
                                                <p>
                                                    Looking for low price yearly wordpress hosting plans
                                                    | Start <b>Rs 1499/year</b>
                                                </p>
                                            </a>
                                            <a className="dropdown-item" href="cloud-hosting.html">
                                                <i className="fas fa-cloud fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>
                                                    Cloud Hosting
                                                    <span
                                                        style={{
                                                            background: "#191919",
                                                            color: "#fff",
                                                            fontSize: 10,
                                                            padding: "0px 5px",
                                                            marginLeft: 5,
                                                            borderRadius: 3,
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        10% OFF
                                                    </span>
                                                </h6>
                                                <p>
                                                    Recommend for Professional Websites | Blogging | PHP
                                                    Websites | Start
                                                    <b>Rs 1999/year</b>
                                                </p>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="premium-hosting.html"
                                            >
                                                <i className="fas fa-cubes fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>
                                                    Premium Hosting{" "}
                                                    <span
                                                        style={{
                                                            background: "#191919",
                                                            color: "#fff",
                                                            fontSize: 10,
                                                            padding: "0px 5px",
                                                            marginLeft: 5,
                                                            borderRadius: 3,
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        20% OFF
                                                    </span>
                                                </h6>
                                                <p>
                                                    Perfect for Zero Downtime | High Traffic Websites |
                                                    Node.Js | 5X Turbo Faster | Start{" "}
                                                    <b>Rs 2999/year</b>
                                                </p>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Domain
                                        </a>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="domain-name-search.html"
                                            >
                                                <i className="fas fa-globe fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Domain Registration</h6>
                                                <p>Search &amp; Register Your Domain Name!</p>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="https://manage.hostitup.in/cart.php?a=add&domain=transfer"
                                            >
                                                <i className="fas fa-exchange-alt fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Domain Transfer</h6>
                                                <p>Transfer Your Existing Domain To us!</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Reseller
                                        </a>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="reseller-hosting.html"
                                            >
                                                <i className="fas fa-microchip fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>
                                                    Reseller Hosting
                                                    <span
                                                        style={{
                                                            background: "#191919",
                                                            color: "#fff",
                                                            fontSize: 10,
                                                            padding: "0px 5px",
                                                            marginLeft: 5,
                                                            borderRadius: 3,
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        20% OFF
                                                    </span>
                                                </h6>
                                                <p>
                                                    Recommended For Web Designers | Website Developers |
                                                    Freelancers
                                                </p>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link"
                                            href="https://manage.hostitup.in/index.php?rp=/login"
                                        >
                                            Affilate
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            More
                                        </a>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a className="dropdown-item" href="about-us.html">
                                                <i className="fas fa-building fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>About Us</h6>
                                                <p>Know About HostItUp</p>
                                            </a>
                                            <a className="dropdown-item" href="contact-us.html">
                                                <i className="fas fa-location-dot fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Contact Us</h6>
                                                <p>Contact Details</p>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="term-and-condition.html"
                                            >
                                                <i className="fas fa-handshake fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Terms &amp; Conditions</h6>
                                                <p>Read about our terms and condition</p>
                                            </a>
                                            <a className="dropdown-item" href="refund-policy.html">
                                                <i className="fas fa-money fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Refund Policy</h6>
                                                <p>Reads our refund policy</p>
                                            </a>
                                            <a className="dropdown-item" href="privacy-policy.html">
                                                <i className="fas fa-shield-halved fa-2x icob text-shadow1">
                                                    {" "}
                                                </i>
                                                <h6>Privacy Policuy</h6>
                                                <p>Reads our privacy policy</p>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div
                        className="col-lg-4 col-md-7 col-3 order-sm-1 order-1"
                        style={{ marginTop: "-8px" }}
                    >
                        <h6 className="ris-btn">
                            <a
                                href="https://manage.hostitup.in/register.php"
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                Register
                            </a>
                        </h6>
                        <h6 className="ris-btn-two">
                            <a
                                href="https://manage.hostitup.in/index.php?rp=/login"
                                style={{ color: "rgb(15 23 42)", textDecoration: "none" }}
                            >
                                Login
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
