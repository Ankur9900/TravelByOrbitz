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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDetails({ ...queryDetails, [name]: value });
  };

  const handle = () => {
    navigate("/hotels")
 }


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

          <TextField
          name="from"
          id="datetime-local"
          onChange={handleChange}
          label="Check-in"
          type="date"
          variant="outlined"
          defaultValue="2022-11-14"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <TextField
          name="to"
          id="datetime-local"
          onChange={handleChange}
          label="Check-out"
          type="date"
          variant="outlined"
          defaultValue="2022-11-16"
          InputLabelProps={{
            shrink: true,
          }}
        />

            <Box
            border="2px solid gray"
            width="200px"
            justifyContent={"center"}
            height="50px"
          >
            <HStack mt={"10px"} justifyContent="space-evenly" >
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
            <Checkbox colorScheme="green">
              <input type={"checkbox"} />
              Add to Flight
            </Checkbox>
            <Checkbox colorScheme="green">
              <input type={"checkbox"} />
              Add to Car
            </Checkbox>
          </Stack>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <Button  onClick={handle} className={styles.but} variant="solid">
            Search
          </Button>
      
        </div>
      </div>
    </>
  );
};
