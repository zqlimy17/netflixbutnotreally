class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: [],
    };
  }
  handleRender = (() => {
    let timeout;

    return (event) => {
      const query = event.target.value; // grab the value right away

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&query=${query}`)
          .then((response) => response.json())
          .then(
            (json) => {
              this.setState({
                movieResults: json.results || [],
              });
            },
            (err) => console.log(err)
          );
      }, 500);
    };
  })();
  render() {
    return (
      <React.Fragment>
        <div>
          <form onChange={this.handleRender} className="pb-3">
            <input
              className="form-control"
              onChange={this.handleRender}
              type="text"
              name="searchbar"
              id="movieTitle"
              placeholder="Search Movies..."
              value={this.state.value}
              style={{ fontSize: "2em" }}
            ></input>
          </form>
        </div>
        <MoviesResult movieResults={this.state.movieResults} currentUser={this.props.currentUser} userState={this.props.userState} />
        <NowPlaying currentUser={this.props.currentUser} userState={this.props.userState} />
        <PopularMovies currentUser={this.props.currentUser} userState={this.props.userState} />
      </React.Fragment>
    );
  }
}
