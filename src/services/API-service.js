// api key = b6c47595cd552e39159b1bc0cf721807
// https://api.themoviedb.org/3/movie/550?api_key=b6c47595cd552e39159b1bc0cf721807

// /trending/get-trending /trending/{media_type}/{time_window} список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
import axios from 'axios';
const KEY = 'b6c47595cd552e39159b1bc0cf721807';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список найпопулярніших фільмів на сьогодні
const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY} `);
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
    `/search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}&`
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
      `movie/${id}?api_key=${KEY}7&language=en-US? `
    );
    const titles = await response.data.map(item => {
      return {
        title: item.title,
        id: item.id,
        genres: item.genres,
        overview: item.overview,
        poster_path: item.poster_path,
        release_date: item.release_date,
        vote_average: item.vote_average,
      };
    });
    return titles;
  } catch (error) {
    console.log(error.message);
  }
};
// запит інформації про акторський склад для сторінки кінофільму

// запит оглядів для сторінки кінофільму

const api = {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
};

export default api;
