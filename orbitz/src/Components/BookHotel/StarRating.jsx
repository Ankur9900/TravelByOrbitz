import React, { useRef } from "react";

import "./hotel.css"
import {AiFillStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"

const StarRating = ({ stars}) => {
	const remainder = stars % 1;
	const Rating = useRef(new Array(Math.floor(stars)).fill(1));
	

	return (
		<div className="star">
			{Rating.current.map((ele, indx) => {
				if (indx + 1 === Rating.current.length && remainder !== 0)
					return (
						<span  key={Math.random()}>
							<span
								className="material-icons"
								style={{ fontSize: "22px", color: "#6b646b" }}
							>
							<AiFillStar />
							</span>
							<span
								className="material-icons"
								style={{ fontSize: "22px", color: "#6b646b" }}
							>
								<BsStarHalf/>
							</span>
						</span>
					);
				else
					return (
						<span
							key={Math.random()}
							className="material-icons"
							style={{ fontSize: "22px", color: "#6b646b" }}
						>
						<AiFillStar />
						
						</span>
					);
			})}
		</div>
	);
};

export default StarRating;
