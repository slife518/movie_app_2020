import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(this.state);
    console.log(movies);
    this.setState({ movies, isLoading: false });
    console.log(this.state);
  };
  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({isLoading:false})
    // }, 6000)
    //axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movie">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                // id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
