import React from "react";
import Searchbar from "../Search/Searchbar";

import Section from "./Section";
import Travel from "./Travel";
import Travelling from "./Travelling";

export const Home = () => {
  return (
    <div>
      <Searchbar />
      <Section />
      <Travel />
      <Travelling />
      
    </div>
  );
};
