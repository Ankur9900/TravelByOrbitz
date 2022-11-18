import { Heading } from "@chakra-ui/react";
import React from "react";
import "./book.css";
import StarRating from "./StarRating";
import VipaccessCard from "./Vipaccesscard";
import { FaSwimmingPool } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { SiAirchina } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import {FaParking} from "react-icons/fa"
import { GiWindowBars } from "react-icons/gi"
import {SiHomeassistant} from "react-icons/si"

const HotelDetails = ({ Hotel }) => {
  return (
    <>
      <div id="HotelDetails">
        <div>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
              padding: "3px 8px",
              fontSize: "12px",
              fontWeight: "600",
              borderRadius: "5px",
            }}
          >
            VIP Access
          </div>
          <Heading fontSize="28" marginTop="10px">
            {Hotel[0] && Hotel[0].name}
          </Heading>

          <StarRating stars={Hotel[0] ? Hotel[0].rating : 4.3} />

          <br />
          <Heading size="md">
            {Hotel[0] ? Hotel[0].rating : 4.3}/5 Very good
          </Heading>

          <p
            style={{ fontSize: "14px", marginTop: "20px", marginBottom: "3px" }}
          >
            This Property was rated {Hotel[0] ? Hotel[0].rating : 4.3} by 5 for
            its cleanliness and services
          </p>
          <p
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.cursor = "pointer";
              return;
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";

              return;
            }}
            style={{ color: "teal" }}
          >
            See {Math.round(Math.random() * 100000)} reviews {">"}
          </p>
          <br />
          <Heading size="md">Most requested services</Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
              padding: "20px 0px",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
                <FaSwimmingPool />{" "}
              </span>{" "}
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>
               SwimmingPool
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
                <SiAirchina />
              </span>
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>
                <SiAirchina />
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
                <FaWifi />
              </span>
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>
                 wifi
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
               <GiWindowBars />
              </span>
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>Spa</p>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
                <FaParking />
              </span>
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>
                Parking included
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="material-icons"
                style={{ fontSize: "25px", color: "#6b646b" }}
              >
               <SiHomeassistant />
              </span>
              <p style={{ paddingLeft: "10px", color: "#6b646b" }}>
                Restaurant
              </p>
            </div>
          </div>

          <p
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.cursor = "pointer";
              return;
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";

              return;
            }}
            style={{ color: "teal" }}
          >
            See all {">"}
          </p>

          <br />
        </div>

        <div>
          <div>
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker-orb.png%7C36.12366,-115.171029&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=vQcmgnQl1elnF6lRJKk71l3T91A="
              alt=""
              width="95%"
              style={{ borderRadius: "10px" }}
            />
            <p style={{ color: "#6b646b" }}>{Hotel[0] && Hotel[0].address}</p>
            <p
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
                e.target.style.cursor = "pointer";
                return;
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none";

                return;
              }}
              style={{ color: "teal" }}
            >
              View on map {">"}
            </p>
            <br />
            <Heading size="md">What's in the area</Heading>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0px 7px",
            }}
          >
            <span
              className="material-icons"
              style={{ fontSize: "22px", color: "#6b646b" }}
            >
              <MdLocationOn />
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "0px 40px",
                marginLeft: "20px",
              }}
            >
              <div>Casino The Venetian</div>
              <div>A 4-minute walk away</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span
              className="material-icons"
              style={{ fontSize: "22px", color: "#6b646b" }}
            >
              <MdLocationOn />
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "0px 40px",
                marginLeft: "20px",
              }}
            >
              <div>Casino The Venetian</div>
              <div>A 4-minute walk away</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              className="material-icons"
              style={{ fontSize: "22px", color: "#6b646b" }}
            >
              <MdLocationOn />
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "0px 40px",
                marginLeft: "20px",
              }}
            >
              <div>Casino The Venetian</div>
              <div>A 4-minute walk away</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <VipaccessCard />
    </>
  );
};

export default HotelDetails;
