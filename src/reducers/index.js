import {ADD_MOVIES, ADD_FAVOURITE,REMOVE_FAVOURITE, SET_SHOW_FAVOURITE} from '../actions';

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourite:false,
};

export function movies(state=initialMoviesState, action)           //takes state and action as argument passing default state as blank array
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

        case SET_SHOW_FAVOURITE:
        {
            return {
                ...state,
                showFavourite:action.value,
            }   
        }
        default:
        {
            return state;
        }
    }
}

const initialSearchState = {
    result:{}
}

export function search(state=initialSearchState, action)
{
    return state;
}

const initialRootState = {
    movies:initialMoviesState,
    search:initialSearchState,
}


//making one reducer from different reducers
export default function rootReducer(state = initialRootState, action)
{
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action),
    }
}
