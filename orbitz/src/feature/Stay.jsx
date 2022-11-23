import React, { useState } from "react";
import { Button, Checkbox, HStack, Input, Stack, Text, Box } from "@chakra-ui/react";
import "./stay.css";
import { Flex } from "@chakra-ui/react";
import styles from "./style.module.css";
import { FaUserAlt } from "react-icons/fa";
import { makeStyles, TextField, MenuItem } from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useHistory  from 'use-history'
import {useDispatch} from "react-redux"



export const Stay = () => {
  const [addFlight, setAddFlight] = useState(false);
  const [addCar, setAddCar] = useState(false);
    const navigate= useNavigate()
  const [queryDetails, setQueryDetails] = useState({});
  
  const places = [
    {
      label: "Bangalore",
      value: "Bangalore",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Pune",
      value: "Pune",
    },
    {
      label: "Hyderabad",
      value: "Hyderabad",
    },
    {
      label: "Mumbai",
      value: "Mumbai",
    },
  ];

  const  date= {
      marginTop: "10px",
      marginRight: "10px",
      fill: "#616161",
    }
    
  const btn1 = {
    marginTop: "10px",
    width: "170px",
    // height: "49px",
    backgroundColor: "rgb(200,50,89)",
    borderRadius: "1px",
    textTransform: "none",
    fontSize: "18px",
    // color: "white",
    cursor: "pointer",
    border: "0px",
  }
  const btn2 = {
    width: "180px",
    height: "49px",
    backgroundColor: "rgb(200,50,89)",
    borderRadius: "3px",
    textTransform: "none",
    fontSize: "18px",
    position: "absolute",
    bottom: 20,
    left: 510,
    color: "white",
    cursor: "pointer",
    border: "0px",
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDetails({ ...queryDetails, [name]: value });
  };



  return (
    <>
      <div className={styles.box}>
        <div className={styles.Input}>
          <HStack
            textAlign="center"
            justifyItems={"center"}
           border="1px solid gray"
          // float={"left"}
          >
            <TextField
              width="300px"
              name="city"
              onChange={handleChange}
              variant="outlined"
              className={styles.Inp}
              label="City"
              select
            >
              {places.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </HStack>

          <Input
              name="from"
             onChange={handleChange}
            placeholder="Select Date and Time"
            label="Check-in"
            width="150px"
            height="50px"
            type="date"
            fontSize={20}
            color="#616161"
            variant="outlined"
            defaultValue="2022-11-14"
            borderRadius={5}
            // border={"black"}
          />

          <Input
             name="to"
            onChange={handleChange}
            placeholder="Select Date and Time"
            label="Check-out"
            width="150px"
            height="50px"
            type="date"
            fontSize={20}
            color="#616161"
            variant="outlined"
            borderRadius={5}
            defaultValue="2022-11-16"
          />

          <Box
            border="2px solid gray"
            width="200px"
            justifyContent={"center"}
            height="50px"
          >
            <HStack mt={"10px"} justifyContent="space-evenly"
            // borderRadius={5}
            >
              <FaUserAlt justifyContent="center" />
              <Text
                ml={"20px"}
                fontSize={20}
                fontWeight="450"
                textAlign="center"
                borderRadius={5}
                name="travelers"
              >
                Travelers
              </Text>
            </HStack>
          </Box>
        </div>

        <div className={styles.check}>
          <Stack spacing={25} direction="row">
            <Checkbox colorScheme="green"
              // onChange={(e) => setAddFlight(e.target.checked)}
            >
              <input type={"checkbox"} />
              Add to Flight
            </Checkbox>
            <Checkbox colorScheme="green"
                // onChange={(e) => setAddCar(e.target.checked)}
            >
              <input type={"checkbox"} />
              Add to Car
            </Checkbox>
          </Stack>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
         {/* <Link to="/hotels"> */}
          <Button className={styles.but} variant="solid">
            Search
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
