import React from 'react'
import styled from 'styled-components'
import  travel1 from "../../img/travel1.jpg"
import  travel2 from "../../img/travel2.jpg"
const Travelling = () => {

    const img =
    [
        {
            url: travel1,
            title: "National Parks",
            p: "There's plenty to keep you busy.",
            b:"Learn more"
        },
        {
            url:travel2,
            title: "The perfect road trip",
            p: "Find the adventures for every season.",
            b:"Read more",
        },
    ]


  return (
    <MainCont>
    <Cont>
        <Heading>
            <h3>Travelling tips</h3>
        </Heading>
        <ImgCont>
            {img.map((i) => (
            <CardCont>
                    <ImgCardCont>
                        <img src={i.url} alt="" />
                        <Title><h2>{i.title}</h2></Title>
                        <Button>{i.b}</Button>
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

export default Travelling


const MainCont = styled.div`
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    border:1px solid black;
    width:80%
    margin:auto;
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
}`

const Button = styled.div `
 border:1px solid gray;
 width:30%;
 margin:auto;
`
