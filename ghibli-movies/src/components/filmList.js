import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FilmList = () => {
    const [List, setList] = useState([])
    
    useEffect(() => {
        axios.get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            setList(res.data)
            console.log(List)
        })
        .catch(err => {
            console.log(`the error is ${err}`)
        })
    }, [])
    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <div className='list-container'>
                {List.map(movie => {
                    return(
                        <div className="list-cards">
                            <h2>{movie.title}</h2>
                            <h3>Director: {movie.director}</h3>
                            <h4>Release Year: {movie.release_date}</h4>
                            <h4>Rottom Tomator Score: {movie.rt_score}</h4>
                            <p>{movie.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FilmList