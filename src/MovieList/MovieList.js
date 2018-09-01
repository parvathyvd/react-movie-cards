import React, { Component } from 'react';
import movies from '../Movies/movies.json';
import Movie from '../Movies/Movie';
import classes from './MovieList.css';

class MovieList extends Component {
    state = {movies: []}

    componentDidMount () {
        this.setState({movies: movies})
    }

    render(){
        let movieList = this.state.movies.map(movie => {
            return <Movie movieList = {movie} key= {movie.id}/>
        })
    return ( 
    <div className={classes.MovieList}>
        {movieList}
    </div> );
}
}
 
export default MovieList;