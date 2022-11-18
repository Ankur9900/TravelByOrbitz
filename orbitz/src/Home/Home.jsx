import React from "react";
import Options from "./Options";
import Travel from "./Travel";
import Travelling from "./Travelling";
import { Searchbar } from "../feature/Searchbar";
import { Reward } from "./Reward";
import Section1 from "./Section1";
import "./home.css"

export const Home = () => {
  return (
    <div>
      <Searchbar />
      <Travelling />
      <Travel />
      <Options />
      <Section1/>
      <Reward />
    </div>
  )

};
