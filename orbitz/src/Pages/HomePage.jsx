import React from 'react'
import HomepageBody from '../Components/downtosearchbar/HomePageBody'
import { Searchbar } from '../feature/Searchbar'

import Navbar from '../Components/Navbar/Navbar'



const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
            <Searchbar/>
            <HomepageBody />
        
        </div>
    )
}

export default HomePage