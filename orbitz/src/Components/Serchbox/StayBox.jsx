import { Box, Input,Spacer } from "@chakra-ui/react";
import styles from "./serch.module.css";

export const StayBox = () => {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.inp}>
        <input placeholder="Going to" className={styles.inpuy1} />
           
           <div className={styles.inpuy1}>
            <label>Check In</label>
           <input
            placeholder="Select Date and Time"
            type="date"
          />
           </div>
           <div className={styles.inpuy1}>
            <label>Check out</label>
           <input
            placeholder="Select Date and Time"
            type="date"
          />
           </div>
          <div className={styles.inpuy1}>
          <input placeholder="Travelers" />

          </div>

        </div>

      </div>
    </>
  );
};
