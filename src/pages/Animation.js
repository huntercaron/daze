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
  height: 100vh;
  margin: auto;
  width: 100%;
  background-color: ${green};
  height: 10000px;
`

const Background = styled.div`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100vh;
`

const numbers = [1,2,3,4,5,6,7,8,9,10];


class V2Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let scrollTop = window.scrollY;

    this.setState({
      scroll: scrollTop
    })
  }

  render() {
    let bgStyle = {
      transform: `translateY(${this.state.scroll}px)`
    }

    return (
      <Container>

        <Background style={bgStyle}>
          {numbers.map((c) => {
            let cNorm = c;
            c = numbers.length-c;
            c = c+1

            let size = 14;
            let boxStyle = {
              width: c*size + "vh",
              height: c*size + "vh",
              position: "absolute",
              borderRadius: "50%",
              left: `calc(50% - ${c*size/2}vh)`,
              top: 50 - c*size/2 + "vh",
              transform: `translateY(${this.state.scroll*-1*c}px)`
            }

            let cStyle = {
              zIndex: 1,
              top: "0",
              position: "absolute",
              backgroundColor: "white",
              opacity: 0.75-Math.pow(c, 2)/100,
              borderRadius: "50%",
              width: "100%",
              height: "100%"
            };

            let bStyle = Object.assign({}, cStyle);
            bStyle.opacity = 1;
            bStyle.zIndex = 0;
            bStyle.backgroundColor = green;
            //bStyle.border = "1px solid white"

            return (
              <div key={c} style={boxStyle}>
                <div style={cStyle}/>
                <div style={bStyle}/>
              </div>

            )
          })}
        </Background>



      </Container>
    )
  }
}


export default V2Page
