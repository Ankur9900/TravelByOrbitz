import React from 'react'
import styles from './Footer.module.css'
import Trabit from "../image/Trabit.png"

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div>
          <img 
        //   src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" 
        src={Trabit}
        width="280px"
        heigth="55px"
        margin-top="-50px"
          alt="" />
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>List your property</p>
          <p>Partnerships</p>
          <p>Newsroom</p>
          <p>Investor Relations</p>
          <p>Site Map</p>
          <p>Orbitz Rewards</p>
          <p>Advertising</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p>Hotels in United States</p>
          <p>Vacation Rentals in United States</p>
          <p>Car Rentals in United States</p>
          <p>Domestic Flights</p>
          <p>Vacation Packages in United States</p>
          <p>Orbitz Reviews</p>
          <p>Orbitz Coupons</p>
          <p>LGBTQ Travel</p>
          <p>Unique Accommodations</p>
          <p>Travel Blog</p>
        </div>
        <div>
          <h4>Policies</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Vrbo terms and conditions</p>
          <p>Orbitz Rewards Terms</p>
          <p>Do not sell my personal information</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>Support</p>
          <p>Cancel your hotel or vacation rental booking</p>
          <p>Cancel your flight</p>
          <p>Refund timelines, policies & processes</p>
          <p>Use an Orbitz Coupon</p>
        </div>
      </div>
      <hr className={styles.footerhr} />
      <div className={styles.bottom_line}>
        <p>© 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved. </p>
        <p>  Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</p>

      </div>
    </div>
  )
}

export default Footer;