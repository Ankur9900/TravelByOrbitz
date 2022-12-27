import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./Hotel.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useLocation, useSearchParams,useParams } from "react-router-dom";
import FilteredPage from "../Components/Hotelpart/FilterPage";
import AllHotels from "../Components/Hotelpart/AllHotels";
import BelowPart from "../Components/Hotelpart/BelowPart";
import { useDispatch } from "react-redux";
import {TextField } from "@mui/material";
import { fetch_hotel_data } from "../Redux/Hotel/action";
import { useSelector } from "react-redux";

const Hotel = () => {
  const [page, SetPage] = useState(1)
  const [sortBy,SetSortBy] = useState("asc")
  const [searchParams]= useSearchParams()
  const { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.hotel.data);
  console.log("data",data)

  // useEffect(() => {
  //     dispatch(fetch_hotel_data(id));
  //   }, [dispatch,id]);
  
  useEffect(()=> {
    if(location || data.length===0){
     const  city = searchParams.getAll("city");
      const queryParams = {
         params : {
           city:city,
           _sort:searchParams.get("sortBy") && "price",
           _order:searchParams.get("sortBy"),
          //  _limit:searchParams.get("12") && "page"
         }
      }
      dispatch(fetch_hotel_data(queryParams))
    }
    },[dispatch, location.search])
    


  // useEffect(() => {
  //   dispatch(fetch_hotel_data({page, sortBy}));
  // }, [dispatch,page,sortBy]);

  return (
    <div className={styles.Bigbox}>
      <Navbar />
      <div style={{ height: "40px", background: "#f5f5f5" }}></div>
     
      <div>
        <div className={styles.hotel_container}>
          <div className={styles.upper_div1}>
            <div>
              <MdLocationOn fontsize={"28px"} />
              <input type="text" defaultValue={id} />
            </div>
            <div>
              <div>
                <TextField
                  name="from"
                  id="datetime-local"
                  label="Check-in"
                  type="date"
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
                <BsFillPersonFill fontsize={"28px"} />
              </div>
              <div>
                <div>Travelers</div>
              </div>
            </div>

        
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
      <div className={styles.pagniation}> 
     <button disabled={page===1}  onClick={()=>SetPage(prev=> prev-1)}>prev</button>
     <button>{page}</button>
     <button  onClick={()=>SetPage(prev=> prev+1) }>Next</button> 
     </div>
      <BelowPart />
    </div>
  );
  
};

export default Hotel;
