import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  
} from "@chakra-ui/react";


export const Travelling = () => {

  const outerBoxStyles = {
    p:"10",
    boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };



  return (
    <>
     <h1 style={{textAlign:"center", marginTop:"10px"}}> Travel Trips</h1>
    <Container
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
    </>
  );
};

export default Travelling;
