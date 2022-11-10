import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  MenuItem,
  MenuItemOption,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./stay.css";
import { Flex, Box } from "@chakra-ui/react";
import styles from "./style.module.css";
import { FaUserAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export const Stay = () => {
  const places = [
    {
      label: "Bangalore",
      value: "Bangalore",
      id: 1,
    },
    {
      label: "Delhi",
      value: "Delhi",
      id: 2,
    },
    {
      label: "Pune",
      value: "Pune",
      id: 3,
    },
    {
      label: "Hyderabad",
      value: "Hyderabad",
      id: 4,
    },
    {
      label: "Mumbai",
      value: "Mumbai",
      id: 5,
    },
  ];

  return (
    <>
      <div className={styles.box}>
        <div className={styles.Input}>
          <HStack
            textAlign="center"
            justifyItems={"center"}
            // border="1px solid gray"
          >
            <Input
              placeholder="Where You want to go"
              textAlign={"center"}
              width={"200px"}
              height="50px"
              fontSize={14}
              fontWeight="500"
            />
          </HStack>
          <Input
            placeholder="Select Date and Time"
            label="Check-in"
            size="md"
            type="date"
            variant="outlined"
            defaultValue="2022-11-14"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Input
            placeholder="Select Date and Time"
            label="Check-out"
            size="md"
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
            <HStack mt={"10px"} justifyItems={"end"}>
              <FaUserAlt justifyContent="start" />
              <Text ml={10} fontSize={14} textAlign="end" fontWeight="500">
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
          <Button className={styles.but} variant="solid">
            Search
          </Button>
        </div>
      </div>
    </>
  );
};
