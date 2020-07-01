export default function movies(state=[], action)           //takes state and action as argument passing default state as blank array
{
    if(action.type === 'ADD_MOVIES')
    {
        return action.movies;
    }
    return state;
}
