import React, {useState} from 'react';
import star from "../assets/images/star.png";
import Form from '../components/Form'
import { useLocation } from 'react-router-dom';

function MovieSummary(props){
    const location = useLocation();
    const movie = location.state.movie.show;
    console.log(movie)
    const genre = movie.genres.map((genre)=>{
            return <li key = {genre} className = "genre">{genre}</li>
    });

    const [showForm, setShowForm] = useState(false);
    
    return (
        <>
            <div className = "movieSummary">
                <div>
                    <img src = {movie.show.image !== null ? movie.show.image.original : ""} alt = {movie.id} className='imageContainer'></img>
                </div>
                <div style = {{'margin' : '1rem'}}>
                    <div className = "genre-rating">
                        <ul style = {
                            {
                                'margin' : '0',
                                'padding' : '0',
                                'display': 'inlineBlock'
                            }
                            }>
                            {genre}
                        </ul>
                        {movie.rating.average != null? <p className='details'>
                                <img src = {star} className='star'></img>{movie.rating.average}
                            </p>: null}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
                </div>
                <div>
                    <button onClick = {()=>{
                        setShowForm(prev => {
                            return !prev;
                        })
                    }}>Book Ticket</button>
                </div>
            </div>

            {showForm && <Form state = {{movie, setShowForm}}/>}
        </>
    );
}

export default MovieSummary;
