import React from 'react'
import styled from 'styled-components'

function Section() {

  const img  = [
    {
       url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
    },{
       url:"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"
    },
    {
       url:"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"
    }
]


  return (
     <MainCont>
            <Cont>
                <Heading>
                </Heading>
                <ImgCont>
                    {img.map((i) => (
                    <CardCont>
                            <ImgCardCont>
                                <img src={i.url} alt="" />
                                {/* <Title><h2>{i.title}</h2></Title> */}
                            </ImgCardCont>
                            <TextCont>
                                <p>{i.p}</p>
                            </TextCont>
                    </CardCont>
                ))}
                </ImgCont>
            </Cont>
        </MainCont>
  )
}

export default Section

const MainCont = styled.div`
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
`
const Cont = styled.div`
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
`
const Heading = styled.div`
    color: #1f1f1f;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    h3{
        color: #1f1f1f;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2rem;
        margin:0;
        //padding-bottom: 0.5rem;
    }
`
const ImgCont = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border:1px solid gray;
    img{
        width: 100%;
        height:300px
        filter: brightness(60%);
        
    }
`
const CardCont = styled.div`
padding: 0.75rem;
display: flex;
flex-direction: column;
justify-content: start;
`
const ImgCardCont = styled.div`
    position: relative;
`
const Title = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    padding: 2.75rem 0.75rem 0.5rem;
    h2{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.375rem;
        color: #fff;
    }
`
const TextCont = styled.div`
padding-left: 0.75rem;
padding-bottom: 0.75rem;
margin-top: -0.3rem;
background-color: #ffffff;
p{
    color: #616161;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3em;
}

`
