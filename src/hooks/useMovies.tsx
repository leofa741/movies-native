
import React, { useEffect, useState } from 'react'
import { MoviDBNowPlaying, Movie } from '../interfaces/movieinterfaces';
import movieDB from '../api/movieDB'

export const useMovies = () => {

    const [loading,setLoading]=useState(true)

    const [PeliculasNew ,setPeliculasNew ]=useState<Movie[]>([])


const getmovies =async()=>{
    const resp = await  movieDB.get<MoviDBNowPlaying>('/now_playing');
    setPeliculasNew(resp.data.results)


setLoading(false)
}


    useEffect(()=>{

       getmovies();

        },[])
        

return{
    PeliculasNew,
    loading,

}
 
}
