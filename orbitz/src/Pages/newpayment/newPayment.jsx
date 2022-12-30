import React from "react";
import "./phoneInput.css";
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Box from "@mui/material/Box";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { InputLabel, TextField } from "@mui/material";
import { AuthContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import swal from "sweetalert";
import "./payment.css";
import Navbar from './../../Components/Navbar/Navbar';

export const NewPayment = () => {
  const navigate = useNavigate();
  const { setUpCaptcha } = useContext(AuthContext);

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [temp, setTemp] = useState(false);
  const [loading, setLoading] = useState(false);
  const Razorpay = useRazorpay();
  const handlePayment = () => {
    const order = {
      currency: "INR",
      receipt: "qwsaq1",
    };
    const options = {
      key: "rzp_test_sYtoH5zOp7BCJ8",
      amount: 1000 * 100,
      currency: "INR",
      name: "orbitz.com",
      image: "https://i.ibb.co/344xRpF/byme-1.jpg",
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Order placed successfully",
          text: "Enjoy your day",
          icon: "success",
        });
        navigate("/");
      },
      prefill: {
        name: "name",
        email: "email",
        contact: "number",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }
    try {
      const res = await setUpCaptcha(number);
      console.log(res);
      setResult(res);

      setTemp(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const varifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    setLoading(true);
    if (otp === "" || otp === null) return;
    try {
      setLoading(true);
      setError("");
      await result.confirm(otp);
      handlePayment();
      // handlePayment();

      setLoading(false);
    } catch (err) {
      setError(err.mesage);
      setLoading(false);
    }
  };

  const skeletonFunction = () => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  if (loading) {
    return (
      <>
      
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          margin={"auto"}
          size="xl"
          position={"absolute"}
          ml="50%"
          mt="25%"
        />
        <Skeleton height={"100vh"} position={"relative"}></Skeleton>
      </>
    );
  } else {
    return (
      <>
      <Navbar/>
        <Box
          className="form"
          sx={{
            width: 400,
            height: 620,
            backgroundColor: "white",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <form
            onSubmit={handleOtpSubmit}
            style={{ display: !temp ? "block" : "none" }}
          >
            <br />
            <br />
            <h1> USER DETAILS</h1>
            <Box className="userdetail">
            {error && (
                <Alert status="error">
                  <AlertIcon className="alert" />
                  {error}
                </Alert>
              )}
            <TextField
              className="text"
              helperText="Please enter your name"
              label="Name"
              id="name"
              name="name"
              type="name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
              helperText=" Please enter your email"
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <br />
            <br />
            <TextField
              helperText="Please enter your Adress"
              id="address"
              name="address"
              type="address"
              onChange={(e) => setAddress(e.target.value)}
              label="Adresss"
            />
            <br />
            <br />
            <Box>
                <FormControl isRequired>
                  <FormLabel>Mobile No.</FormLabel>
                  <PhoneInput
                    width="200px"
                    defaultCountry="IN"
                    value={number}
                    onChange={setNumber}
                    placeholder="Enter Phone Number"
                  />
                </FormControl>
              </Box>

            </Box>
            <div className="button">
              <Link to="/">
                <div>
                  <button className="cancel"> Cancel</button>
                </div>
              </Link>
              <div>
                <button className="Send">Send OTP</button>
              </div>
            </div>
            <Box id="recaptcha-container"></Box>
          </form>

          <br />
          <br />
          <br />
          <br />

          <form className="enterotp"
            onSubmit={varifyOTP}
            style={{ display: temp ? "block" : "none" }}
          >
            <FormControl isRequired>
            <h1>Enter OTP</h1>
              <Heading textAlign={"center"} mb={"6"}>
                {/* Enter OTP */}
              </Heading>
              {error && (
                <Alert status="error">
                  <AlertIcon className="alert" />
                  {error}
                </Alert>
              )}
              
              <Box className="box">
                <FormLabel> </FormLabel>
                <PinInput className="pininput"  onChange={(e) => setOtp(e)} otp>
                  <PinInputField className="input" />
                  <PinInputField className="input" />
                  <PinInputField className="input" />
                  <PinInputField className="input" />
                  <PinInputField className="input" />
                  <PinInputField className="input" />
                  <br/>
                </PinInput>
              </Box>

            </FormControl>

            <Box
              mt={6}
              w={"100%"}
              textAlign={"center"}
              display={"flex"}
              gap={"2rem"}
              justifyContent={"center"}
            >
              <Button
                onClick={skeletonFunction}
                mt={4}
                colorScheme="red"
                type="submit"
                className="cancel"
              >
                Cancel
              </Button>

              <Button className="Send" mt={4} colorScheme="teal" type="submit">
                Verify OTP
              </Button>
            </Box>
          </form>
        </Box>
      </>
    );
  }
};
