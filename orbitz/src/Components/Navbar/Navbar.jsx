import React, {  useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { RiHotelFill } from 'react-icons/ri';
import { RiCarFill, RiSuitcase2Fill, RiShipFill } from 'react-icons/ri';
import { MdOutlineFlight } from 'react-icons/md';
import { BsFillInboxesFill } from 'react-icons/bs';
import TRABITZ from "../image/TRABITZ.png"

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { useSelector } from 'react-redux';
import Signin from './../../Pages/Signin';

// import Signin from"../../



const Navbar = () => {
  const [showMoreTravel, setShowMoreTravel] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const auth = useSelector(state => state.Auth.auth)



  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_div}>
        <Link to="/">
          <img
            // src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
            src={TRABITZ}
            alt="Brand logo"
            width="160px"
            heigth="45px"
          />
        </Link>
        {/* <section ref={ref}> */}
        <div
          className={styles.more_travel_parent_div}
          onClick={() => {
            setShowMoreTravel(!showMoreTravel);
            setShowSignIn(false);
          }}
        >
          <div
            style={showMoreTravel ? { color: '#00a4bb' } : null}
            className={styles.more_travel_btn}
          >
            <p>More travel</p>

            {showMoreTravel ? (
              <BiChevronUp fontSize={'1.3rem'} />
            ) : (
              <BiChevronDown fontSize={'1.3rem'} />
            )}
          </div>

          {showMoreTravel && (
            <div className={styles.more_travel_dropdown}>
              <div>
                {' '}
                <RiHotelFill fontSize={'1.3rem'} />
                  <Link to="/hotels">
                <p> Stays</p>
                  </Link>

              </div>
              <div>
                <MdOutlineFlight fontSize={'1.3rem'} />
                <p>Flights</p>
              </div>
              <div>
                <RiSuitcase2Fill fontSize={'1.3rem'} />
                <p>Packages</p>
              </div>
              <div>
                <RiCarFill fontSize={'1.3rem'} /> <p>Car</p>
              </div>
              <div>
                <RiShipFill fontSize={'1.3rem'} />
                <p>Cruises</p>
              </div>
              <div>
                <BsFillInboxesFill fontSize={'1.3rem'} />
                <p>Things to do</p>
              </div>
              <p className={styles.para1}>Deals</p>
              <p className={styles.para2}>Group & meetings</p>
              <p className={styles.para3}>Travel Blog</p>
            </div>
          )}
        </div>

        {/* </section> */}
      </div>
      <div className={styles.navbar_right_options_div}>
        <nav>
          <NavLink to="#">Español</NavLink>
          <NavLink to="#">List your property</NavLink>
          <NavLink to="#">Support</NavLink>
          <NavLink to="#">Trips</NavLink>
          {/* <NavLink to="#">SignIn</NavLink> */}
        </nav>
        <div className={styles.trbitz}> 
          
        </div>
        {/* <section ref={ref}> */}

        {!auth && <div
          className={styles.signin}
          onClick={() => {
            setShowSignIn(!showSignIn);
            setShowMoreTravel(false);
          }}
          style={showSignIn ? { color: '#00a4bb' } : null}
        >
          Sign in
          {showSignIn && (
            <div className={styles.signin_popup}>
              <h4>
                Members can access discounts, points and special features
              </h4>
              <Link style={{ textDecoration: "none", color: 'white' }} to="signin" className={styles.signin_btn}>
                <p className={styles.signbtn} >Sign in</p>

              </Link>

              <h4>
                <Link className={styles.signup_btn} to="/signup">
                  Create a free account
                </Link>
              </h4>
              <div className={styles.otherLinks}>
                <p>
                  <Link to="#">List of favorites</Link>
                </p>
                <p>
                  <Link to="#">loyality program</Link>
                </p>
                <hr />
                <p>
                  <Link to="#">feedback</Link>
                </p>
              </div>
            </div>
          )}

        </div>}
        {auth &&
        
         <div>
        Sign out
       
        </div>}
      
      
      </div>

    </div>

  );
}

export default Navbar;

