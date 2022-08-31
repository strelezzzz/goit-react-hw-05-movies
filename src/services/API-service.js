// api key = b6c47595cd552e39159b1bc0cf721807
// https://api.themoviedb.org/3/movie/550?api_key=b6c47595cd552e39159b1bc0cf721807

// /trending/get-trending /trending/{media_type}/{time_window} список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
import axios from 'axios';
const API_KEY = 'b6c47595cd552e39159b1bc0cf721807';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список найпопулярніших фільмів на сьогодні
const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY} `);
    const titles = await response.data.results.map(item => {
      return {
        title: item.title,
        id: item.id,
      };
    });
    return titles;
  } catch (error) {
    console.log(error.message);
  }
};

// пошук фільму за ключовим словом на сторінці фільмів
const getSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  if (response) {
    const titles = await response.data.results.map(item => {
      return {
        title: item.title,
        id: item.id,
      };
    });
    return titles;
  }
  return await Promise.reject(new Error('Somthing goes wrong'));
};

// запит повної інформації про фільм для сторінки кінофільму
const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US? `
    );
    const details = await response.data;
    return details;
  } catch (error) {
    console.log(error.message);
  }
};
// запит інформації про акторський склад для сторінки кінофільму
const getMovieCast = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US? `
    );
    const details = await response.data;
    return details;
  } catch (error) {
    console.log(error.message);
  }
};
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=b6c47595cd552e39159b1bc0cf721807&language=en-US

// запит оглядів для сторінки кінофільму

const api = {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCast,
};

export default api;
