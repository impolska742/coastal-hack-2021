import React, { useState, useEffect } from "react";
import Video from "../video/video.mp4";
import {
  MdArrowForward as ArrowForward,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";
import Login from "./Login";
import SignUp from "./SignUp";
import Img1 from "../img/svg-1.svg";
import Logo from "../img/logo.png";
import WordCloud from "../img/wordCloud.png";
import DailyAverage from "../img/dailyAverage.png";

import Img2 from "../img/svg-2.svg";
import Img3 from "../img/svg-3.svg";
import Img4 from "../img/svg-4.svg";
import Img5 from "../img/svg-5.svg";
import { Link } from "react-scroll";
import axios from "axios";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";
import Select from "react-select";

const LandingPage = () => {
  const [hover, setHover] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const [scrollNav, setScrollNav] = useState(false);

  const optionsState = "";

  const options = [
    { value: "0021 3983 2000 58", label: "Algeria" },
    { value: "(54-11) 4758-2554", label: "Argentina" },
    { value: "(2) 538194", label: "Armenia" },
    { value: "131114", label: "Australia" },
    { value: "112", label: "Austria" },
    { value: "(2) 322-2763", label: "Bahamas" },
    { value: "999", label: "Bangladesh" },
    { value: "(246) 4299999", label: "Barbados" },
    { value: "1813", label: "Belgium" },
    { value: "3911270", label: "Bolivia" },
    { value: "080 05 03 05", label: "Bosnia & Herzegovina" },
    { value: "3911270", label: "Botswana" },
    { value: "188", label: "Brazil" },
    { value: "0035 9249 17 223", label: "Bulgaria" },
    { value: "1 (833) 456 4566 ", label: "Canada" },
    { value: "800-810-1117", label: "China" },
    { value: "(57-1) 323 24 25", label: "Colombia" },
    { value: "112", label: "Croatia" },
    { value: "8000 7773", label: "Cyprus" },
    { value: "112", label: "Czech Republic" },
    { value: "4570201201", label: "Denmark" },
    { value: "122", label: "Egypt" },
    { value: "3726558088", label: "Estonia" },
    { value: "010 195 202", label: "Finland" },
    { value: "0145394000", label: "France" },
    { value: "08001810771 ", label: "Germany" },
    { value: "2332 444 71279", label: "Ghana" },
    { value: "1018", label: "Greece" },
    { value: "223-0001", label: "Guyana" },
    { value: "09000767", label: "Holland" },
    { value: "852 2382 0000", label: "Hong Kong" },
    { value: "116123", label: "Hungary" },
    { value: "8888817666", label: "India" },
    { value: "1-800-273-8255", label: "Indonesia" },
    { value: "1480", label: "Iran" },
    { value: "+4408457909090", label: "Ireland" },
    { value: "1201", label: "Israel" },
    { value: "800860022", label: "Italy" },
    { value: "1-888-429-KARE (5273)", label: "Jamaica" },
    { value: "810352869090", label: "Japan" },
    { value: "110", label: "Jordan" },
    { value: " 371 67222922", label: "Latvia" },
    { value: "1564", label: "Lebanon" },
    { value: "6534308", label: "Liberia" },
    { value: "352 45 45 45", label: "Luxembourg" },
    { value: "(06) 2842500", label: "Malaysia" },
    { value: "179", label: "Malta" },
    { value: "+230 800 93 93", label: "Mauritius" },
    { value: "5255102550 ", label: "Mexico" },
    { value: "900 0113", label: "Netherlands" },
    { value: "1737", label: "New Zealand" },
    { value: "234 8092106493 ", label: "Nigeria" },
    { value: "+4781533300", label: "Norway" },
    { value: "115", label: "Pakistan" },
    { value: "028969191 ", label: "Philippines" },
    { value: "5270000", label: "Poland" },
    { value: "8 96 898 21 50", label: "Portugal" },
    { value: "0800 801200 ", label: "Romania" },
    { value: "0078202577577", label: "Russia" },
    { value: "9784) 456 1044", label: "Saint Vincent and the Grenadines" },
    { value: "112", label: "Saudi Arabia" },
    { value: "(+381) 21-6623-393", label: "Serbia" },
    { value: "1 800 2214444 ", label: "Singapore" },
    { value: "914590050", label: "Spain" },
    { value: "0514445691", label: "South Africa" },
    { value: "(02) 7158600", label: "South Korea" },
    { value: "011 057 2222662", label: "Sri Lanka" },
    { value: "(249) 11-555-253", label: "Sudan" },
    { value: "46317112400", label: "Sweden" },
    { value: "143", label: "Switzerland" },
    { value: "(02) 713-6793", label: "Thailand" },
    { value: "23000", label: "Tonga" },
    { value: "(868) 645 2800", label: "Trinidad and Tobago" },
    { value: "112", label: "Turkey" },
    { value: "800 46342", label: "United Arab Emirates" },
    { value: "0800 689 5652", label: "United Kingdom" },
    { value: "(800) 273-8255", label: "United States" },
  ];

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const getQuotes = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));

    if (quotes.length > 0) {
      setQuotes(quotes[Math.floor(Math.random() * quotes.length - 1)]);
    }
  };

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
    setQuote(randomQuote);
    console.log(randomQuote);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  const [selectedValue, setSelectedValue] = useState(8002738255);

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  return (
    <>
      <Navbar scrollNav={scrollNav} toggleHome={toggleHome} />

      <div className="hero-section home">
        <div className="video-bg">
          <video src={Video} autoPlay muted loop type="video/mp4" />
        </div>

        <div className="page-content">
          <h1 className="page-heading">SemiColon Community</h1>

          <center>
            <p style={{ marginLeft: "5%", marginRight: "5%" }}>
              Mental health is such an important aspect in life. In order to be
              successful, people must have an optimistic mindset and never give
              up at their goals. Unfortunately, about 800,000 people die from
              being depressed each year. In order to have a healthy, calm mind,
              it is important to receive support and engagement from others.
              Hence, we hope this webapp shines some light in the lives of
              others, and makes their duties easier with its broad range of
              functionality.
            </p>
          </center>
          <button className="btn" onClick={getRandomQuote}>
            Random Quote !!
          </button>

          <i>
            <h1 style={{ margin: "30px 0 10px" }} className="quote">
              {quote.text}
            </h1>
          </i>

          <h3 style={{ fontWeight: 200, margin: "10px 0" }} className="author">
            {quote.author === null ? "Anonymous" : quote.author}
          </h3>

          <Link
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
            exact="true"
            to="sign-up"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className="btn"
          >
            Get Started{" "}
            {hover ? (
              <ArrowForward className="icon" />
            ) : (
              <ArrowRight className="icon" />
            )}
          </Link>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="img-wrapper">
                <img className="logo-img" src={Logo} alt="Img" />
              </div>
            </div>
            <div className="col2">
              <div className="text-wrap">
                <h1 className="top-line">About Us</h1>

                <h2 className="heading">
                  We are dedicated to helping you maintain a positive
                  state-of-mind.{" "}
                </h2>
                <p className="subtitle">
                  With our chat functionality, we will help users avoid stress
                  by talking to others on the webapp. We also have a daily quote
                  section for motivation and a mental health tips list. We
                  believe that the semicolon is a symbol for optimism, as when a
                  writer includes a semicolon, the sentence goes on when there
                  is a pause, just like in life, hence the name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Free Community.</h1>
                <h2 className="heading">For you, me and all of us.</h2>
                <p className="subtitle">
                  Join us now for an open and healthy environment to talk, share
                  and make friends in general.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img1} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Meditate.</h1>
                <h2 className="heading">
                  Meditation, yoga, massages, and deep breathing exercises and
                  guidance.
                </h2>
                <p className="subtitle">
                  Keeping your problems to yourself is doing nothing but
                  suffocating your inner self. Open up, call a friend or join
                  the community to share.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img2} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hotline" className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Learn in public.</h1>
                <h2 className="heading">Seek therapy or medical assistance</h2>
                <Select
                  placeholder="Select Option"
                  value={options.find((obj) => obj.value === selectedValue)} // set selected value
                  options={options} // set list of the data
                  onChange={handleChange} // assign onChange function
                />
                <p>Here is the Hotline: {selectedValue}</p>
                <p className="subtitle">
                  The community is completely based on wellness of the people,
                  learn and share your accomplishments in public to feel better.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img3} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Maintaining good relationships</h1>
                <h2 className="heading">
                  When was the last time you called a friend?
                </h2>
                <p className="subtitle">
                  Always communicate with your loved ones and remember they are
                  there for you.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img4} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">You are not alone</h1>
                <h2 className="heading">It is a battle for everyone.</h2>
                <p className="subtitle">
                  Check out this Sentiment Analysis chart and Word Cloud that
                  was created by extracting Twitter tweets regarding mental
                  health.
                </p>
              </div>
            </div>

            <div className="col2">
              <div className="img-wrapper flex">
                <img style={{ marginTop: "-80px" }} src={WordCloud} alt="Img" />
                <img src={DailyAverage} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sign-in" className="info-container dark">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Join Us!</h1>
                <h2 className="heading">Login to start your journey now!</h2>
                <p className="subtitle">
                  Exercising with others is ideal in improving mental health
                  because you are with people close to you who can understand
                  your problems and will always be there for you.
                </p>
              </div>
              <Login />
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img4} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sign-up" className="info-container">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap-signup">
                <h1 className="top-line">New user here?</h1>
                <h2 className="heading">Sign Up for Free!</h2>
              </div>
              <SignUp />
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img5} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
