import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Price from "./Price";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Price />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
