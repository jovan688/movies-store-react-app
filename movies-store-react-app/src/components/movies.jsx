import React, { Component, Fragment } from 'react';
import { getMovies } from '../fakeMovieService';

class Movies extends Component {
    state = { 
        movies : getMovies()
    };
    render() { 
        return <table className="table">
            <thread>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                </tr>
            </thread>
            <tbody>
            { this.state.movies.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                </tr>
                ))}
            </tbody>
        </table>
    }
}

export default Movies;