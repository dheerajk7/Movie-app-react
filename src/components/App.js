import React from 'react';
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';


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
    const {favourites} = this.props.store.getState();
    let index = favourites.indexOf(movie);
    if(index !== -1)
    {
      return true;
    }
  }

  render()
  {
    const {list} = this.props.store.getState();
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>
            <div className="list">
              {list.map((movie, index) =>(
                <MovieCard 
                  movie={movie} 
                  key={`movies ${index}`}
                  dispatch = {this.props.store.dispatch}
                  isFavourite = {this.isFavourite(movie)}
                />
              ))}
            </div>
        </div>
      </div>
    );
  }
  
}

export default App;
