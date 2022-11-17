import React from 'react'
import HomepageBody from '../Components/downtosearchbar/HomePageBody'
import { Searchbar } from '../Components/feature/Searchbar'
import Footer from '../Components/Footer/Footer'


import Navbar from '../Components/Navbar/Navbar'



const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
           <Searchbar/>
            <HomepageBody />
            <Footer />
        </div>
    )
}

export default HomePage