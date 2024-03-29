import type { NextPage } from "next";
import { Component, useEffect } from "react";
//@ts-ignore
import AOS from "aos";
import Navbar from "components/organisms/Navbar";
import MainBanner from "components/organisms/MainBanner";
import TransactionStep from "components/organisms/MainBanner/TransactionStep";
import FeatureGame from "components/organisms/FeatureGame";
import Reached from "components/organisms/Reached";
import Story from "components/organisms/Story";
import Footer from "components/organisms/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
