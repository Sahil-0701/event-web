import React from "react";
import Collection from "../components/Collection";
import BestSeller from "../components/BestSeller";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurPolicies from "../components/OurPolicies";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurPolicies/>
      <Collection/>
      <BestSeller/>
     
    </div>
  );
};

export default Home;
