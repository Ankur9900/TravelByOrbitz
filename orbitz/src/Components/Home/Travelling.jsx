import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Image,
  
} from "@chakra-ui/react";
/**
 *   <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" />
 *   <Image  src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium" />
         <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium" />
 */

export const Travelling = () => {
  const outerBoxStyles = {
    // boxSize: "250px",
    p: "10",
    // w:"50%",
    // boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // box-shadow: ;
  };

  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <Container
      // border={"1px solid black"}
      margin={"auto"}
      mt={"100px"}
      mb={"40px"}
      width="90%"
      display={"flex"}

    >
      <Flex flexWrap="wrap" gap="8px" justifyContent="space-evenly" display={"flex"} m="auto">
        <Box sx={outerBoxStyles}> 
        <Image w={["400px"]} src={"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"} />
        </Box>

        <Box sx={outerBoxStyles}> 
        <Image w={"400px"} src={"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"} />
        </Box>

        <Box sx={outerBoxStyles}> 
        <Image w={"400px"} src={"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"} />
        </Box>
        
      </Flex>
    </Container>
  );
};

export default Travelling;
