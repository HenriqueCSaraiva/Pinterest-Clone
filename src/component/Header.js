import React, { useState } from 'react';
import styled from "styled-components";
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Header(props) {
    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input)
    }


    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    align-items: center;
    background-color: white;
    color: black;
    display: flex;
    height: 56px;
    padding: 12px 4px 4px 16px;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #e60023;
        cursor: pointer;
        font-size: 32px;
    }
`

const HomeButtons = styled.div`
    align-items: center;
    background-color: rgb(17,17,17);
    border-radius: 24px;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    min-width: 123px;
    a{
        font-weight: 700;
        text-decoration: none;
    }
`

const HomePageButton = styled(HomeButtons)`   
    background-color: rgb(17,17,17);
    a{
        color: white;
    }
`

const FollowingButton = styled(HomeButtons)`
    background-color: white;
    a{
        color: black;
    }
    &:hover{
        background-color: #e1e1e1;
    }
`

const SearchWrapper = styled.div`
    flex:1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    border: none;
    border-radius: 50px;
    display: flex;
    height: 48px;
    padding-left: 10px;
    width: 100%;

    form{
        display: flex;
        flex:1;
    }

    form > input{
        background-color: transparent;
        border: none;
        font-size: 16px;
        margin-left:5px;
        width: 100%;
    }

    form > button{
        display: none;
    }

    input:focus{
        outline: none;
    }    
`

const IconsWrapper = styled.div`

`


export default Header
