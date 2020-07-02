    import {ADD_MOVIES, ADD_FAVOURITE,REMOVE_FAVOURITE} from '../actions';

    const initialMoviesState = {
        list:[],
        favourites:[],
    };

    export default function movies(state=initialMoviesState, action)           //takes state and action as argument passing default state as blank array
    {
        // if(action.type === ADD_MOVIES)
        // {
        //     // using spread operator to copy object
        //     return {
        //         ...initialMoviesState,
        //         list:action.movies,
        //     }
        // }
        // return state;

        //in react we prefer using switch case instead of if else
        switch(action.type)
        {
            case ADD_MOVIES:
            {
                return {
                    ...state,
                    list:action.movies,
                }   
            }

            case ADD_FAVOURITE:
            {
                return {
                    ...state,
                    favourites: [action.movie,...state.favourites],
                }
            }

            case REMOVE_FAVOURITE:
            {
                const {favourites} = state;
                let newFavourites = favourites.filter((value) =>
                {
                    return value !== action.movie;
                });
                return {
                    ...state,
                    favourites:newFavourites,
                };
            }

            default:
            {
                return state;
            }
        }
    }

