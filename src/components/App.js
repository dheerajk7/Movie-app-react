import React from 'react';
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourite} from '../actions';


class App extends React.Component{

  //when these componet is mounted we will change the state
  componentDidMount()
  {
      //making an api call
      //dispatching an action
      const {store} = this.props;

      store.subscribe(()=>{
        console.log('store',store.getState());
        this.forceUpdate();
      });

      // store.dispatch(
      //   {
      //     type:'ADD_MOVIES',
      //     movies:data,
      //   }
      // );

      //we will add these with the help of action dispatcher
      store.dispatch(
        addMovies(data),
      );
      console.log('after state',this.props.store.getState());
  }

  isFavourite(movie)
  {
    const {favourites} = this.props.store.getState().movies;
    let index = favourites.indexOf(movie);
    if(index !== -1)
    {
      return true;
    }
  }

  handleShowFavourite = () =>
  {
    const {store} = this.props;
    store.dispatch(
      setShowFavourite(true)
    );
    console.log('show favourite',this.props.store.getState());
  }

  handleShowMovie = () =>
  {
    const {store} = this.props;
    store.dispatch(
      setShowFavourite(false),
    );
    console.log('show movie',this.props.store.getState());
  }

  render()
  {
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourite} = movies;
    let movieList = list;
    console.log('list of movies',movieList);
    if(showFavourite)
    {
      movieList = favourites;
    }
    return (
      <div className="App">
        <Navbar dispatch = {this.props.store.dispatch} search={search}/>
        <div className="main">
            <div className="tabs">
              <div className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={this.handleShowMovie}>Movies</div>
              <div className={`tab ${showFavourite ? 'active-tabs':''}`} onClick={this.handleShowFavourite}>Favourites</div>
            </div>
            <div className="list">
              {movieList.map((movie, index) =>(
                <MovieCard 
                  movie={movie} 
                  key={`movies ${index}`}
                  dispatch = {this.props.store.dispatch}
                  isFavourite = {this.isFavourite(movie)}
                />
              ))}
            </div>
            { movies.length === 0 ? <div className='no-movies'>No movies to display</div> : null}
        </div>
      </div>
    );
  }
  
}

export default App;
