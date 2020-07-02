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
export const ADD_MOVIE_SEARCH_RESULT = 'ADD_MOVIE_SEARCH_RESULT';
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';
export const HIDE_SEARCH_RESULT = 'HIDE_SEARCH_RESULT';
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

export function handleMovieSearch(movie)
{
    return function(dispatch)
    {
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie',movie);
            //dispatching an action
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieSearchResult(movie)
{
    return {
        type:ADD_MOVIE_SEARCH_RESULT,
        movie,
    }
}

export function addToMovies(movie)
{
    return {
        type:ADD_TO_MOVIES,
        movie,
    }
}

export function hideSearchResult()
{
    return {
        type:HIDE_SEARCH_RESULT,
    }
}
