class UserMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      singleUrl: `https://api.themoviedb.org/3/movie/${this.props.movie}?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US`,
      removeMovieRoute: `/movies/${this.props.currentUser._id}/${this.props.movie}`,
      isHidden: false,
      backdrop: "",
      hover: false,
      genres: "",
    };
  }
  componentDidMount() {
    fetch(this.state.singleUrl)
      .then((response) => {
        return response.json();
      })
      .then(
        (json) => {
          let sgenres = [];
          for (let i = 0; i < json.genres.length; i++) {
            sgenres.push(json.genres[i].id);
          }
          this.setState({
            image: `http://image.tmdb.org/t/p/w185${json.poster_path}`,
            title: json.original_title,
            backdrop: `https://image.tmdb.org/t/p/w1280/${json.backdrop_path}`,
            genres: sgenres,
          });
        },
        (err) => console.log(err)
      );
  }
  removeMovie = () => {
    alert("This feature is disabled in demo mode");
    return false;
    // this.props.minus();
    // fetch(this.state.removeMovieRoute, { method: "DELETE" })
    //   .then((response) => {
    //     this.setState({
    //       isHidden: true,
    //     });
    //     return response.json();
    //   })
    //   .then((jsonedResponse) => {
    //     this.props.userState(jsonedResponse);
    //   });
  };
  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };
  render() {
    return (
      <div
        className={this.props.filterx.length > 0 ? (this.props.filterx.every((g) => this.state.genres.includes(g)) ? "showshow" : "hide") : "nopropsnostate"}
      >
        <div className={this.state.isHidden ? "hide" : ""} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <div className={this.state.hover ? "bg" : "hide"}>
            <img className="bg-cover" src={this.state.backdrop} />
          </div>
          <div className="hovereffect he">
            <img src={this.state.image} style={{ display: "block", margin: "auto" }} />

            <div className="overlay">
              <Link to={"/movie/" + this.props.movie}>
                <p>{this.state.title}</p>
              </Link>
              <Link className="info" to={"/movie/" + this.props.movie}>
                More Info
              </Link>
              <br />
              <Link className="movie-remove" onClick={this.removeMovie}>
                Remove
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
