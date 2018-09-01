import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <h3 className={classes.mainHeading}>Movie Cards</h3>
        <MovieList />
      </div>
    );
  }
}

export default App;
