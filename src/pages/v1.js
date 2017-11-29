import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import screenRec001 from '../assets/video/screenRec001.mp4'
import screenRec002 from '../assets/video/screenRec002.mp4'
import screenRec003 from '../assets/video/screenRec003.mp4'
import screenRec004 from '../assets/video/screenRec004.mp4'

const baseFont = "2.4rem";
const green = "#00DAAA";

const Container = styled.div`
  max-width: 1400px;
  padding: 4rem;
  margin: auto;

  display: grid;
  grid-template-columns: 375px 1fr 375px 1fr;
  grid-template-rows: 110px repeat(14, minmax(100px, 218px));
  grid-gap: 0.5rem;


`

const GridBlock = styled.div`
  grid-row: ${props => props.row} ${props => props.rowEnd ? '/' + props.rowEnd : " "};
  grid-column: ${props => props.colStart} ${props => props.colEnd ? '/' + props.colEnd : " "};
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  border: ${props => props.border ? '2px solid ' + props.border : 'none'};
`

const TitleBox = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1.25rem;
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

const Video = styled.video`
  width: 375px;
  border: 2px solid white;
  box-shadow: 0px 8px 30px rgba(200,200,200,0.2);
`

const BodyText = styled.div`
  color: ${props => props.color ? props.color : "white"};
  margin: 20px;
  p {
    font-size: ${baseFont};
    line-height: 1.5;
    margin: 0;
  }
`

const IndexPage = () => (
  <Container>

    <GridBlock colStart="1" colEnd="2">
      <TitleBox>
        <Title>Daze</Title>
      </TitleBox>
    </GridBlock>

    <GridBlock colStart="3" colEnd="4">
      <TitleBox>
        <Title>Stay Alive</Title>
      </TitleBox>
    </GridBlock>

    <GridBlock colStart="4" colEnd="5">
      <TitleBox>
        <Title><a href="#">Download</a></Title>
      </TitleBox>
    </GridBlock>

    <GridBlock row="2" rowEnd="4" colStart="1" colEnd="3" border="white">
      <BodyText>
        <p>Introspection for a better everyday.</p>
      </BodyText>
    </GridBlock>

    <GridBlock row="2" rowEnd="3" colStart="4" colEnd="5" bg="white"/>
    <GridBlock row="3" rowEnd="5" colStart="4" colEnd="5" border="white"/>
    <GridBlock row="4" rowEnd="6" colStart="2" colEnd="3" bg="white"/>

    <GridBlock row="6" rowEnd="7" colStart="2" colEnd="3" border="white"/>

    <GridBlock row="2" colStart="3" colEnd="4">
      <Video autoPlay loop>
        <source src={screenRec001} type="video/mp4"/>
      </Video>
    </GridBlock>

    <GridBlock row="5" rowEnd="7" colStart="3" colEnd="5" bg="white">
      <BodyText color={green}>
        <p>Introspection for a better everyday.</p>
      </BodyText>
    </GridBlock>

    <GridBlock row="4" colStart="1" colEnd="2">
      <Video autoPlay loop>
        <source src={screenRec002} type="video/mp4"/>
      </Video>
    </GridBlock>

    <GridBlock row="7" colStart="1" colEnd="4" bg="white">
      <BodyText color={green}>
        <p>Introspection for a better everyday.</p>
      </BodyText>
    </GridBlock>

    <GridBlock row="8" rowEnd="10" colStart="1" colEnd="3" border="white">
      <BodyText>
        <p>Introspection for a better everyday.</p>
      </BodyText>
    </GridBlock>

    <GridBlock row="8" colStart="3" colEnd="4">
      <Video autoPlay loop>
        <source src={screenRec003} type="video/mp4"/>
      </Video>
    </GridBlock>

    {/*weirdBoy
    <GridBlock row="10" rowEnd="12" colStart="2" colEnd="3" bg="white"/>
    */}

    <GridBlock row="10" colStart="1" colEnd="3" bg="white"/>
    <GridBlock row="11" colStart="2" colEnd="4" bg="white"/>

    <GridBlock row="7" rowEnd="9" colStart="4" colEnd="5" border="white"/>
    <GridBlock row="9" rowEnd="12" colStart="4" colEnd="5" border="white"/>

    <GridBlock row="11" rowEnd="13" colStart="1" colEnd="2" border="white">
      <BodyText>
        <p>Introspection for a better everyday.</p>
      </BodyText>
    </GridBlock>

    <GridBlock row="13" colStart="1" colEnd="3" border="white"/>

    <GridBlock row="12" colStart="3">
      <Video autoPlay loop>
        <source src={screenRec004} type="video/mp4"/>
      </Video>
    </GridBlock>


  </Container>
)

export default IndexPage
