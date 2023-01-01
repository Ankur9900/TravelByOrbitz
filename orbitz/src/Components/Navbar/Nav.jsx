import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import TRABITZ from "../image/TRABITZ.png"

import "./nav.css";



const Nav = () => {
    const [isMobile ,SetMobile] = useState(false)

    // className='nav-links'

 return(
     <div  className='navbar'>
       <div className="navbar_logo_div">
        <Link to="/">
          <img
            src={TRABITZ}
            width="160px"
            height="120px"
          />
        </Link>
      
        </div>
  
        <ul 
         className={isMobile ? "nav-links-mobile":"nav-links" }
        onClick={() =>SetMobile(false) }
        >
               <Link className="Home">
                  <li>Home</li>
               </Link>
               <Link className="Home">
                  <li>Home</li>
               </Link>
               <Link className="Home">
                  <li>Home</li>
               </Link>
               <Link className="Home">
                  <li>Home</li>
               </Link>
               <Link className="Signup">
                  <li>Signup</li>
               </Link>
        </ul>
         
         <button className='mobile-menu-icon'
         onClick={()=> SetMobile(!isMobile) }
         >
            { isMobile ? (
                <i className='fas fa-times'></i>
         )
            :(
                <i className='fa fa-bars'></i> 
                
         ) }
            
            
            
            
         </button>

     </div>
 )
}

export default Nav