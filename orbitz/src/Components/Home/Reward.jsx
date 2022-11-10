import React from "react";

import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import styles from "./reward.module.css";

export const Reward = () => {
  return (
    <Container
      width={"90%"}
      margin={"auto"}
      borderWidth="1px"
      boxShadow="lg"
      borderRadius="lg"
      height={"auto"}
      // border={"1px solid black"}
      marginBottom="50px"
    >
      <Box
        border="1px solid gray"
        display="flex"
        bg="#fff;"
        maxW="8xl"
        m="auto"
        ml="20px"
        gap="40px"
        borderRadius="lg"
        // boxShadow="lg"
        boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box h="500px" w="400px">
          <Image
            w="400px"
            h="500px"
            src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
          />
        </Box>

        <Box h="500px" w="800px" >
          <Box display="flex">
            <Text
              fontfamily="oswald, serif"
              fontWeight="bold"
              fontSize={33}
              color="#202340"
            >
              Rewards are waiting for you in the Orbitz app
            </Text>

            <Box marginTop={"10px"}>
              <Image
                width={"100px"}
                src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
              ></Image>
              <Text> Scan the QR COde</Text>
            </Box>
          </Box>
          {/* ------------------- */}
          <Box textAlign={"start"} ml="10px">
            <Text>
              . Earn 4% back when you book your hotel in app, vs. 3% on site
            </Text>
            <Text> . Get flight status and gate number notifications</Text>
            <Text>
              . Have questions about your stay? Message your hotel right in the
              app
            </Text>
          </Box>
          <Box>
            <Text
              textAlign={"start"}
              ml="10px"
              fontfamily="oswald, serif"
              fontWeight="bold"
              fontSize={23}
              color="#202340"
            >
              Text yourself a download link
            </Text>
            {/* ----------------------- */}

            <div className={styles.box}>
              <div className={styles.Input}>
                <HStack
                  textAlign="center"
                  justifyItems={"center"}
                  // border="1px solid gray"
                >
                  <Input
                placeholder="+91 Country Code"
                    textAlign={"start"}
                    width={"150px"}
                    height="50px"
                    fontSize={14}
                    fontWeight="500"
                  />

                  <Input
                    placeholder="Phone Number"
                    textAlign={"start"}
                    width={"150px"}
                    height="50px"
                    fontSize={14}
                    fontWeight="500"
                  />
                </HStack>

                <Button className={styles.but} variant="solid">
                Get The App
                </Button>
              </div>
            </div>
            <Box textAlign={"start"} ml="10px">
            <Text>
            By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.
            </Text>
          </Box>

          </Box>
        </Box>

        {/* -------------- */}
      </Box>
      {/* ------------------------- */}
    </Container>
  );
};

