import React, { useEffect, useState } from "react";
import "./book.css";
// import { TabList } from '@mui/lab';
// import {TabList} from "@chakra-ui/react";
import { Tabs,Button, TabList, Tab, useToast } from "@chakra-ui/react";

// import {Button ,Tabs, Tab } from "@material-ui/core"
import HotelDetails from "./HotelDetails";
import { useParams } from "react-router-dom";
 import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { HotelPageData } from "./hotel/HotelPageData";
import styles from "./hotel.module.css"
import RoomIcon from '@material-ui/icons/Room';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MapStaticHotel2 from "./MapStaticHotel2";
import AmenitiesCrad from "../AmenitiesCard/AmenitiesCrad";

const BookHotel = () => {
	const [Hotel, setHotel] = useState([]);
	// const toast = useToast();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://orbitz-mock-api.onrender.com/hotels/?=${id}`)
			.then((r) => r.json())
			.then((data) => {
				if (data[0]) {
					setHotel(data);
				} else return;
			});
	}, [setHotel]);

	
	const Rooms = () => {
		window.scrollTo({ top: 1160, behavior: "smooth" });
	};

	const services = () => {
		window.scrollTo({ top: 550, behavior: "smooth" });
	};

	const location = () => {
		window.scrollTo({ top: 400, behavior: "smooth" });
	};

	const bottom = () => {
		window.scrollTo({ top: 10000, behavior: "smooth" });
	};


	return (
		<>
		  <Navbar/>
			<div id="ProductParent">
				<br />
				<br />
				<div id="indProductImg">
					<div>
						<img src={Hotel[0] && Hotel[0].images[0].url} alt="hotel img1" />
					</div>
					<div className="childhotelImg">
						<div>
							<img src={Hotel[0] && Hotel[0].images[1].url} alt="hotel img2" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[2].url} alt="hotel img3" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[3].url} alt="hotel img4" />
						</div>
						<div>
							<img src={Hotel[0] && Hotel[0].images[4].url} alt="hotel img5" />
						</div>
					</div>
				</div>
				<Tabs width="80%" margin="auto" padding="5px 0px">
					<TabList id="Tabs" justifycontent="space-between">
						<div>
							<Tab className="productTabs" fontweight="600" color="#6b646b">
								Summary
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={Rooms}
							>
								Rooms
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={location}
							>
								Location
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={services}
							>
								Services
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={bottom}
							>
								Policies
							</Tab>
							<Tab
								className="productTabs"
								fontWeight="600"
								color="#6b646b"
								onClick={bottom}
							>
								Opinions
							</Tab>
						</div>

						<div style={{ marginRight: "10px" }}>
							<Button
								size="md"
								backgroundColor="#c83259"
								marginBottom="3px"
								borderRadius="3px"
								color="white"
								colorScheme="pink"
								onClick={Rooms}
							>
								Book a room
							</Button>
						</div>
					</TabList>
				</Tabs>
				<HotelDetails Hotel={Hotel} />
				<br />
			
                <HotelPageData />
              
			      <AmenitiesCrad/>
				
				<div className={styles.areaDiv}>
                        <div className={styles.subArea}>
                            <div>
                                <h1>About this Area</h1>
                                <h3>{"mumbai"}</h3>
                        <div className={styles.aboutArea}>
						<p style={{fontsize:"20px"}} >Taj Mahal Tower, Mumbai is located in Colaba, a neighborhood in Mumbai, and is in the city center and by the sea. Chhatrapati Shivaji Maharaj Museum and National Centre for the Performing Arts are cultural highlights, and some of the area's notable landmarks include Gateway of India and Flora Fountain. Looking to enjoy an event or a game? See what's going on at Wankhede Stadium, or consider JioGarden for a night out.</p></div>
                            </div>
                            <MapStaticHotel2/>
                        </div>
                        <div className={styles.subArea}>
                            <div>

                            </div>
                            <div className={styles.others}>
                                <div>
                                    <div className={styles.flexDisp}><RoomIcon/><h3>What's nearby</h3></div>
                                    <p>Front Bay - 1 min walk</p>
                                    <p>Gateway of India - 5 min walk</p>
                                    <p>Chhatrapati Shivaji Maharaj Museum - 9 min walk</p>
                                    <p>Mantralaya - 13 min walk</p>
                                    <p>Bombay Castle - 17 min walk</p>
                                </div>
                                <div>
                                    <div className={styles.flexDisp}><RestaurantMenuIcon/><h3>Restaurants</h3></div>
                                    <p>Shamiana – Pool-view restaurant. Open 24 hours.</p>
                                    <p>Aquarius – Poolside restaurant. Serves light fare.</p>
                                    <p>Wasabi by Morimoto – Serves lunch and dinner. Reservations required.</p>
                                    <p>Golden Dragon – Serves lunch and dinner. Reservations required.</p>
                                    <p>Souk – Serves lunch and dinner. Reservations required.</p>
                                </div>
                                <div>
                                    <div className={styles.flexDisp}><DriveEtaIcon/><h3>Getting around</h3></div>
                                    <p>Chhatrapati Shivaji Maharaj Terminus Railway Station - 3 min drive</p>
                                    <p>Grant Road Station - 7 min drive</p>
                                    <p>Chhatrapati Shivaji International Airport (BOM) - 55 min drive</p>
                                </div>
                            </div>
                        </div>
                    </div>
			</div>

           <Footer/>
		</>
	);
	
};

export default BookHotel;
