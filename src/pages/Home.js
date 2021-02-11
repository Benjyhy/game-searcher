import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

//style and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animation';

//components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';

const Home = () => {
    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //FETCH GAMES
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //get the data back
    const { popular, upcoming, newGames, searched } = useSelector((state) => state.games);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout>
                <AnimatePresence>{pathId && <GameDetails pathId={pathId} />}</AnimatePresence>
                {searched.length ? (
                    <div>
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map((game) => (
                                <Game
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                />
                            ))}
                        </Games>
                    </div>
                ) : ""}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}

export default Home;

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    @media screen and (max-width: 700px){
        padding: 0 2rem;
    }
    h2{
        padding: 5rem 0;
        @media screen and (max-width: 700px){
            padding: 3rem 0 1rem 0;
        }
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));    
    }
    @media screen and (max-width: 400px){
        grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));    
    }
`