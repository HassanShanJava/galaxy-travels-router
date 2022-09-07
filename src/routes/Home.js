import React from "react";
import Footer from "../components/Footer";
import VideoHero from "../components/VideoHero";
import NavBar from "../components/NavBar";

import '../index.css';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <VideoHero/>
      <Footer/>
    </div>
  );
};

export default Home;
