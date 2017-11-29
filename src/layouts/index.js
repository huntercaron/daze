import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components';

import 'normalize.css'

import ModeratMedwoff from '../assets/fonts/Moderat-Medium.woff'
import ModeratMedwoff2 from '../assets/fonts/Moderat-Medium.woff2'

const Container = styled.div`
  background-color: #00DAAA;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daze"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container>
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


injectGlobal`
  @font-face {
    font-family: 'Moderat';
    src: url(${ModeratMedwoff2}) format('woff2'),
      url(${ModeratMedwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  *, *:before, *:after {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
  }

  html {
      font-size: 62.5%;
      height: 100%;
  }

  body {
      font-size: 1.6em;
      line-height: 1.6;
      font-weight: normal;
      font-family: 'Moderat', sans-serif;
      color: #222;

      webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
  }
`;
