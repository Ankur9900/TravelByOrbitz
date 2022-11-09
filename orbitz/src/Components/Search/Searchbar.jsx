import styles from "./Home.module.css";
import { Box, Flex, makeStlyes,Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
import {MdFlight} from "react-icons/md"
import { SearchComp } from "./SearchComp";

function Searchbar() {
  return (
    <div className={styles.home}>
      <Box className={styles.bid}>
        <Box className={styles.tabs}>
         <Flex> 
             <Tabs m="auto" mt="20px">
            <TabList fontSize={18} p="8" mg="20px" gap={16} m="auto">
              <Tab fontSize={18} icon={<MdFlight />}  w="120px" bg="none" border="none" mt="12px"  >Stays</Tab>
              <Tab fontSize={18}  w="120px" bg="none" border="none" mt="12px" >Flight</Tab>
              <Tab fontSize={18}  w="120px" bg="none" border="none" mt="12px">Cars</Tab>
              <Tab fontSize={18}  w="120px" bg="none" border="none" mt="12px">Package</Tab>
              <Tab fontSize={18}  w="120px" bg="none" border="none" mt="12px" >Things To do</Tab>
              <Tab fontSize={18}  w="120px" bg="none"  border="none" mt="12px">Cruises</Tab>
            </TabList>
            <TabPanels m={"auto"} textAlign="center">
              <TabPanel >
                   <div> <SearchComp/> </div>
              </TabPanel>
              <TabPanel>2
              <p>Click the tabs or pull the slider around</p>
              </TabPanel>
              <TabPanel>3
              <p>Click the tabs or pull the slider around</p>
              </TabPanel>
              <TabPanel>4
              <p>Click the tabs or pull the slider around</p>
              </TabPanel>
              <TabPanel>5
              <p>Click the tabs or pull the slider around</p>
              </TabPanel>
              <TabPanel>6
              <p>Click the tabs or pull the slider around</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
       
          </Flex>
        </Box>
      </Box>
    </div>
  );
  
}


export default Searchbar;
