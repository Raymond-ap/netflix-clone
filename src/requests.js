const API_KEY =
  "7ff7bf2793073594b15d093152fd555a";

// Base url for images
export const baseUrl = "https://image.tmdb.org/t/p/original/";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&langauage=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
