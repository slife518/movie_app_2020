import React from 'react';
import PropTypes from 'prop-types';


function Movie({id, title, year, summary, poster}){
    return(
        <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h3 class="movie_year">{year}</h3>
        <h3 class="movie_summary">{summary}</h3>

        </div>

    ) 
}

Movie.protoTypes = {
    id : PropTypes.number.isRequired, 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};
export default Movie;