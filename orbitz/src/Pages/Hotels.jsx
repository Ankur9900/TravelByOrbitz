import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./Hotel.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useParams } from "react-router-dom";
import FilteredPage from "../Components/Hotelpart/FilterPage";
import AllHotels from "../Components/Hotelpart/AllHotels";
import BelowPart from "../Components/Hotelpart/BelowPart";
import { useDispatch } from "react-redux";
import { makeStyles, TextField, MenuItem } from "@mui/material";

import { fetch_hotel_data } from "../Redux/Hotel/action";
import { useSelector } from "react-redux";

const Hotel = () => {
  const [page, SetPage] = useState(1)
  const { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.hotel.data);
  console.log("data",data);

  useEffect(() => {
    dispatch(fetch_hotel_data(page,id));

  }, [dispatch,id,page]);

  return (
    <div className={styles.Bigbox}>
      <Navbar />
      <div style={{ height: "40px", background: "#f5f5f5" }}></div>
      <div>
        <div className={styles.hotel_container}>
          <div className={styles.upper_div1}>
            <div>
              <MdLocationOn fontSize={"28px"} />
              <input type="text" defaultValue={id} />
            </div>
            <div>
              <div>
                <TextField
                  name="from"
                  id="datetime-local"
                
                  label="Check-in"
                  type="date"
                //   variant="outlined"
                  defaultValue="2022-11-14"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <TextField
                  name="to"
                  id="datetime-local"
              
                  label="Check-out"
                  type="date"
                //   variant="outlined"
                  defaultValue="2022-11-16"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>

            {/* ------------------------ */}

            <div className={styles.trevel}>
              <div>
                <BsFillPersonFill fontSize={"28px"} />
              </div>
              <div>
                <div>Travelers</div>
                {/* <p>
                  {1} room, {2} traveler
                </p> */}
              </div>
            </div>

            {/* ---------------- */}

            <div className={styles.stays_saerch}>
              <button>Search</button>
            </div>
          </div>

          <div className={styles.bodypart}>
            <div>
              <FilteredPage hotel={id} />
            </div>
            <div>
              <AllHotels hotel={id} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div style={{textalign:"center", justifycontent:"center" }}> 
     <button  onClick={()=>SetPage(prev=> prev-1)}>prev</button>
     <button>{page}</button>
     <button  onClick={()=>SetPage(prev=> prev+1) }>Next</button> 
     </div>
      <BelowPart />
    </div>
  );
  
};

export default Hotel;
