import React, { useEffect, useState } from 'react';
import './FilterPage.css';
import {useSearchParams} from "react-router-dom"

const FilteredPage = ({ hotel }) => {
    const [searchParams,setSearchParams]= useSearchParams();
    const [categories,setCategory]= useState(searchParams.getAll("city") || [])
    const [sortBy,SetSortBy]= useState(searchParams.getAll("price") || [])
       
    const handleFilter = (e) => {
      const option = e.target.value
      let newCategory = [...categories];
    
      if(newCategory.includes(option)){
        newCategory.splice(newCategory.indexOf(option),1)
      } else {
        newCategory.push(option)
      }
      setCategory(newCategory);
    }
    console.log(categories)
    
  
     useEffect(() => {
       const params = {};
       categories && (params.city=categories);
       sortBy && (params.sortBy=sortBy);
       setSearchParams(params)
     },[categories,setSearchParams,sortBy]);

     const handleSortBy = (e) =>{
         SetSortBy(e.target.value)
     }
    

    return (
        <div className='filter'>

            <div className='upper'>
                <iframe
                    title="masai"
                    src={`https://maps.google.com/maps?q=${hotel}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                ></iframe>
            </div>

            <div className='serachpro'>
                <h3>Search by Property name</h3>
                <input type="text" name="" id="" placeholder="e.g. Best Western" />
                {/* <hr /> */}
            </div>
         
            <h4>Filter by</h4>

            <div className='popular'>
                <h5>Filter By City </h5>
                <div>
                    <input type="checkbox" value={"Dehli"}
                      onChange={handleFilter}
                     defaultValue={categories.includes("Dehli")}
                     />
                    Delhi
                </div>
                <div>
                    <input type="checkbox"  value={"Lucknow"}
                      onChange={handleFilter}
                     defaultValue={categories.includes("Lucknow")} />
                    Lucknow
                </div>
                <div>
                    <input type="checkbox" value={"Bangalore"}
                      onChange={handleFilter}
                     defaultValue={categories.includes("Bangalore")}/>
                    Bangalore
                </div>
                <div>
                    <input type="checkbox" value={"Hyderabad"}
                      onChange={handleFilter}
                     defaultValue={categories.includes("Hyderabad")}/>
                    Hyderabad
                </div>
                <div>
                    <input type="checkbox"  value={"Pune"}
                      onChange={handleFilter}
                     defaultValue={categories.includes("Pune")} />
                    Pune
                </div>
            </div>

            <div className='pernight'>
                <h5>Price per night</h5>
                <p>$0</p>
                <p>$300+</p>
                <input type="range" name="" id="" />
            </div>

            <div className='guest' onChange={handleSortBy}>
                <h5>Guest rating</h5>
                <div>
                    <input type="radio"
                      value={"asc"}
                      name="sortBy"
                      defaultChecked={sortBy==="asc"}
                     />
                Low To High
                </div>
                <div>
                    <input type="radio"  value={"desc"}
                      name="sortBy"
                      defaultChecked={sortBy==="desc"} />
                    {/* Low To High */}
                    High To Low
                </div>
                
            </div>

            <div className='guest'>
                <h5>Guest rating</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Any
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Wonderful 4.5+
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Very good 4+
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Good 3.5+
                </div>
            </div>

            <div className='guest' >
                <h5>Star rating</h5>
                <button>1 start</button>
                <button>2 star</button>
                <button>3 star</button>
                <button>4 star</button>
                <button>5 star</button>
            </div>

            <div>
                <h5>Payment Type</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Fully refundable
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Reserve now, pay later
                </div>
            </div>
            <div className='guest'>
                <h5>Property type</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Palace
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Ryokan
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Bed & breakfast
                </div>
            </div>

            <div className='guest'>
                <h5>Accessibility</h5>
                <div><input type="checkbox" name="" id="" />Wheelchair-accessible parking</div>
                <div><input type="checkbox" name="" id="" />Elevator</div>
                <div><input type="checkbox" name="" id="" />Accessible bathroom</div>
            </div>
        </div>
    );
};

export default FilteredPage;