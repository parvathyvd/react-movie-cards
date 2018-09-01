import React from 'react';
import classes from './Movie.css';

const movie = (props) => {
     return (<div className={classes.Movie}>
         <p>{props.movieList.title}</p>
         <p>{props.movieList.subtitle}</p>
         <p>{props.movieList.description}</p>
         <p>{props.movieList.rating}</p>
         <p>{props.movieList.year}</p>
         <img src={props.movieList.imageUrl} alt={props.movieList.title} />
     </div>  );
}
 
export default movie;