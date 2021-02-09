import React from 'react';
import { Link } from 'react-router-dom';

//styling and motion
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popUp } from '../animation';

//redux
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';

import { smallImage } from '../util';

const Game = ({ name, released, image, id }) => {

    const stringPathId = id.toString();

    const dispatch = useDispatch();

    const loadDetailsHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
    }

    return (
        <StyledGame
            variants={popUp}
            initial="hidden"
            animate="show"
            layoutId={stringPathId}
            onClick={loadDetailsHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title${stringPathId}`} >{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
}

export default Game;

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, .2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`