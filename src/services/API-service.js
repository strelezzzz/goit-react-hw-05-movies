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

async function getTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY} `);
  if (response) {
    const titles = await response.data.results.map(item => {
      return {
        title: item.title,
        id: item.id,
      };
    });

    return titles;
  }
  return await Promise.reject(new Error(`Somthing goes wrong`));
}

const api = {
  getTrendingMovies,
};

export default api;
