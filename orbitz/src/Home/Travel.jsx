import React from 'react'
import styled from 'styled-components'

const img =
    [
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium",
            title: "last-minutes deals",
            p: "Getaway today.",
            id:1,
        },
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium",
            title: "All - inclusive resorts",
            p: "Enjoy sun and fun",
            id:2,
        },
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium",
            title: "Insider Prices",
            p: "Members get rewareded",
            id:3,
        },
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium",
            title: "Jet ans reset",
            p: "Fly some where beachy and warm",
            id:4,
        }
    ]


export default function Travel() {

    return (
        <MainCont>
            <Cont>
                <Heading>
                    <h3>Featured Offers </h3>
                </Heading>
                <ImgCont>
                    {img.map((i) => (
                    <CardCont key={i.id}>
                            <ImgCardCont>
                                <img src={i.url} alt="travel" key={i.id}/>
                                <Title><h2>{i.title}</h2></Title>
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

const MainCont = styled.div`
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    ${'' /* border:1px solid black; */}
    width:80%
    margin:auto;
    box-shadow :rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Cont = styled.div`
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
    width:80%
    margin:auto
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
         float:left
    }
`
const ImgCont = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    img{
        width: 100%;
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
    ${'' /* margin-bottom:30px; */}
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
margin-top: -1.3rem;
background-color: #ffffff;
p{
    color: #616161;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3em;
}`
