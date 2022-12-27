import React from 'react'
import SingleHotel from '../singlehotel/SingleHote'
import styles from './AllHotel.module.css';


const AllHotels = ({data}) => {

    
    return (
        <div className={styles.hoteldata}>
            <div>
                <div>
                    {/* <p>count of hotel</p> */}
                    <b>See how we pick our recommended properties</b>
                </div>

            </div>
            <div>
                {data?.map(el => {
                    return <SingleHotel key={el.id}{...el} id={el.id} />
                })}
            </div>
        </div>
    )
}

export default AllHotels