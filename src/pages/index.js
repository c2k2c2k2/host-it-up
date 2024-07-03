import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import { use } from "../../public/asset/js/plugins/swiper copy";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faMoneyBill, faStar, faTree } from '@fortawesome/free-solid-svg-icons'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [accordion, setAccordion] = useState(null);

  const handleClick = (accordionTarget) => {
    if (accordion == accordionTarget) {
      setAccordion(null);
    } else setAccordion(accordionTarget);
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      const container = document.querySelector(".rts-testimonial__slider");
      const pagination = document.querySelector(".rts-dot__button");

      var swiper = new Swiper(container, {
        loop: true,
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 3000, // 2.3 second delay
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      });

      return () => {
        if (container) swiper.destroy();
      };
    }
  }, []);

  return (
    <>
      <Header />
      <div className="banner-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="limitedbox yellow_bg bold_font1 text-shadow">
                Your Site Reliability is Our Top Priority
              </div>
              <div className="clearfix" />
              <h1 className="text-gredient7 text-shadow1 first-text">
                Reliable, Fast, Secure{" "}
                <span className="span-ki-text first-span">
                  Web <div className="block-it" /> Hosting
                </span>
                <span className="span-ki-text first-span">
                  For Your Business
                </span>
              </h1>
              <span className="udlinehlelo-two" />
              <br />
              <p className="shining">
                Get Started! With HostItUp's Cheap Web Hosting. HostItUp has the
                perfect hosting solution for you. Experience the difference with
                HostItUp – where quality and affordability meet seamlessly. Grab
                a free domain on purchasing our web hosting plan and experience
                the ultimate performance and a high quality 24/7 Customer
                Support.
              </p>
              <ul>
                <li className="span-ki-text">
                  <b>NVMe SSD</b> Storage
                </li>
                <li className="span-ki-text">
                  <b>Free SSL</b> Certificate
                </li>
                <li className="span-ki-text">
                  <b>Free Domain</b> Name
                </li>
                <li className="span-ki-text">
                  <b>Free Website</b> Builder
                </li>
              </ul>
              <div className="row middle-woi">
                <div className="btn-first" style={{ marginTop: 18 }}>
                  <a href="#hosting-get-started" className="hiba-en">
                    Choose A Plan
                  </a>
                  <div className="hiba-enaaya" />
                  <a href="contact-us.html" className="hiba-en-two">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="img/first.png"
                alt="HostItUp provide cheap web hosting India plans @ 49/mo"
                className="img-first"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hspl-mainhead-logos hasipad">
        <div className="hspl-mainhead-logos-wrapper">
          <span
            className="hspl-cta-logo hspl-mainhead-logo-mozilla-logo"
            style={{}}
          >
            <img className="img101" src="img/logo.e23571a8.svg" />
          </span>
          <span
            className="hspl-cta-logo hspl-mainhead-logo-mozilla-logo"
            style={{}}
          >
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/digitalocean.svg"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-the-stanford-review-logo">
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/imunify360.svg"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-openai-logo">
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/jetbackup.svg"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-apple-logo-fill-logo">
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/softaculous.png"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-nasa-logo">
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/ssl.svg"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-duckduckgo-logo">
            <img
              className="img100"
              src="https://hspl.b-cdn.net/assets/images/icons/brand/cloudlinux.svg"
            />
          </span>
          <span className="hspl-cta-logo hspl-mainhead-logo-wealthsimple-logo">
            <img
              className="img100"
              style={{ maxWidth: 50 }}
              src="https://hspl.b-cdn.net/assets/images/icons/brand/intel.svg"
            />
          </span>
        </div>
      </div>
      <div
        className="container preffered-pan-wrap hosting-plans-page"
        id="hosting-get-started"
      >
        <h2 className="website-cmain">Our Services &amp; Features</h2>
        <p>
          Hostitup provide services with the aim to keep client happy - we try
          our best in every aspect.
        </p>
        <div className="center-two">
          <div className="col-lg-4 col-md-5 col-sm-5 col-12 highly-tap">
            <div className="plan-items">
              <div className="main-thng">
                <h3 className="hosting-boldess">Shared Hosting</h3>
                <p>Perfect package for beginer level websites</p>
              </div>
              <div className="pricing">
                <div className="flex-qq items-center gapyy">
                  <h5 className="font-boldy">₹99</h5>
                  <div className="flex-items-left">
                    <h6 className="text-sm font-semibold text-slate-600">
                      INR
                    </h6>
                    <h6 className="billed-boll">Billed monthly</h6>
                  </div>
                </div>
              </div>
              <p className="text-svvv" style={{ fontSize: "13px !important" }}>
                Renews at same price
              </p>
              <a href="shared-hosting.html" className="addcart">
                Get Started
              </a>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg green-box-list">
                <svg
                  className="h-24 -my-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.19 262.4"
                >
                  <g stroke="#4c917e" strokeLinecap="round" strokeWidth="1.2">
                    <path
                      fill="#ebfcee"
                      strokeMiterlimit={10}
                      d="M190.31 180.8v33c.03 1.35-.63 2.72-1.97 3.49l-71.87 41.5-3.42 1.98-.16.09-.07.04a8.663 8.663 0 01-7.72 0l-.09-.04-3.48-2.01-71.81-41.48c-.66-.38-1.15-.91-1.5-1.5-.33-.6-.5-1.27-.51-1.92V180.8h30.77l46.44-26.83a8.096 8.096 0 018.08 0l46.44 26.83h30.87z"
                    ></path>
                    <path
                      fill="#fff"
                      strokeLinejoin="round"
                      d="M188.35 184.13l-71.87 41.5-3.42 1.98-.16.09-.07.03a8.6 8.6 0 01-7.72 0l-.09-.03-3.48-2.01-71.82-41.49c-2.69-1.55-2.69-5.43 0-6.98l75.2-43.42a8.096 8.096 0 018.08 0l75.35 43.51c2.64 1.52 2.64 5.31 0 6.82z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M148.39 182.4l-10.77 6.22-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4-10.7-6.18c-1.33-.77-1.33-2.7 0-3.47l37.32-21.53a4.01 4.01 0 014.02 0l37.38 21.58c1.3.75 1.3 2.63 0 3.38z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M137.62 188.61l-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4 26.62-15.37a4.01 4.01 0 014.02 0l26.62 15.37z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M184 25.74s1.46-9.05 12.53-16.76c11.06-7.71 34.19-5.7 41.06-8.38 0 0-10.89 8.92-15.75 13.76-4.86 4.84-10.56 9.87-22.96 9.87s-14.87 1.51-14.87 1.51z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M161.77 39.61s10.56-14.16 1.89-32.17c0 0-7.67 5.91-11.31 12.7-3.65 6.79-1.39 16.46 9.42 19.48z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M172.28 32.1s22.16-2.5 23.67 9.99c0 0-11.14 6.17-23.67-9.99z"
                    />
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M144.13 57.67s28.7-19.55 42.53-.95c0 0-7.33 11.69-21.26 11.56-13.93-.13-20.3-8.54-21.26-10.62z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M144.13 57.67s5.74-12.3 2.2-22.44-15.11-14.66-15.11-14.66-5.11 7.37-3.85 14.75c1.26 7.37 5.36 11.06 8.04 12.65 2.68 1.59 8.47 6.75 8.72 9.7z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M79.96 113.19s-12.93-4.13-22.54.68c-9.6 4.81-12.61 16.86-12.61 16.86s7.97 4.13 15.12 1.94c7.15-2.19 10.29-6.73 11.52-9.6s5.62-9.26 8.51-9.88z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M127.09 86.2s5.56-10.37 24.42-9.87c18.85.5 17.72 9.93 43.99-1.63 0 0-9.25 14.46-28.51 24.13-19.26 9.68-41.57 2.64-39.9-12.63z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M127.09 86.2s4.72-14.52 1.2-26.42c-3.52-11.9-11.23-13.07-16.26-13.49-5.03-.42-14.33-1.42-12.99-12.91 0 0-9.51 11.5-6.87 26.41s10.36 22.07 16.74 24.96c6.38 2.89 13.99 4.15 18.17 1.45zM160.99 123.28s2.18-15.08 20.11-16.42c17.93-1.34 36.54 13.91 43.74 29.5 0 0-12.06-8.21-22.71-4.69-10.64 3.52-25.75 11.64-41.15-8.38zM127.59 140.23s17.37-11.26 35.97 0c18.6 11.26 15.59 28.63 15.59 28.63s-13.95 2.58-26.16-7.3c-12.22-9.89-9.37-18.1-25.39-21.32z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M137.17 108.54s-10.49 5.08-15.41 11.68-2.28 16.02 5.83 20.01c0 0-2.55-4.44 2.72-7.97 5.27-3.54 14.84-12.24 6.86-23.72z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M92.35 130.78s2.98-9.34-2.68-18.83c-5.66-9.49-18.1-17.16-12.44-35.13 0 0 15.34 3.27 24.13 16.47 8.8 13.2 2.85 34.38-9.01 37.49z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M61.77 96.47S64.28 81.55 43 74.85c-21.28-6.71-41.23 9.05-42.4 30 0 0 6.37-12.07 23.3-6.54s26.82 8.21 37.88-1.84z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      d="M184 25.74c-82.53 38.18-75.01 161.04-75.01 161.04s-3.47-50.87 52-63.5M109.11 189.21s-.21-58.67-47.33-92.74"
                    ></path>
                  </g>
                </svg>
                <div className="no-height">
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    You'll fund
                  </p>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "15px !important" }}
                  >
                    Planting a tree
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    &amp; we'll send a photo
                  </p>
                </div>
              </div>
              <ul>
                <li>

                  <FontAwesomeIcon icon={faCheck} /> Host 1 Website
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>10GB</b> SSD Disk Space
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>5</b> Email Account
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free SSL</b>{" "}
                  Certificate
                </li>
                <li>
                  <i className="fa-solid fa-xmark" style={{ color: "red" }} />{" "}
                  <b>No Free</b> Domain
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Unlimited</b> Bandwidth
                </li>
                <li>
                  Powered By{" "}
                  <img src="img/ltd.svg" alt="lite" className="height-okay" />
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-5 col-12 only-space highly-tap">
            <div className="plan-items">
              <div className="main-thng">
                <h3 className="hosting-boldess">Wordpress Hosting</h3>
                <p>Perfect package for beginer level websites</p>
              </div>
              <div className="pricing">
                <div className="flex-qq items-center gapyy">
                  <h5 className="font-boldy">₹149</h5>
                  <div className="flex-items-left">
                    <h6 className="text-sm font-semibold text-slate-600">
                      INR
                    </h6>
                    <h6 className="billed-boll">Billed monthly</h6>
                  </div>
                </div>
              </div>
              <p className="text-svvv" style={{ fontSize: "13px !important" }}>
                Renews at same price
              </p>
              <a href="shared-hosting.html" className="addcart">
                Get Started
              </a>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg green-box-list">
                <svg
                  className="h-24 -my-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.19 262.4"
                >
                  <g stroke="#4c917e" strokeLinecap="round" strokeWidth="1.2">
                    <path
                      fill="#ebfcee"
                      strokeMiterlimit={10}
                      d="M190.31 180.8v33c.03 1.35-.63 2.72-1.97 3.49l-71.87 41.5-3.42 1.98-.16.09-.07.04a8.663 8.663 0 01-7.72 0l-.09-.04-3.48-2.01-71.81-41.48c-.66-.38-1.15-.91-1.5-1.5-.33-.6-.5-1.27-.51-1.92V180.8h30.77l46.44-26.83a8.096 8.096 0 018.08 0l46.44 26.83h30.87z"
                    ></path>
                    <path
                      fill="#fff"
                      strokeLinejoin="round"
                      d="M188.35 184.13l-71.87 41.5-3.42 1.98-.16.09-.07.03a8.6 8.6 0 01-7.72 0l-.09-.03-3.48-2.01-71.82-41.49c-2.69-1.55-2.69-5.43 0-6.98l75.2-43.42a8.096 8.096 0 018.08 0l75.35 43.51c2.64 1.52 2.64 5.31 0 6.82z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M148.39 182.4l-10.77 6.22-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4-10.7-6.18c-1.33-.77-1.33-2.7 0-3.47l37.32-21.53a4.01 4.01 0 014.02 0l37.38 21.58c1.3.75 1.3 2.63 0 3.38z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M137.62 188.61l-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4 26.62-15.37a4.01 4.01 0 014.02 0l26.62 15.37z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M184 25.74s1.46-9.05 12.53-16.76c11.06-7.71 34.19-5.7 41.06-8.38 0 0-10.89 8.92-15.75 13.76-4.86 4.84-10.56 9.87-22.96 9.87s-14.87 1.51-14.87 1.51z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M161.77 39.61s10.56-14.16 1.89-32.17c0 0-7.67 5.91-11.31 12.7-3.65 6.79-1.39 16.46 9.42 19.48z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M172.28 32.1s22.16-2.5 23.67 9.99c0 0-11.14 6.17-23.67-9.99z"
                    />
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M144.13 57.67s28.7-19.55 42.53-.95c0 0-7.33 11.69-21.26 11.56-13.93-.13-20.3-8.54-21.26-10.62z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M144.13 57.67s5.74-12.3 2.2-22.44-15.11-14.66-15.11-14.66-5.11 7.37-3.85 14.75c1.26 7.37 5.36 11.06 8.04 12.65 2.68 1.59 8.47 6.75 8.72 9.7z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M79.96 113.19s-12.93-4.13-22.54.68c-9.6 4.81-12.61 16.86-12.61 16.86s7.97 4.13 15.12 1.94c7.15-2.19 10.29-6.73 11.52-9.6s5.62-9.26 8.51-9.88z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M127.09 86.2s5.56-10.37 24.42-9.87c18.85.5 17.72 9.93 43.99-1.63 0 0-9.25 14.46-28.51 24.13-19.26 9.68-41.57 2.64-39.9-12.63z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M127.09 86.2s4.72-14.52 1.2-26.42c-3.52-11.9-11.23-13.07-16.26-13.49-5.03-.42-14.33-1.42-12.99-12.91 0 0-9.51 11.5-6.87 26.41s10.36 22.07 16.74 24.96c6.38 2.89 13.99 4.15 18.17 1.45zM160.99 123.28s2.18-15.08 20.11-16.42c17.93-1.34 36.54 13.91 43.74 29.5 0 0-12.06-8.21-22.71-4.69-10.64 3.52-25.75 11.64-41.15-8.38zM127.59 140.23s17.37-11.26 35.97 0c18.6 11.26 15.59 28.63 15.59 28.63s-13.95 2.58-26.16-7.3c-12.22-9.89-9.37-18.1-25.39-21.32z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M137.17 108.54s-10.49 5.08-15.41 11.68-2.28 16.02 5.83 20.01c0 0-2.55-4.44 2.72-7.97 5.27-3.54 14.84-12.24 6.86-23.72z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M92.35 130.78s2.98-9.34-2.68-18.83c-5.66-9.49-18.1-17.16-12.44-35.13 0 0 15.34 3.27 24.13 16.47 8.8 13.2 2.85 34.38-9.01 37.49z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M61.77 96.47S64.28 81.55 43 74.85c-21.28-6.71-41.23 9.05-42.4 30 0 0 6.37-12.07 23.3-6.54s26.82 8.21 37.88-1.84z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      d="M184 25.74c-82.53 38.18-75.01 161.04-75.01 161.04s-3.47-50.87 52-63.5M109.11 189.21s-.21-58.67-47.33-92.74"
                    ></path>
                  </g>
                </svg>
                <div className="no-height">
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    You'll fund
                  </p>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "15px !important" }}
                  >
                    Planting a tree
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    &amp; we'll send a photo
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Host 2 Website
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>15GB</b> SSD Disk Space
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>10</b> Email Account
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free SSL</b>{" "}
                  Certificate
                </li>
                <li>
                  <i className="fa-solid fa-xmark" style={{ color: "red" }} />{" "}
                  <b>No Free</b> Domain
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Unlimited</b> Bandwidth
                </li>
                <li>
                  Powered By{" "}
                  <img src="img/ltd.svg" alt="lite" className="height-okay" />
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-5 col-12 highly-tap">
            <div className="plan-items">
              <div className="main-thng">
                <h3 className="hosting-boldess">Cloud Hosting</h3>
                <p>Perfect package for Startup level websites</p>
              </div>
              <div className="pricing">
                <div className="flex-qq items-center gapyy">
                  <h5 className="font-boldy">₹199</h5>
                  <div className="flex-items-left">
                    <h6 className="text-sm font-semibold text-slate-600">
                      INR
                    </h6>
                    <h6 className="billed-boll">Billed monthly</h6>
                  </div>
                </div>
              </div>
              <p className="text-svvv" style={{ fontSize: "13px !important" }}>
                Renews at same price
              </p>
              <a href="shared-hosting.html" className="addcart">
                Get Started
              </a>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg green-box-list">
                <svg
                  className="h-24 -my-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.19 262.4"
                >
                  <g stroke="#4c917e" strokeLinecap="round" strokeWidth="1.2">
                    <path
                      fill="#ebfcee"
                      strokeMiterlimit={10}
                      d="M190.31 180.8v33c.03 1.35-.63 2.72-1.97 3.49l-71.87 41.5-3.42 1.98-.16.09-.07.04a8.663 8.663 0 01-7.72 0l-.09-.04-3.48-2.01-71.81-41.48c-.66-.38-1.15-.91-1.5-1.5-.33-.6-.5-1.27-.51-1.92V180.8h30.77l46.44-26.83a8.096 8.096 0 018.08 0l46.44 26.83h30.87z"
                    ></path>
                    <path
                      fill="#fff"
                      strokeLinejoin="round"
                      d="M188.35 184.13l-71.87 41.5-3.42 1.98-.16.09-.07.03a8.6 8.6 0 01-7.72 0l-.09-.03-3.48-2.01-71.82-41.49c-2.69-1.55-2.69-5.43 0-6.98l75.2-43.42a8.096 8.096 0 018.08 0l75.35 43.51c2.64 1.52 2.64 5.31 0 6.82z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M148.39 182.4l-10.77 6.22-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4-10.7-6.18c-1.33-.77-1.33-2.7 0-3.47l37.32-21.53a4.01 4.01 0 014.02 0l37.38 21.58c1.3.75 1.3 2.63 0 3.38z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M137.62 188.61l-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4 26.62-15.37a4.01 4.01 0 014.02 0l26.62 15.37z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M184 25.74s1.46-9.05 12.53-16.76c11.06-7.71 34.19-5.7 41.06-8.38 0 0-10.89 8.92-15.75 13.76-4.86 4.84-10.56 9.87-22.96 9.87s-14.87 1.51-14.87 1.51z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M161.77 39.61s10.56-14.16 1.89-32.17c0 0-7.67 5.91-11.31 12.7-3.65 6.79-1.39 16.46 9.42 19.48z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M172.28 32.1s22.16-2.5 23.67 9.99c0 0-11.14 6.17-23.67-9.99z"
                    />
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M144.13 57.67s28.7-19.55 42.53-.95c0 0-7.33 11.69-21.26 11.56-13.93-.13-20.3-8.54-21.26-10.62z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M144.13 57.67s5.74-12.3 2.2-22.44-15.11-14.66-15.11-14.66-5.11 7.37-3.85 14.75c1.26 7.37 5.36 11.06 8.04 12.65 2.68 1.59 8.47 6.75 8.72 9.7z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M79.96 113.19s-12.93-4.13-22.54.68c-9.6 4.81-12.61 16.86-12.61 16.86s7.97 4.13 15.12 1.94c7.15-2.19 10.29-6.73 11.52-9.6s5.62-9.26 8.51-9.88z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M127.09 86.2s5.56-10.37 24.42-9.87c18.85.5 17.72 9.93 43.99-1.63 0 0-9.25 14.46-28.51 24.13-19.26 9.68-41.57 2.64-39.9-12.63z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M127.09 86.2s4.72-14.52 1.2-26.42c-3.52-11.9-11.23-13.07-16.26-13.49-5.03-.42-14.33-1.42-12.99-12.91 0 0-9.51 11.5-6.87 26.41s10.36 22.07 16.74 24.96c6.38 2.89 13.99 4.15 18.17 1.45zM160.99 123.28s2.18-15.08 20.11-16.42c17.93-1.34 36.54 13.91 43.74 29.5 0 0-12.06-8.21-22.71-4.69-10.64 3.52-25.75 11.64-41.15-8.38zM127.59 140.23s17.37-11.26 35.97 0c18.6 11.26 15.59 28.63 15.59 28.63s-13.95 2.58-26.16-7.3c-12.22-9.89-9.37-18.1-25.39-21.32z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M137.17 108.54s-10.49 5.08-15.41 11.68-2.28 16.02 5.83 20.01c0 0-2.55-4.44 2.72-7.97 5.27-3.54 14.84-12.24 6.86-23.72z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M92.35 130.78s2.98-9.34-2.68-18.83c-5.66-9.49-18.1-17.16-12.44-35.13 0 0 15.34 3.27 24.13 16.47 8.8 13.2 2.85 34.38-9.01 37.49z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M61.77 96.47S64.28 81.55 43 74.85c-21.28-6.71-41.23 9.05-42.4 30 0 0 6.37-12.07 23.3-6.54s26.82 8.21 37.88-1.84z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      d="M184 25.74c-82.53 38.18-75.01 161.04-75.01 161.04s-3.47-50.87 52-63.5M109.11 189.21s-.21-58.67-47.33-92.74"
                    ></path>
                  </g>
                </svg>
                <div className="no-height">
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    You'll fund
                  </p>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "15px !important" }}
                  >
                    Planting a tree
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    &amp; we'll send a photo
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Host 5 Website
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>25GB</b> SSD Disk Space
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>30</b> Email Account
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free SSL</b>{" "}
                  Certificate
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free</b> Domain
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Unlimited</b> Bandwidth
                </li>
                <li>
                  Powered By{" "}
                  <img src="img/ltd.svg" alt="lite" className="height-okay" />
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-5 col-12 only-space highly-tap">
            <div className="plan-items">
              <div className="main-thng">
                <h3 className="hosting-boldess">Premium Hosting</h3>
                <p>
                  Perfect package for High Traffic <br /> Websites
                </p>
              </div>
              <div className="pricing">
                <div className="flex-qq items-center gapyy">
                  <h5 className="font-boldy">₹249</h5>
                  <div className="flex-items-left">
                    <h6 className="text-sm font-semibold text-slate-600">
                      INR
                    </h6>
                    <h6 className="billed-boll">Billed monthly</h6>
                  </div>
                </div>
              </div>
              <p className="text-svvv" style={{ fontSize: "13px !important" }}>
                Renews at same price
              </p>
              <a href="shared-hosting.html" className="addcart">
                Get Started
              </a>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg green-box-list">
                <svg
                  className="h-24 -my-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.19 262.4"
                >
                  <g stroke="#4c917e" strokeLinecap="round" strokeWidth="1.2">
                    <path
                      fill="#ebfcee"
                      strokeMiterlimit={10}
                      d="M190.31 180.8v33c.03 1.35-.63 2.72-1.97 3.49l-71.87 41.5-3.42 1.98-.16.09-.07.04a8.663 8.663 0 01-7.72 0l-.09-.04-3.48-2.01-71.81-41.48c-.66-.38-1.15-.91-1.5-1.5-.33-.6-.5-1.27-.51-1.92V180.8h30.77l46.44-26.83a8.096 8.096 0 018.08 0l46.44 26.83h30.87z"
                    ></path>
                    <path
                      fill="#fff"
                      strokeLinejoin="round"
                      d="M188.35 184.13l-71.87 41.5-3.42 1.98-.16.09-.07.03a8.6 8.6 0 01-7.72 0l-.09-.03-3.48-2.01-71.82-41.49c-2.69-1.55-2.69-5.43 0-6.98l75.2-43.42a8.096 8.096 0 018.08 0l75.35 43.51c2.64 1.52 2.64 5.31 0 6.82z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M148.39 182.4l-10.77 6.22-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4-10.7-6.18c-1.33-.77-1.33-2.7 0-3.47l37.32-21.53a4.01 4.01 0 014.02 0l37.38 21.58c1.3.75 1.3 2.63 0 3.38z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M137.62 188.61l-26.6 15.35-.07.05-.05.02c-1.2.6-2.62.6-3.83 0l-.03-.02-26.67-15.4 26.62-15.37a4.01 4.01 0 014.02 0l26.62 15.37z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M184 25.74s1.46-9.05 12.53-16.76c11.06-7.71 34.19-5.7 41.06-8.38 0 0-10.89 8.92-15.75 13.76-4.86 4.84-10.56 9.87-22.96 9.87s-14.87 1.51-14.87 1.51z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M161.77 39.61s10.56-14.16 1.89-32.17c0 0-7.67 5.91-11.31 12.7-3.65 6.79-1.39 16.46 9.42 19.48z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M172.28 32.1s22.16-2.5 23.67 9.99c0 0-11.14 6.17-23.67-9.99z"
                    />
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M144.13 57.67s28.7-19.55 42.53-.95c0 0-7.33 11.69-21.26 11.56-13.93-.13-20.3-8.54-21.26-10.62z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M144.13 57.67s5.74-12.3 2.2-22.44-15.11-14.66-15.11-14.66-5.11 7.37-3.85 14.75c1.26 7.37 5.36 11.06 8.04 12.65 2.68 1.59 8.47 6.75 8.72 9.7z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M79.96 113.19s-12.93-4.13-22.54.68c-9.6 4.81-12.61 16.86-12.61 16.86s7.97 4.13 15.12 1.94c7.15-2.19 10.29-6.73 11.52-9.6s5.62-9.26 8.51-9.88z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M127.09 86.2s5.56-10.37 24.42-9.87c18.85.5 17.72 9.93 43.99-1.63 0 0-9.25 14.46-28.51 24.13-19.26 9.68-41.57 2.64-39.9-12.63z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M127.09 86.2s4.72-14.52 1.2-26.42c-3.52-11.9-11.23-13.07-16.26-13.49-5.03-.42-14.33-1.42-12.99-12.91 0 0-9.51 11.5-6.87 26.41s10.36 22.07 16.74 24.96c6.38 2.89 13.99 4.15 18.17 1.45zM160.99 123.28s2.18-15.08 20.11-16.42c17.93-1.34 36.54 13.91 43.74 29.5 0 0-12.06-8.21-22.71-4.69-10.64 3.52-25.75 11.64-41.15-8.38zM127.59 140.23s17.37-11.26 35.97 0c18.6 11.26 15.59 28.63 15.59 28.63s-13.95 2.58-26.16-7.3c-12.22-9.89-9.37-18.1-25.39-21.32z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M137.17 108.54s-10.49 5.08-15.41 11.68-2.28 16.02 5.83 20.01c0 0-2.55-4.44 2.72-7.97 5.27-3.54 14.84-12.24 6.86-23.72z"
                    ></path>
                    <path
                      fill="#6cb597"
                      strokeLinejoin="round"
                      d="M92.35 130.78s2.98-9.34-2.68-18.83c-5.66-9.49-18.1-17.16-12.44-35.13 0 0 15.34 3.27 24.13 16.47 8.8 13.2 2.85 34.38-9.01 37.49z"
                    ></path>
                    <path
                      fill="#ace4c2"
                      strokeLinejoin="round"
                      d="M61.77 96.47S64.28 81.55 43 74.85c-21.28-6.71-41.23 9.05-42.4 30 0 0 6.37-12.07 23.3-6.54s26.82 8.21 37.88-1.84z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      d="M184 25.74c-82.53 38.18-75.01 161.04-75.01 161.04s-3.47-50.87 52-63.5M109.11 189.21s-.21-58.67-47.33-92.74"
                    ></path>
                  </g>
                </svg>
                <div className="no-height">
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    You'll fund
                  </p>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "15px !important" }}
                  >
                    Planting a tree
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontSize: "11px !important" }}
                  >
                    &amp; we'll send a photo
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Host 5 Website
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>30GB</b> SSD Disk Space
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>35</b> Email Account
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free SSL</b>{" "}
                  Certificate
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Free</b> Domain
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <b>Unlimited</b> Bandwidth
                </li>
                <li>
                  Powered By{" "}
                  <img src="img/ltd.svg" alt="lite" className="height-okay" />
                </li>
              </ul>
              <br /> <br />
            </div>
          </div>
        </div>
        <p className="listdownpara">
          <FontAwesomeIcon icon={faMoneyBill} />
          All plans are backed by our{" "}
          <span className="listdownspan">7-day money back guarantee*</span>
        </p>
        <p className="listdownpara-two">
          <FontAwesomeIcon icon={faTree} />
          Our team will conduct{" "}
          <mark>tree plantation</mark>
          when you make a yearly purchase.
        </p>
      </div>
      <div className="gynes" />
      <hr />
      <section className="py-2" id="margin-only">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h5 className="website-cmain">Why To Choose HostItUp?</h5>
              <p className="text-muted">
                We focus on successful sites for web designers, developers,
                bloggers and online businesses.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/24.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  Expert 24/7 Support
                </h3>
                <p className="text-muted">
                  Count on HostItUp for reliable support. Our friendly,
                  knowledgeable team is available to promptly assist you,
                  ensuring a smooth experience and your peace of mind. We are
                  always online.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/cloud.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  Cloud Infrastructure
                </h3>
                <p className="text-muted">
                  We employ dependable SSD Cloud infrastructure, leveraging the
                  latest hardware and software, to provide a consistent and
                  high-performance environment you can rely on.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/easy.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  Easy to Use Hosting
                </h3>
                <p className="text-muted">
                  HostItUp places your peace of mind first. Our Support team,
                  known for their friendly, fast, and knowledgeable assistance,
                  is ready to provide effective solutions whenever you need
                  help.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/99.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  99.9% Uptime
                </h3>
                <p className="text-muted">
                  Rely on us for steadfast hosting. We're committed to zero
                  downtime, ensuring constant website accessibility. With our
                  solid 99.9% uptime guarantee, your online presence is safe and
                  sound.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/sec.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  Stability &amp; Security
                </h3>
                <p className="text-muted">
                  We prioritize security, maintaining robust infrastructure for
                  fault tolerance and DDoS resistance, ensuring high
                  availability with a 99.9% uptime SLA across all accounts.
                  Secure now site with us.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-light rounded">
                <img
                  src="img/backup.png"
                  width={160}
                  height={160}
                  className="mx-auto d-block mb-4"
                  alt="24/7 support illustration"
                />
                <h3 className="h4 fw-bold text-center mb-3 whysec padilo">
                  Automated Backups
                </h3>
                <p className="text-muted">
                  Data security is our paramount concern. We conduct daily and
                  weekly off-site backups to eliminate data loss worries,
                  providing you with peace of mind and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gynes-two" />
      <hr />
      <div style={{ marginBottom: 0, marginTop: 27 }} className="helloonlybh">
        <section
          className="no-top"
          style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
        >
          <div
            className="container"
            style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
          >
            <div
              className="row align-items-center"
              style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
            >
              <div className="col-lg-7 imprtant-js">
                <div
                  className="marketing-content wow fadeInUp animated"
                  data-wow-delay=".3s"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="section-heading"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h3 className="text-of-features">Top-Notch Security</h3>
                    <h2 className="heading-info">
                      Built For Speed And{" "}
                      <span className="heading-info-span">Security</span>
                    </h2>
                    <p className="para-infop">
                      Our web hosting solutions are meticulously crafted to
                      deliver lightning-fast performance and robust security
                      measures, ensuring your online presence is both swift and
                      secure. With state-of-the-art servers and cutting-edge
                      technology, we guarantee minimal downtime and rapid load
                      times, enhancing user experience and boosting your site's
                      search engine rankings. Our advanced security protocols
                      protect your data from threats, providing peace of mind in
                      an ever-evolving cyber landscape, keeping you ahead of
                      potential cyber threats and ensuring continuous, service
                      for your business.
                    </p>
                  </div>
                  <div
                    className="row"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="col-md-5"
                      style={{
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div
                    className="spacer-half"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      marginTop: "-10px !important",
                    }}
                  ></div>
                  <a
                    className="btn-main-hello"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Secure Your Site Now
                  </a>
                </div>
              </div>
              <div
                className="col-lg-5"
                style={{
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="marketing-img wow fadeInUp animated"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                >
                  <img
                    className="img-fluid anim-up-down"
                    src="./img/infoma.svg"
                    alt="success-img"
                    style={{ maxWidth: "96% !important", marginTop: 30 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        className="no-top-top"
        style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
      >
        <div
          className="container"
          style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
        >
          <div
            className="row align-items-center"
            style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
          >
            <div
              className="col-lg-6 wow fadeInUp animated"
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              <br />
              <br />
              <img
                className="img-fluid anim-up-down"
                src="img/Blue Black Minimalist Server Cloud Logo_20240624_135859_0000.png"
                alt="cheapest hosting, unlimited hosting, hosting, shared hosting, web hosting, reseller hosting, master reseller, alpha reseller hosting, unlimited features, free ssl, free ssl certificates, HostItUp, cpanel host, cloud hosting, indian cloud hosting, usa cloud hosting, cheap cloud hosting in india, cheap domain, cheapest domain provider, indian reseller hosting, cloud hosting germany, shared hosting, HostItUp"
                style={{ width: "80% !important" }}
              />
            </div>
            <div
              className="col-lg-6 wow fadeInUp animated spaceoonone"
              data-wow-delay=".3s"
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="p-sm-30 pb-sm-0 mb-sm-0"
                style={{
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="text-of-features">24/7 Customer Support</h3>
                <h2 className="heading-info">
                  Our Team is Here to{" "}
                  <span className="heading-info-span">Guide You </span>
                </h2>
                <p className="para-infop">
                  Our dedicated team of experts is always available to address
                  any issues, answer your queries, and ensure your web hosting
                  experience is smooth and efficient. Whether it's the middle of
                  the night or a holiday, you can count on us for prompt and
                  professional support through various channels, including live
                  chat, email, and phone. With HostItUp, you never have to worry
                  about downtime or technical difficulties, as our team is
                  committed to keeping your website running flawlessly at all
                  times.
                </p>
                <div
                  className="row"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="col-md-5"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div
                    className="col-md-5"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
                <div
                  className="spacer-half"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    marginTop: "-10px !important",
                  }}
                />
                <a
                  className="btn-main-hello"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Request A Callback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space-fivetypx" />
      {/* TESTIMONIAL */}
      <section className="rts-testimonial section__padding hasipad-two">
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <div className="rts-section w-460 text-center">
                <h3 className="website-cmain">Our Customer Success Reviews</h3>
                <p className="rts-section__description">
                  From 24/7 support that acts as your extended team to
                  incredibly fast website performance
                </p>
              </div>
            </div>
          </div>
          {/* testimonial */}
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-testimonial__slider testimonial__slider--first">
                <div className="swiper-wrapper">
                  {/* single testimonial */}
                  <div className="swiper-slide">
                    <div className="rts-testimonial__single custom-shadow-lau">
                      <div className="rating">
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                      </div>
                      <div className="content">
                        <h3 className="h3-test">Great Support</h3>
                        <p className="para-customer">
                          The support system is really great and the team is
                          really very friendly and are always ready to help me
                          out.
                        </p>
                      </div>
                      <div className="author__meta">
                        <div className="author__meta--image">
                          <img src="img/testimoni/author.png" alt="" />
                        </div>
                        <div className="author__meta--details">
                          <div id="anone">
                            <a href="#" className="name-test">
                              Anurag Sharma
                            </a>
                          </div>
                          <span className="bus-ow">Business Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single testimonial end */}
                  {/* single testimonial */}
                  <div className="swiper-slide">
                    <div className="rts-testimonial__single custom-shadow-lau">
                      <div className="rating">
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                      </div>
                      <div className="content">
                        <h3 className="h3-test">User Friendly Panel</h3>
                        <p className="para-customer">
                          Using HostItUp's dashboard really feels very smooth
                          and cool and there control panel is very amazing.
                        </p>
                      </div>
                      <div className="author__meta">
                        <div className="author__meta--image">
                          <img src="img/testimoni/author-2.png" alt="" />
                        </div>
                        <div className="author__meta--details">
                          <div id="anone">
                            <a href="#" className="name-test">
                              Kirti Pandey
                            </a>
                          </div>
                          <span className="bus-ow">Youtuber</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single testimonial end */}
                  {/* single testimonial */}
                  <div className="swiper-slide">
                    <div className="rts-testimonial__single custom-shadow-lau">
                      <div className="rating">
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                      </div>
                      <div className="content">
                        <h3 className="h3-test">Amazing performance</h3>
                        <p className="para-customer">
                          Amazed with HostItUp's super fast performance and as
                          well as the server is super fast with 0 downtime.
                        </p>
                      </div>
                      <div className="author__meta">
                        <div className="author__meta--image">
                          <img src="img/testimoni/author-3.png" alt="" />
                        </div>
                        <div className="author__meta--details">
                          <div id="anone">
                            <a href="#" className="name-test">
                              Samira Khan
                            </a>
                          </div>
                          <span className="bus-ow">Digital Marketer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single testimonial end */}
                  {/* single testimonial */}
                  <div className="swiper-slide">
                    <div className="rts-testimonial__single custom-shadow-lau">
                      <div className="rating">
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                        <i className="fa-solid fa fa-star" />
                      </div>
                      <div className="content">
                        <h3 className="h3-test">Seamless Experience</h3>
                        <p className="para-customer">
                          Overall as a blogger for me HostItUp is the best
                          platform for hosting my blog sites as it can handle
                          High Traffic Websites.
                        </p>
                      </div>
                      <div className="author__meta">
                        <div className="author__meta--image">
                          <img src="img/testimoni/author.png" alt="" />
                        </div>
                        <div className="author__meta--details">
                          <div id="anone">
                            <a href="#" className="name-test">
                              Jamie Knop
                            </a>
                          </div>
                          <span className="bus-ow">Business Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single testimonial end */}
                </div>
                {/* pagination dot */}
                <div
                  className="rts-dot__button slider-center"
                  style={{ marginBottom: 50 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="spcerr2" />
      </section>
      <hr />
      <section className="faq-section pt-20 pb-md-25 pt-lg-25 pb-15 pb-lg-25 white-mode-texts overflow-hidden position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="px-md-12 text-center mb-9 mb-lg-13">
                <h2 className="website-cmain">Shared Web Hosting FAQs</h2>
                <p className="rts-section__description space-questions">
                  Below you'll find answers to the questions we get asked the
                  most about our services.
                </p>
              </div>
            </div>
          </div>
          {/* ./section-title Ends*/}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="accordion" id="accordionExample">
                <div className="rounded-20 shadow-custom mb-3 bg-white overflow-hidden">
                  <div
                    className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                    id="heading4-1"
                  >
                    <button
                      className="btn-reset coodiv-text-11 text-left text-rgb(15 23 42)ish-blue p-0 accordion-trigger arrow-icon w-100 maintexttt accordion-section-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse4-1"
                      aria-expanded="false"
                      onClick={() => handleClick("collapse4-1")}
                      aria-controls="collapse4-1"
                    >
                      Do I need to relicense an item each time I use it?
                    </button>
                  </div>
                  {accordion == "collapse4-1" && (
                    <div
                      id="collapse4-1"
                      className="collapse"
                      aria-labelledby="heading4-1"
                      data-parent="#accordionExample"
                      style={{ display: "block" }}
                    >
                      <div className="card-body coodiv-color-rgb(15 23 42)ish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-11 pb-9">
                        Yes you do. You need a license for each end project.
                        This ensures contributors are paid for your usage of
                        each asset &amp; you and your clients have the legal
                        right to use the item.
                      </div>
                    </div>
                  )}
                </div>
                <div className="rounded-20 shadow-custom mb-3 bg-white overflow-hidden">
                  <div
                    className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                    id="heading4-2"
                  >
                    <button
                      className="btn-reset coodiv-text-11 text-left text-rgb(15 23 42)ish-blue p-0 accordion-trigger arrow-icon w-100 maintexttt accordion-section-title"
                      type="button"
                      onClick={() => handleClick("collapse4-2")}
                      data-toggle="collapse"
                      data-target="#collapse4-2"
                      aria-expanded="false"
                      aria-controls="collapse4-2"
                    >
                      Do I need to relicense Fonts or Addons each time I use
                      them in a project?
                    </button>
                  </div>
                  {accordion == "collapse4-2" && (
                    <div
                      id="collapse4-2"
                      className="collapse"
                      aria-labelledby="heading4-2"
                      data-parent="#accordionExample"
                      style={{ display: "block" }}
                    >
                      <div className="card-body coodiv-color-rgb(15 23 42)ish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-11 pb-9">
                        No, you do not need to relicense fonts or addons for
                        each project. You only need to register them once for
                        the installation on your device. If registering a font
                        or addon to another computer you use, you need to issue
                        a new license for that installation.
                      </div>
                    </div>
                  )}
                </div>
                <div className="rounded-20 shadow-custom mb-3 bg-white overflow-hidden">
                  <div
                    className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                    id="heading4-3"
                  >
                    <button
                      className="btn-reset coodiv-text-11 text-left text-rgb(15 23 42)ish-blue p-0 accordion-trigger arrow-icon w-100 maintexttt accordion-section-title"
                      type="button"
                      onClick={() => handleClick("collapse4-3")}
                      data-toggle="collapse"
                      data-target="#collapse4-3"
                      aria-expanded="false"
                      aria-controls="collapse4-3"
                    >
                      Do I need to credit the author of the item?
                    </button>
                  </div>
                  {accordion == "collapse4-3" && (
                    <div
                      id="collapse4-3"
                      className="collapse"
                      aria-labelledby="heading4-3"
                      data-parent="#accordionExample"
                      style={{ display: "block" }}
                    >
                      <div className="card-body coodiv-color-rgb(15 23 42)ish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-11 pb-9">
                        No, it's not mandatory to give the author credit. But we
                        do encourage that if your end product has credits as
                        part of its design (such as a film or TV show), please
                        credit the author and Envato. Also, as the author
                        retains ownership of the item, you shouldn't claim
                        copyright in the item.
                      </div>
                    </div>
                  )}
                </div>
                <div className="rounded-20 shadow-custom mb-3 bg-white overflow-hidden">
                  <div
                    className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                    id="heading4-4"
                  >
                    <button
                      className="btn-reset coodiv-text-11 text-left text-rgb(15 23 42)ish-blue p-0 accordion-trigger arrow-icon w-100 maintexttt accordion-section-title"
                      type="button"
                      onClick={() => handleClick("collapse4-4")}
                      data-toggle="collapse"
                      data-target="#collapse4-4"
                      aria-expanded="false"
                      aria-controls="collapse4-4"
                    >
                      Can I mix two Envato Elements website templates together?
                    </button>
                  </div>
                  {accordion == "collapse4-4" && (
                    <div
                      id="collapse4-4"
                      className="collapse"
                      aria-labelledby="heading4-4"
                      data-parent="#accordionExample"
                      style={{ display: "block" }}
                    >
                      <div className="card-body coodiv-color-rgb(15 23 42)ish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-11 pb-9">
                        Yes, you can modify the items you download on Elements
                        to create a customised implementation of the item. The
                        license starts when you Register your use of the item
                        and the license is only valid if you complete the End
                        Product while your subscription is active. Then the
                        license continues for the life of the End Product (even
                        if your subscription ends).
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="rounded-20 shadow-custom mb-3 bg-white overflow-hidden"
                  style={{ marginBottom: "100px !important" }}
                >
                  <div
                    className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                    id="heading4-5"
                  >
                    <button
                      className="btn-reset coodiv-text-11 text-left text-rgb(15 23 42)ish-blue p-0 accordion-trigger arrow-icon w-100 maintexttt accordion-section-title"
                      type="button"
                      onClick={() => handleClick("collapse4-5")}
                      data-toggle="collapse"
                      data-target="#collapse4-5"
                      aria-expanded="false"
                      aria-controls="collapse4-5"
                    >
                      When I use a font in Merchandising, must I combine with
                      another asset?
                    </button>
                  </div>
                  {accordion == "collapse4-5" && (
                    <div
                      id="collapse4-5"
                      className="collapse"
                      aria-labelledby="heading4-5"
                      data-parent="#accordionExample"
                      style={{ display: "block" }}
                    >
                      <div className="card-body coodiv-color-rgb(15 23 42)ish-blue-opacity-7 pt-0 pl-9 pr-15 coodiv-text-11 pb-9">
                        No you do not. Fonts can be used on their own, so long
                        as you do not redistribute the font itself to any other
                        person.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <div className="rts-cta-two shared-page-bg pt-120">
        <div className="container">
          <div className="rts-cta-two__wrapperr">
            <div className="cta__shape" />
            <div className="cta-content">
              <h5
                data-sal="slide-down"
                data-sal-delay={100}
                data-sal-duration={800}
                className="sal-animate"
              >
                Need help choosing a plan?
              </h5>
              <h4
                data-sal="slide-down"
                data-sal-delay={300}
                data-sal-duration={800}
                className="sal-animate"
              >
                Need help? Chat with{" "}
                <span className="span-infoma">our friendly</span>
                team.
              </h4>
            </div>
            <div className="cta-btn">
              <a
                href="javascript:void(Tawk_API.toggle())"
                className="contact__us rts-btn rts-btn-secondary   
                
                   "
                data-sal="slide-left"
                data-sal-delay={100}
                data-sal-duration={800}
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer begin */}
      <Footer />
      {/* footer close */}

      <Script type="js" src="asset/js/main.js"></Script>
      <Script type="js" src="js/bootstrap.min.js"></Script>
      <Script defer type="" src="asset/js/plugins/swiper.js"></Script>
    </>
  );
}
