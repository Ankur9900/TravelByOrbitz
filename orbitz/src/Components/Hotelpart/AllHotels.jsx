import React from 'react'
import SingleHotel from '../singlehotel/SingleHote'
import styles from './AllHotel.module.css';



const AllHotels = ({data}) => {

    
    return (
        <div>
            <div>
                <div>
                    <p>count of hotel</p>
                    <b>See how we pick our recommended properties</b>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Recommended</option>
                        <option value="">Price</option>
                        <option value="">star rating</option>
                    </select>
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