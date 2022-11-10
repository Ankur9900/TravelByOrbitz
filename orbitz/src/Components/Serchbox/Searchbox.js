import React from 'react'
import styled from 'styled-components'
import { StayBox } from './StayBox'


export const Searchbox = () => {


  return (
    <MainCont>
        <Deatail>
             <Upper>
             <Formde> 
                <Texty>Stay</Texty>
                <Texty>Flight</Texty>
                <Texty>Cars</Texty>
                <Texty>Package</Texty>
                <Texty>Things to do</Texty>
                <Texty>Cruises</Texty>
              </Formde>
             </Upper>
           
           {/* --------------- */}
              <Lower>
                   <InputBox>
                         <StayBox />
                   </InputBox>
              </Lower>
        </Deatail>

    </MainCont>
  )
}

const MainCont = styled.div`
    width: 100%;
    height:500px;
    border:1px solid  black;
    background-image: url("https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh");
    background-size: cover;
    background-position: bottom;
    ${'' /* background-repeat: no-repeat; */}
    ${'' /* position: relative; */}
  
`
const Deatail = styled.div`
   width:90%;
   border:1px solid yellow;
   height:400px;
   text-Align:center;
   margin:auto;
   margin-top:50px;
   background:#fff;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
   gap:20px;
`

const  Upper = styled.div`
 border:1px solid red;
 width: 80%;
  height:100px;
  margin:auto;
  margin-top:20px;
  border-bottom:1px solid gray; 
  background: #FFFFFF;
    list-style: none;
    min-block-size: 2.75rem;
    position: relative;
`
const Formde = styled.div`
 ${'' /* border: 1px solid red; */}
 display:flex;
  justify-content:center;
  justify-content:space-evenly !important;
   font-size:20px;
   font-weight:500;
   color:gray;
   border-bottom:1px solid gray;
   gap:10px;
   height:100px
`
const Texty = styled.div`
 border:1px solid blue;
 margin:auto;
 text-Align:center;
`
// ----------------

const Lower = styled.div`
border:1px solid blue;
 width: 80%;
  height:200px;
  margin:auto;
  margin-top:30px;
`

const InputBox = styled.div`
 border:1px solid red;
 width:90%;
 height:200px;
 margin:auto

`

