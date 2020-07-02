import {ADD_MOVIES} from '../actions';

const initialMoviesState = {
    list:[],
    favourites:[],
};

export default function movies(state=initialMoviesState, action)           //takes state and action as argument passing default state as blank array
{
    if(action.type === ADD_MOVIES)
    {
        // using spread operator to copy object
        return {
            ...initialMoviesState,
            list:action.movies,
        }
    }
    return state;
}
