import React, { useState } from "react";
import { Button, Checkbox, HStack, Input, Stack, Text, Box } from "@chakra-ui/react";
import "./stay.css";

import styles from "./style.module.css";
import { FaUserAlt } from "react-icons/fa";
import { TextField, MenuItem } from "@mui/material"

import { useNavigate } from "react-router-dom";

export const Stay = () => {

  const navigate = useNavigate()
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
           
            >
              <input type={"checkbox"} />
              Add to Flight
            </Checkbox>
            <Checkbox colorScheme="green"
            
            >
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
  )

}
