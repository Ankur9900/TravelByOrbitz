import React from 'react';
import styled from 'styled-components';
import styles from "./reward.module.css"
import { Box, Button, Input, Text } from '@chakra-ui/react';




export  const Reward = () => {

  
    return (
        <RewardCont style={{margin:"auto", marginTop:"-50px", width:"95%",paddingLeft:'20px'}}>
            <Box className={styles.Card}>
                <Box>       <img className={styles.Image} src={"https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"} alt="RewardImage" />
                </Box>
                <Box className={styles.Box2}>

                    <Text className={styles.Text} component="h2">
                        Rewards are waiting for you in the Orbitz app
                    </Text>

                    <ui className={styles.Threetext}>
                        <li className={styles.Text1}>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                        <li className={styles.Text1}>Get flight status and gate number notifications</li>
                        <li className={styles.Text1}>Have questions about your stay? Message your hotel right in the app</li>
                    </ui>

                    <Text className={styles.Text2} >
                        Text yourself a download link
                    </Text>

                    <Box className={styles.Input}>
                        <div style={{display:"flex" , gap:"10px"}}>
                        <Input type='tel' placeholder='+91 Country Code' width="120px" />
                        <Input type='tel' placeholder='Phone number' width="300px"/>
                        <Button className={styles.Button} variant="contained" color="secondary">
                            Get the App
                        </Button>
                        </div>
                         
                    </Box>

                    <p className={styles.text3}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p> 
                  
                </Box>

                <Box className={styles.Box3}>
                    <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png" alt="travelQR" />
                    <Text className={styles.TexQR}>Scan the QR code</Text>
                </Box>
            </Box>
        </RewardCont>
    );
}


const RewardCont = styled.div` 
        padding: 1.5rem;
        margin-top:80px;
        border:1px solid #616161;
        margin-bottom:80px;
        box-shadow :rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height:520px
    `