// {
//     type:'ADD_MOVIES',
//      movies:[],                  //we can pass anything object, array, or string or anything we have
// }

// {
//     type:'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';

//action creator
export function addMovies(movies)
{
    return {
        type:ADD_MOVIES,
        movies:movies,
    };

}