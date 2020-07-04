import React from 'react';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourite} from '../actions';
import { connect } from '../index';
import NavbarWrapper from './Navbar';


class App extends React.Component{

  //when these componet is mounted we will change the state
  componentDidMount()
  {
      //making an api call
      //dispatching an action
      // const {store} = this.props;

      // store.subscribe(()=>{
      //   console.log('store',store.getState());
      //   this.forceUpdate();
      // });

      // store.dispatch(
      //   {
      //     type:'ADD_MOVIES',
      //     movies:data,
      //   }
      // );

      //we will add these with the help of action dispatcher
      this.props.dispatch(
        addMovies(data),
      );
      // console.log('after state',this.props.store.getState());
  }

  isFavourite(movie)
  {
    const {favourites} = this.props.movies;
    let index = favourites.indexOf(movie);
    if(index !== -1)
    {
      return true;
    }
  }

  handleShowFavourite = () =>
  {
    // const {store} = this.props;
    this.props.dispatch(
      setShowFavourite(true)
    );
    // console.log('show favourite',this.props.store.getState());
  }

  handleShowMovie = () =>
  {
    // const {store} = this.props;
    this.props.dispatch(
      setShowFavourite(false),
    );
    // console.log('show movie',this.props.store.getState());
  }

  render()
  {
    const {movies} = this.props;
    const {list,favourites,showFavourite} = movies;
    let movieList = list;
    console.log('list of movies',movieList);
    if(showFavourite)
    {
      movieList = favourites;
    }
    return (
      <div className="App">
        <NavbarWrapper/>
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
                  dispatch = {this.props.dispatch}
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

//no need to perform these wrapping we are doing that
// class AppWrapper extends React.Component {
//   render()
//   {
//     return (
//       <StoreContext.Consumer>
//         { (store) =>
//         {
//           return <App store={store}/>
//         }
//         }
//       </StoreContext.Consumer>);
//   }
  
// }

//this function will tell us what we need in props;
function mapStateToProps(state)
{
  return {
    movies:state.movies,
    search:state.search,
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
