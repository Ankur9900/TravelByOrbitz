import React from 'react'
import Countries from '../downtosearchbar/Countries'
import Footer from '../Footer/Footer'
import styles from './BelowPart.module.css'

const BelowPart = () => {
    return (
        <div style={{ background: "#f5f5f5" }}>

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
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BelowPart