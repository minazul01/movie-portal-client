import React from "react";
import Header from "../Header/Header";
import FeatureMovie from "../Header/FeatureMovie";
import NewRelease from "../Header/NewRelease";
import Watch from "../Header/Watch";

const Home = () => {
  return (
    <>
      <div className="min-h-screen container mx-auto">
        <Header />
        <FeatureMovie />
        <Watch />
        <NewRelease />
      </div>
    </>
  );
};

export default Home;
