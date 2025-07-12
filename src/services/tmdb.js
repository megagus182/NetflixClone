import axios from 'axios';

const API_KEY = '999e26666e049747e0ef554e25e20ae2';
const BASE_URL = 'https://api.themoviedb.org/3';

// --- PELÍCULAS ---

export const getTop10Movies = async ()=>{
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
  return res.data.results.slice(0, 10);
}

export const getNowPlaying = async () => {
  const res = await axios.get(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

export const getDocumentaries  = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc`
  );
  return res.data.results.slice(5, 15);
};

export const getEpicWorldsSeries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765,10759&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const getRealityShows = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10764&sort_by=popularity.desc`
  );
  return res.data.results;
};


// --- SERIES ---

export const getAnimeSeries = async ()=>{
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ja&with_genres=16&sort_by=popularity.desc`);
  return res.data.results;
};

export const getKoreanDramas = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&with_genres=18&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const getSpanishSeries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=es&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const getAwardWinningSeries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000&language=en-US`
  );
  return res.data.results;
};

export const getWomenLedSeries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_keywords=12362&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const getAmericanDramaSeries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_origin_country=US&with_genres=18&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const getMiniseries = async () => {
  const res = await axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_type=miniseries&sort_by=popularity.desc`
  );
  return res.data.results;
};
