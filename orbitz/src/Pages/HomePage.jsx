import React from 'react'
import HomepageBody from '../Components/downtosearchbar/HomePageBody';
import { Searchbar } from '../feature/Searchbar';
import Footer from "../Components/Footer"
import Navbar from '../Components/Navbar/Navbar';
import  Travel from "./Travel"


const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
            <Searchbar/>
            <HomepageBody />
             <Travel/>
        </div>
    )
}

export default HomePage