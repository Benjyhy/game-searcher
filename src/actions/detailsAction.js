import axios from 'axios';
import { gameDetailsURL } from '../api';
import { gameScreenshotsURL } from '../api';

export const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailData.data,
            screen: screenshotsData.data
        }
    });
}