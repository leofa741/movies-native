
import React, { useEffect, useState } from 'react'
import { MoviDBmoviesResponse, Movie } from '../interfaces/movieinterfaces';
import movieDB from '../api/movieDB'


interface MoviesState{
    NowPlaying: Movie[];
       Popular: Movie[];
      TopRated: Movie[];
      Upcoming: Movie[];  
                        
}

export const useMovies = () => {

    const [loading,setLoading]=useState(true)

    const [Peliculas ,setPeliculas ]=useState<MoviesState>()
    

    const getmovies = async () => {
        const respPromise =  movieDB.get<MoviDBmoviesResponse>('/now_playing');
        const popularPromise = movieDB.get<MoviDBmoviesResponse>('/popular');
        const topratedPromise =  movieDB.get<MoviDBmoviesResponse>('/top_rated');
        const upcomingPromise =  movieDB.get<MoviDBmoviesResponse>('/upcoming');

        const response = await Promise.all([respPromise,popularPromise,topratedPromise,upcomingPromise])

       setPeliculas({
        NowPlaying: response[0].data.results,
        Popular: response[1].data.results,
        TopRated:response[2].data.results,
        Upcoming:response[3].data.results,

       })

        setLoading(false)
    }


    useEffect(()=>{

           getmovies();

        },[])
        

return{
    ...Peliculas,    
    loading,

}
 
}
