import React from 'react';

//styling and motion
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { smallImage } from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathId }) => {

    const history = useHistory();

    const exitDetailsHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={starFull} key={i} alt="star" />)
            } else {
                stars.push(<img src={starEmpty} key={i} alt="star" />)
            }
        }
        return stars;
    }

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    const { screen, game, isLoading } = useSelector(state => state.details);

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailsHandler}>
                    <Details layoutId={pathId} lassName="details">
                        <Stats className="stats">
                            <div className="rating">
                                <motion.h3 layoutId={`title${pathId}`} >{game.name}</motion.h3>
                                <p>Rating : {getStars()}</p>
                            </div>
                            <Infos className="infos">
                                <h3>Platforms</h3>
                                <Platforms className="platforms">
                                    {game.platforms && game.platforms.map((data) => (
                                        <img src={getPlatform(data.platform.name)} alt={data.platform.name} key={data.platform.id} />
                                    ))}
                                </Platforms>
                            </Infos>
                        </Stats>
                        <Media className="media">
                            <motion.img layoutId={`image${pathId}`} src={smallImage(game.background_image, 1280)} alt="image" />
                        </Media>
                        <Description className="description">
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results && screen.results.map((screen) => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game" />
                            ))}
                        </div>
                    </Details>
                </CardShadow>
            )}
        </>
    );
}

export default GameDetails;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    cursor: pointer;
    &::-webkit-scrollbar{
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;  
        border-radius: 10px; 
    }
    &::-webkit-scrollbar{
        background-color: white;
    }
`

const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background:white;
    left: 10%;
    position: absolute;
    color: black;
    cursor: auto;
    z-index: 10;
    img{
        width: 100%;
    }
    @media screen and (max-width: 700px){
        padding: 2rem 1rem;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
    @media screen and (max-width: 700px){
        flex-direction: column;
        text-align: center;
    }
`

const Infos = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
        @media screen and (max-width: 700px){
            margin-left: 1.2rem;
        }
        &:first-of-type{
            @media screen and (max-width: 700px){
                margin-left: 0;
            }    
        }
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
    @media screen and (max-width: 800px){
        margin-top: 2rem;
    } 
`
const Description = styled(motion.div)`
    margin: 5rem 0;
    @media screen and (max-width: 800px){
        margin: 2rem 0;
    } 
`