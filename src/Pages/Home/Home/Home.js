import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppionmentBanner from "../AppionmentBanner/AppionmentBanner";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <BannerFooter />
      <Services />
      <AppionmentBanner />
    </div>
  );
};

export default Home;
