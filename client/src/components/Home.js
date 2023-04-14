import React from "react";
import "./Home.css";
import Header from "./Partials/Header/Header";
import Footer from "./Partials/Footer/Footer";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import Article from "./Article/Article";
import OurTeam from "./OurTeam/OurTeam";
import Testimonial from "./Testimonial/Testimonial";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
    <React.Fragment>
      <Header />
      <h1>Home page</h1>
      <Banner />
      <OurServices />
      <Article direction="reverse" />
      <Article direction="" />
      <OurTeam />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </React.Fragment>
    </div>
  );
};

export default Home;