import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

function Mainboard(props) {

    let { pins } = props;

    return (
        <Wrapper>
            <Container>
                {pins.map((pin, index) => {
                    let { urls } = pin;
                    return <Pin key={index} urls={urls} />
                })}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
`

const Container = styled.div`
   background-color: white;
   column-gap: 10px;
   height: 100%;
   margin: 0 auto;

   @media (min-width: 0px) and (max-width: 755px) {
    max-width: 504px;
    column-count: 2;
  }
  
  @media (min-width: 756px) and (max-width: 1007px) {
      max-width: 756px;
      column-count: 3;
  }
  
  @media (min-width: 1008px) and (max-width: 1259px) {
      max-width: 1008px;
      column-count: 4;
  }
  
  @media (min-width: 1260px) and (max-width: 1511px) {
      max-width: 1260px;
      column-count: 5;
  }
  
  @media (min-width: 1512px) and (max-width: 1763px) {
      width: 1512px;
      column-count: 6;
  }
  
  @media (min-width: 1764px) and (max-width: 2015px) {

      width: 1764px;
      column-count: 7;
    
  }
  
  @media (min-width: 2016px) and (max-width: 2267px) {

      width: 2016px;
      column-count: 8;
    
  }
  
  @media (min-width: 2268px) and (max-width: 2519px) {

      width: 2268px;
      column-count: 9;
    
  }
  
  @media (min-width: 2520px) and (max-width: 2771px) {

      width: 2520px;
      column-count: 10;
    
  }
  
  @media (min-width: 2772px) and (max-width: 3023px) {
      width: 2772px;
      column-count: 11;
  }
  
  @media (min-width: 3024px) and (max-width: 3275px) {
      width: 3024px;
      column-count: 12; 
  }
  
  @media (min-width: 3276px) and (max-width: 3527px) {
      width: 3276px;
      column-count: 13;
  }
  
  @media (min-width: 3528px) and (max-width: 3779px) {
      width: 3528px;
      column-count: 14;
  }
  
  @media (min-width: 3780px) and (max-width: 4031px) {
      width: 3780px;
      column-count: 15;
  }
  
  @media (min-width: 4032px) and (max-width: 4283px) {
      width: 4032px;
      column-count: 16;
  }
  
  @media (min-width: 4284px) and (max-width: 4535px) {
      width: 4284px;
      column-count: 17;
  }
  
  @media (min-width: 4536px) and (max-width: 4787px) {
      width: 4536px;
      column-count: 18;
  }
  
  @media (min-width: 4788px) and (max-width: 5039px) {
      width: 4788px;
      column-count: 19;
  }
  
  @media (min-width: 5040px) and (max-width: 5291px) {
      width: 5040px;
      column-count: 20;
  }
  
  @media (min-width: 5292px) and (max-width: 5543px) {
      width: 5292px;
      column-count: 21;
  }
  
  @media (min-width: 5544) and (max-width: 5795px) {
      width: 5544px;
      column-count: 22;
  }
  
  @media (min-width: 5796px) and (max-width: 6047px) {
      width: 5796px;
      column-count: 23;
  }
  
  @media (min-width: 6048px) and (max-width: 6299px) {
      width: 6048px;
      column-count: 24;
  }
  
  @media (min-width: 6300px) and (max-width: 6551px) {
      width: 6300px;
      column-count: 25;
  }

  @media (min-width: 6552px) and (max-width: 6803px) {
      width: 6552px;
      column-count: 26;  
  }
  
  @media (min-width: 6804px) and (max-width: 7055px) {

      width: 6804px;
      column-count: 27;
  }

  @media (min-width: 7056px) and (max-width: 7307px) {
      width: 7056px;
      column-count: 28;  
  }

  @media (min-width: 7308px) and (max-width: 7559px) {
      width: 7308px;
      column-count: 29;
  }
`

export default Mainboard
