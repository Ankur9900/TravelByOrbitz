import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import styles from './Hotel.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import FilteredPage from '../Components/Hotelpart/FilterPage';
import AllHotels from '../Components/Hotelpart/AllHotels';
import BelowPart from '../Components/Hotelpart/BelowPart'
import { useDispatch } from 'react-redux';

import { fetch_hotel_data } from '../Redux/Hotel/action';
import { useSelector } from 'react-redux';

const Hotel = () => {
    const { id } = useParams();

    const dispatch = useDispatch()
    const data = useSelector(state => state.hotel.data)
     console.log(data)


    useEffect(() => {
        dispatch(fetch_hotel_data(id))
    }, [dispatch, id])


    return (
  <div className={styles.Bigbox}>
            <Navbar />
            <div style={{ height: "40px", background: "#f5f5f5" }}></div>
            <div>
                <div className={styles.hotel_container}>
                    <div className={styles.upper_div1}>
                        <div>
                            <MdLocationOn fontSize={'28px'} />
                            <input type="text" defaultValue={id} />
                        </div>
                        <div>
                            <div>
                                <div>check in</div>
                                <input type="date" defaultValue="2018-07-22" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>check-out</div>
                                <input type="date" defaultValue="2018-07-23" />
                            </div>
                        </div>

                   {/* ------------------------ */}

                        <div  className={styles.trevel}>
                            <div>
                                <BsFillPersonFill fontSize={'28px'} />
                            </div>
                            <div>
                                <div>Travelers</div>
                                <p>
                                    {1} room, {2} traveler
                                </p>
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
                            <AllHotels hotel={id} data={data } />
                        </div>
                    </div>

                </div>
            </div>

            <BelowPart />
 </div>
    );
};

export default Hotel;