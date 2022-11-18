import React from 'react'
import styles from './HomePageBody.module.css'
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdMonetizationOn, MdForum } from 'react-icons/md'
import Countries from './Countries'
import { IoIosArrowDown } from 'react-icons/io'

const HomepageBody = () => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.threedivs}>
                <div className={styles.lgbtq}>
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.lgbtq}>
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.lgbtq}>
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div className={styles.shadow}></div>
                </div>
            </div>

            {/* featured offers */}
            <div className={styles.featured}>
                <h2>Featured Offers</h2>
                <div className={styles.feature_all_boxex}>
                    <div className={styles.feature_box1}>
                        <img
                            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
                            alt="" />
                        <div className={styles.feature_title}>
                            <h4>Last-minute deals</h4>
                            <p>Getaway today</p>
                        </div>
                    </div>

                    <div className={styles.feature_box1}>
                        <img
                            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
                            alt="" />
                        <div className={styles.feature_title}>
                            <h4>All-inclusive resorts</h4>
                            <p>Enjoy sun and fun</p>
                        </div>
                    </div>

                    <div className={styles.feature_box1}>
                        <img
                            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
                            alt="" />
                        <div className={styles.feature_title}>
                            <h4>Insider Prices</h4>
                            <p>Members get rewarded</p>
                        </div>
                    </div>

                    <div className={styles.feature_box1}>
                        <img
                            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
                            alt="" />
                        <div className={styles.feature_title}>
                            <h4>Jet and reset</h4>
                            <p>Fly somewhere beachy and warm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.add}>

                <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg" alt="" />
                <div className={styles.feature_title1}>
                    <h4>Today's top deals</h4>
                    <p>Vacations are even more rewarding with our best offers</p>
                </div>
            </div>

            <div className={styles.help_section}>
                <h2>Here to help keep you on the move</h2>
                <div className={styles.help_boxes}>
                    <div className={styles.cancel_trip}>
                        <div className={styles.cancel_heading}>
                            <h3>Change or cancel a trip</h3>
                            <AiTwotoneEdit style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                        </div>
                        <p>Make updates to your itinerary or cancel a booking</p>
                    </div>

                    <div className={styles.cancel_trip}>
                        <div className={styles.cancel_heading}>
                            <h3>Use a credit or coupon</h3>
                            <MdMonetizationOn style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                        </div>
                        <p>Apply a coupon code or credit to a new trip</p>
                    </div>

                    <div className={styles.cancel_trip}>
                        <div className={styles.cancel_heading}>
                            <h3>Track you refund</h3>
                            <MdForum style={{ cursor: "pointer", fontSize: "1.3rem" }} />                        </div>
                        <p>Check the status of a refund currently in progress</p>
                    </div>
                </div>
            </div>
            {/* traveling Trips */}
            <div className={styles.traveling_tips}>
                <h2>Traveling Tips</h2>
                <div className={styles.tips_all_boxes}>
                    <div className={styles.tips_box}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg" alt="" />
                        <div className={styles.tips_headings}>
                            <h3>National Parks</h3>
                            <p>There's plenty to keep you busy.</p>
                            <button>Learn more</button>
                        </div>
                    </div>

                    <div className={styles.tips_box}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg" alt="" />
                        <div className={styles.tips_headings}>
                            <h3>The perfect road trip</h3>
                            <p>Find an adventure for every seasion.</p>
                            <button>Read on</button>                        </div>
                    </div>
                </div>
            </div>
            {/* reward */}
            <div className={styles.reward}>
                <img src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg" alt="" />
                <div className={styles.reward_details}>
                    <h2>Rewards are waiting for you in the Orbitz app</h2>

                    <li className={styles.pointers}>
                        Earn 4% back when you book your hotel in app, vs. 3% on site
                    </li>
                    <li className={styles.pointers}>
                        Get flight status and gate number notifications
                    </li>
                    <li className={styles.pointers}>
                        Have questions about your stay? Message your hotel right in the app
                    </li>

                    <h4>Text yourself a download link</h4>
                    <div className={styles.download_link}>
                        <select className={styles.country_codes}>
                            <Countries />
                        </select>
                        <input type="number" className={styles.app_number} placeholder="Phone Number" />
                        <div className={styles.stays_saerch}>
                            <button>Get the app</button>
                        </div>
                    </div>
                    <p className={styles.message}>
                        By providing your number, you agree to receive a one-time automated
                        text message with a link to get the app. Standard text message rates
                        may apply.
                    </p>
                </div>
                <div className={styles.qr_code}>
                    <img
                        src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
                        alt="" />
                    <p>Scan the QR code</p>
                </div>
            </div>

            {/* more destination? below*/}
            <div className={styles.more_destination}>
                <h2>More destinations</h2>
                <div>
                    <div>
                        <h4>Destination deals</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>
                    <div>
                        <h4>Top hotel beach destination</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>
                    <div>
                        <h4>Top hotel city destination</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>

                </div>
                <div>
                    <div>
                        <h4>Top Vacation destination</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>
                    <div>
                        <h4>Top flight destination</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>
                    <div>
                        <h4>Top car rental destination in America</h4>
                        <IoIosArrowDown style={{ cursor: "pointer", fontSize: "1.3rem" }} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomepageBody