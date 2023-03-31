import { Component } from "react";
import MyHeader from "./MyHeader";
import Movie from "./Movie";

class Home extends Component {
  state = {
    HarryPotter: [],
    LordOfTheRing: [],
    Cosmos: [],
  };

  request = async (endpoint, stato) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      this.setState({ [stato]: data.Search });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.request("http://www.omdbapi.com/?apikey=5f735187&s=harry%20potter", "HarryPotter");
    this.request("https://www.omdbapi.com/?apikey=5f735187&s=lord%20of%20the%20rings", "LordOfTheRing");
    this.request("http://www.omdbapi.com/?apikey=cdaf68d&s=Cosmos", "Cosmos");
  }
  render() {
    return (
      <div className="container-fluid">
        <MyHeader />
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.HarryPotter.map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Lord Of The Ring</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.LordOfTheRing.map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Cosmos</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.Cosmos.map(movie => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
