import star from "../assets/images/star.png";
import { useNavigate } from "react-router-dom";

function MovieCard({movie}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movieSummary/${movie.show.id}`, { state: { movie } })
    }
    return (
        <div>
            <div className = "imageContainer">
                <img 
                    src = {movie.show.image !== null ? movie.show.image.original : ""}
                    alt = {movie.show.name} 
                    className = "movie-image"
                />
            </div>
            <div className = "content">
                {movie.show.rating.average != null? <p className='details'>
                    <img src = {star} className='star'></img>{movie.show.rating.average}
                </p>: null}
                <p className='details'>
                    Name : {movie.show.name}
                </p>
                <p className='details'>
                    Language : {movie.show.language}
                </p>
            </div>
            <button className = "btn" onClick = {handleClick}>Show More</button>
        </div>
    );
}

export default MovieCard;
