import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import logo from '../img/logo.svg'

const Background = styled.div`
  background: #81aa8c;
  padding-bottom: 10px;
  text-align: center;
`

const HeroWrap = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  max-width: none;
  border-radius: 0 0 30% 30%;
  width: 140%;
  margin-left: -20%;

  @media (min-width: 768px) {
    border-radius: 0 0 45% 45%;
  }
`
const Heading = styled.h1`
  text-align: center;
  color: white !important;
  font-family: 'Gotham Book';
  text-transform: uppercase;
  font-size: 15px !important;
  font-weight: 300;
  padding: 0.75em;

  @media (min-width: 768px) {
    font-size: 30px !important;
  }
`

const HeadingStrong = styled.strong`
  font-size: 30px !important;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 60px !important;
    font-weight: 700;
  }
`
const ViewGallery = styled.div`
  @media (min-width: 768px) {
    margin-top: 40vh;
    padding-bottom: 30px;
  }
`

const Button = styled.a`
  font-family: 'Gotham Book';
  vertical-align: middle !important;
  margin: auto 10px;
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    position: absolute !important;
    top: 320px;
    left: calc(50% - 100px);
  }
`
const Container = styled.div`
  max-width: 100vw !important;
  margin-left: 20vw !important;
`

const LogoWrapper = styled.div`
  padding: 0;
`

const Logo = styled(Link)`
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.01) !important;
  padding-top: 45px !important;
  :hover {
    background-color: rgba(0, 0, 0, 0.01) !important;
    color: #fff !important;
  }
`

const Hero = ({ data }) => (
  <Background>
    <HeroWrap
      style={{
        backgroundImage: `url(${
          !!data.image.childImageSharp
            ? data.image.childImageSharp.fluid.src
            : data.image
        })`,
      }}
    >
      <Container className="container content columns is-fluid">
        <LogoWrapper className="column is-2">
          <Logo to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="GolfAndCo" />
          </Logo>
        </LogoWrapper>
        <div className="column is-8">
          <Heading className="title">
            <HeadingStrong>{data.title}</HeadingStrong>
            <br />
            {data.city}, {data.country}
          </Heading>
        </div>
      </Container>

      <ViewGallery>
        <Button
          className="button is-link is-rounded"
          onClick={() =>
            document.querySelector('#courseDetailBackground').scrollIntoView()
          }
        >
          View Gallery
        </Button>
      </ViewGallery>
    </HeroWrap>
  </Background>
)

export default Hero

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}
