import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux and routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

import { fadeIn } from '../animation';

const Nav = () => {

    const dispatch = useDispatch();

    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    }

    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <h1>Recherche un jeu !</h1>
            </Logo>
            <form className="search">
                <input onChange={inputHandler} value={textInput} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

export default Nav;

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    @media screen and (max-width: 700px){
        padding: 1rem 2rem;
    }
    input{
        width: 30%;
        font-size: 1.3rem;
        padding: .5rem;
        border: 1px solid white;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, .1);
        outline: none;
        @media screen and (max-width: 700px){
            width: 65%;
        }
    }
    button{
        font-size: 1.5rem;
        border: 1px solid white;
        padding: .5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        transition: all .3s ease-in;
        &:hover{
            background: white;
            color: #ff7676;
            border: 1px solid #ff7676;
        }
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    img{
        width: 2rem;
        height: 2rem;
    }
`