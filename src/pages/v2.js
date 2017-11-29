import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import screenRec001 from '../assets/video/screenRec001.mp4'
import screenRec002 from '../assets/video/screenRec002.mp4'
import screenRec003 from '../assets/video/screenRec003.mp4'
import screenRec004 from '../assets/video/screenRec004.mp4'

const baseFont = "2.4rem";
const green = "#00DAAA";

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  background-color: ${green};

`

const GridContainer = styled.div`
    min-height: 2000px;
  width 100%;
  margin: auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns:
    1fr
    1fr
    [device-left] 100px
    100px
    100px
    [device-middle] 100px
    [right-side] 1fr
    1fr;
  grid-auto-rows: minmax(85px, max-content);
  grid-gap: 0.5rem;
  z-index: 1;
`

const GridBlock = styled.div`
grid-row: ${props => props.row} ${props => props.height ? '/' + (parseInt(props.height) + parseInt(props.row)) : " "};
grid-column: ${props => props.col} ${props => props.width ? '/' + (parseInt(props.col) + parseInt(props.width)) : " "};
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  border: ${props => props.border ? '2px solid ' + props.border : 'none'};

  z-index: ${props => props.above ? "2" : "0"};
  box-shadow: ${props => props.above ? "0px 10px 40px rgba(0,0,0,0.1);" : "none"};
`

const BodyText = styled.div`
  display: flex;
  align-items: center;

  color: ${props => props.color ? props.color : "white"};
  margin: 20px;

  p {
    font-size: ${baseFont};
    line-height: 1.2;
    margin: 0;
  }

  h1 {
    color: ${props => props.color ? props.color : "white"};
    margin: 0;
  }
`

const PhoneBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

const VideoContainer = styled.div`
  background-color: rgba(255,255,255,0.8);
  padding: 64px 6px;
  border-radius: 33px;

  box-shadow: inset 0 2px 5px 1px rgba(255,255,255,0.6),
    inset 0 -4px 12px 0 rgba(170, 180, 204, 0.49),
    0px 10px 40px rgba(0,0,0,0.2);
`

const Video = styled.video`
  width: 375px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px rgba(80,80,80, 0.2);
`

const Title = styled.h1`
  font-size: ${baseFont};
  font-weight: normal;
  color: white;

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      opacity: 0.75;
      text-decoration: none;
    }
  }
`

const Background = styled.div`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100vh;
`

const numbers = [1,2,3,4,5,6,7,8,9,10];


const V2Page = () => (
  <Container>

    <Background>
      {numbers.map((c) => {
        let size = 14;
        let cStyle = {
          backgroundColor: "white",
          opacity: 0.25-c/40,
          borderRadius: "50%",
          width: c*size + "vh",
          height: c*size + "vh",
          position: "absolute",
          left: `calc(50% - ${c*size/2}vh)`,
          top: 50 - c*size/2 + "vh"
        };
        return <div key={c} style={cStyle}/>
      })}
    </Background>

    <GridContainer>

      <GridBlock row="1" col="3">
        <VideoContainer>
          <Video autoPlay loop>
            <source src={screenRec001} type="video/mp4"/>
          </Video>
        </VideoContainer>
      </GridBlock>

      <GridBlock row="3" col="1" width="2" height="1" border="white">
        <BodyText>
          <Title>Daze</Title>
        </BodyText>
      </GridBlock>

      <GridBlock row="5" col="7" width="1" border="white"/>

      <GridBlock row="4" col="1" width="2" height="3" border="white">
        <BodyText>
          <p>Introspection for a better everyday.</p>
        </BodyText>
      </GridBlock>

      <GridBlock row="7" col="1" width="2" height="1" bg="white">
        <BodyText color={green}>
          <Title>Install Now</Title>
        </BodyText>
      </GridBlock>





    </GridContainer>


  </Container>
)

export default V2Page
