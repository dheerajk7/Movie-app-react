import React from 'react';
import {handleMovieSearch,addToMovies, hideSearchResult} from '../actions'
import { connect } from 'react-redux';
class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchText:''
        }

    }

    handleSearch = () => {
        const {searchText} = this.state;
        const {dispatch} = this.props;
        dispatch(handleMovieSearch(searchText));
        setTimeout(() => {
            dispatch(hideSearchResult());
        },4000);
    }

    handleChange = (e) =>{
        this.setState({
            searchText:e.target.value,
        });
    }

    handleAddToMovies = (movie)=>
    {
        const {dispatch} = this.props;
        dispatch(addToMovies(movie));
    }

    render()
    {
        const {result,showSearchResult} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResult &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="Search Poster"/>
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
          );
    }
}

function mapStateToProps(state)
{
    return {
        search:state.search,
    }   
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);
export default connectedNavbarComponent;
