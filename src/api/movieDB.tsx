import axios from 'axios';


const movieDB = axios.create({

    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'fbd03ca0634f69f8de723baf9018133c',
        languaje:'es-ES'
    }
})

export default movieDB;