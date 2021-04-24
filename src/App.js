import "./App.css";
import Movie from "./components/Movie";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Banner />

      <Movie
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Movie title="Popular on netflix" fetchUrl={requests.fetchTrending} />

      <Movie title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Movie title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Movie title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Movie title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Movie title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
