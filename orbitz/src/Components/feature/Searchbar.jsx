import React  from "react";
import styles from "./First.module.css";
import { Tabs,  TabPanels,  TabPanel } from "@chakra-ui/react";
import { Stay } from "./Stay";
import {MdFlight} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import {FaCarSide} from "react-icons/fa"
import {RiRedPacketFill} from "react-icons/ri"
import {IoMdOptions} from "react-icons/io"
import {GiCruiser} from "react-icons/gi"
import "./stay.css"

export const Searchbar = () => {
  return (
    <div className={styles.home}>
      <div className={styles.containerSearchBox}>
        <Tabs>
          <div className={styles.Flight} mt="50px"   style={{ justifycontent: "center" }}>
           <div className={styles.flat}> 
           <div >
            <AiFillHome className={styles.icon} />
            <h3 className={styles.fir} border={"none"} width={"100px"} height="50px">Stay</h3>
            </div>
            <div>
            <MdFlight  className={styles.icon}/>
            <h3 border={"none"} width={"100px"} height="50px">Flight</h3>
            </div>
            <div>
            <FaCarSide className={styles.icon} />
            <h3 border={"none"} width={"100px"} height="50px">Cars</h3>
            </div>
            <div>
            <RiRedPacketFill className={styles.icon} />
            <h3 border={"none"} width={"100px"} height="50px">Packages</h3>
            </div>
            <div>
            <IoMdOptions className={styles.icon} />
            <h3 border={"none"} width={"100px"} height="50px">Things To do</h3>
            </div>
            <div>
            <GiCruiser className={styles.icon} />
            <h3 border={"none"} width={"100px"} height="50px">Crusises</h3>
            </div>
            
           </div>
           
        </div>

          <TabPanels>
            <TabPanel>
              <Stay />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
