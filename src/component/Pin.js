import React from 'react';
import styled from 'styled-components';

function Pin(props) {

    let { urls } = props

    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="pin" />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 236px;

    img {
        border-radius: 16px;
        cursor: zoom-in;
        display: flex;
        object-fit: cover;
        width: 100%;
    }
`

export default Pin;
