import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import screenRec001 from '../assets/video/screenRec001.mp4'
import screenRec002 from '../assets/video/screenRec002.mp4'
import screenRec003 from '../assets/video/screenRec003.mp4'
import screenRec004 from '../assets/video/screenRec004.mp4'

const baseFont = "2.4rem";
const green = "#00DAAA";

const Container = styled.div`
  margin: auto;
  width: 100%;
  background-color: ${green};
`
const GridContainer = styled.div`
  z-index: 3;

  max-width: 1200px;
  padding: 0 3rem;
  width: 100%;
  margin: auto;

  display: grid;
  grid-template-columns:  1fr repeat(2, 193.5px) 14vh repeat(2, 193.5px) 1fr;
  grid-template-rows: repeat(60, 110.5px);
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
  justify-content: ${props => props.center ? "center" : "auto"};

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

  a {
    font-size: ${baseFont};
    color: ${props => props.color ? props.color : "white"};
    text-decoration: underline;

    &:hover {
      opacity: 0.75;
      text-decoration: none;
    }
  }
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
  width: 378px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px rgba(255,255,255, 0.2);
`

const Image = styled(Img)`
  width: 378px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px rgba(255,255,255, 0.2);
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;

  padding: 0.5rem 3rem;
  font-size: ${baseFont};
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

    console.log(props.data);

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

    if (scrollTop < 750) {
      this.setState({
        scroll: scrollTop
      })
    }

  }

  render() {
    let bgStyle = {
      transform: `translateY(${this.state.scroll}px)`
    }

    return (
      <Container>

        <Header>
          <Title>Daze</Title>
          <Title><a href="#">Download Now</a></Title>
        </Header>

        <Background style={bgStyle}>
          {numbers.map((c) => {
            let cNorm = c;
            c = numbers.length-c;

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
              zIndex: 2,
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
            bStyle.zIndex = 1;
            bStyle.backgroundColor = green;
            //bStyle.border = "1px solid white"

            if (c == 1 && this.state.scroll < 1000) {
              cStyle.opacity = 1-(this.state.scroll/2000);
            } else if ( c ==1 ){
              cStyle.opacity = 0.5;
            }

            return (
              <div key={c} style={boxStyle}>
                <div style={cStyle}/>
                <div style={bStyle}/>
              </div>

            )
          })}
        </Background>

        <GridContainer>


          <GridBlock row="12" col="2" height="2" width="2" border="white">
            <BodyText>
              <p>Daily introspection for a better everyday.</p>
            </BodyText>
          </GridBlock>


          <GridBlock row="11" col="5" height="3" width="2"  above>
            <VideoContainer>
              <Image resolutions={this.props.data.allFile.edges[1].node.childImageSharp.resolutions} />
            </VideoContainer>
          </GridBlock>

          <GridBlock row="15" col="2" height="3" width="2"  above>
            <VideoContainer>
              <Image resolutions={this.props.data.allFile.edges[2].node.childImageSharp.resolutions} />
            </VideoContainer>
          </GridBlock>

          <GridBlock row="19" col="5" height="3" width="2" above>
            <VideoContainer>
              <Image resolutions={this.props.data.allFile.edges[3].node.childImageSharp.resolutions} />
            </VideoContainer>
          </GridBlock>








          <GridBlock row="30" col="5" height="3" width="2" border="white">
            <BodyText>
              <p>Let Daze remember each day so you can focus on the present.</p>
            </BodyText>
          </GridBlock>

          <GridBlock row="28" col="2" height="3" width="2"  above>
            <VideoContainer>
              <Video autoPlay loop>
                <source src={screenRec003} type="video/mp4"/>
              </Video>
            </VideoContainer>
          </GridBlock>




          <GridBlock row="39" col="2" height="3" width="2" border="white">
            <BodyText>
              <p>See days at glance.</p>
            </BodyText>
          </GridBlock>

          <GridBlock row="37" col="5" height="3" width="2"  above>
            <VideoContainer>
              <Video autoPlay loop>
                <source src={screenRec001} type="video/mp4"/>
              </Video>
            </VideoContainer>
          </GridBlock>





          <GridBlock row="48" col="5" height="3" width="2" border="white">
            <BodyText>
              <p>Improve through daily introspection.</p>
            </BodyText>
          </GridBlock>

          <GridBlock row="46" col="2" height="3" width="2"  above>
            <VideoContainer>
              <Video autoPlay loop>
                <source src={screenRec002} type="video/mp4"/>
              </Video>
            </VideoContainer>
          </GridBlock>




          <GridBlock row="58" col="2" height="1" width="2" border="white">
            <BodyText>
              <Title>Surpass your normal.</Title>
            </BodyText>
          </GridBlock>

          <GridBlock row="58" col="5" height="1" width="2" bg="white">
            <BodyText color={green}>
              <a>Download Now</a>
            </BodyText>
          </GridBlock>


        </GridContainer>

      </Container>
    )
  }
}


export default V2Page


export const query = graphql`
  query ImageQuery {
    allFile (sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          childImageSharp {
            resolutions(width: 375) {
              ...GatsbyImageSharpResolutions_noBase64
            }
          }
        }
      }
    }
  }
`
