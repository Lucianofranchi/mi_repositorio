import React, {useState, useEffect} from "react";

const MovieFinder =() =>{
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState([]);

    const titleOnChangeHandler = (event) =>{
        setTitle(event.target.value);
    };

    useEffect(() =>{
        fetch()
        .then(res => res.json())
        .then(resmovies => setMovies(resmovies.Search))
    }, [title]);

    return(
        <div>
            <h1>Movie Finder</h1>
            <label htmlFor="title">Título</label>
            <input id="title" onChange={titleOnChangeHandler} value={title} />
        </div>
    );
};


export default MovieFinder;
