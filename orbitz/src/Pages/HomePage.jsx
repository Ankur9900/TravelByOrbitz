import React from 'react'
import HomepageBody from '../Components/downtosearchbar/HomePageBody';
import { Searchbar } from '../feature/Searchbar';

import Footer from "../Components/Footer/Footer"

import Navbar from '../Components/Navbar/Navbar';
import  Travel from "./Travel"
import { HelpBoat } from './HelpBoat';
import {Travelling} from ".././Home/Travelling";


const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
            <Searchbar/>
            <Travelling />
            <HomepageBody />
             <Travel/>
             <HelpBoat/>
             <Footer/>
        </div>
    )
}

export default HomePage