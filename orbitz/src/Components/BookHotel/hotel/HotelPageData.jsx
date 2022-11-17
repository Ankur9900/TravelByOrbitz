import React, { useEffect } from "react";

import styles from "./hotelPageData.module.css";
import {useDispatch, useSelector} from "react-redux"
import RoomCard from "./RoomCard";
import { fetch_hotel_data, gethotel } from "../../../Redux/Hotel/action";

export const HotelPageData = () => {
   const dispatch = useDispatch()
   const hotel = useSelector((state) => state.hotel.data)
   console.log(hotel.price)

   useEffect(()=>{
     dispatch(fetch_hotel_data())
   },[dispatch])

  return (
    <>   
      <div className={styles.page}> 
         <div className={styles.roomDiv}>
        <h1>Choose your Room</h1>
        <div className={styles.rooms}>
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/f45dec6a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            name={"Delux Room"}
            price={hotel.price} deals={hotel.delas} id={1}
          />
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/7841963d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            name={"Premier Room"}
            price={hotel.price} deals={hotel.delas} id={2}
          />
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/81732015.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            price={hotel.price} deals={hotel.delas} id={3}
            name={"Superior Suite"}
          />
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/7fcbfc55.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            name={"Super Delux Suite"}
            price={hotel.price} deals={hotel.delas} id={6}
          />
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/26859605.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            name={"Executive Suite"}
            price={hotel.price} deals={hotel.delas} id={4}
          />
          <RoomCard
            img={
              "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/3fd60858.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            }
            name={"Corporate Suite"}
            price={hotel.price} deals={hotel.delas} id={5}
          />
        </div>
      </div>

      </div>
    </>
  );

  
};
