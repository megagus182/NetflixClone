import axios from 'axios';

const API_KEY = '999e26666e049747e0ef554e25e20ae2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async()=>{
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
  console.log(res.data.results)
  return res.data.results;
}