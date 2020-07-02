// {
//     type:'ADD_MOVIES',
//      movies:[],                  //we can pass anything object, array, or string or anything we have
// }

// {
//     type:'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
//action creator
export function addMovies(movies)
{
    return {
        type:ADD_MOVIES,
        movies:movies,
    };
}

export function addFavourite(movie)
{
    return {
        type:ADD_FAVOURITE,
        movie,                  //if key and variable have same name so we can send like these as well
    }
}

export function removeFavourite(movie)
{
    return {
        type: REMOVE_FAVOURITE,
        movie,
    }
}

export function setShowFavourite(value)
{
    return {
        type:SET_SHOW_FAVOURITE,
        value,
    }
}

