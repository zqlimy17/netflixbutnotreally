class OneMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended: `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/recommendations?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1`,
            recommendedMovies: [],
            fetchUrl:
                "https://api.themoviedb.org/3/movie/" +
                this.props.match.params.movieId +
                "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US",
            backdropUrl: "",
            posterUrl: "",
            title: "",
            overview: "",
            releaseDate: "",
            runtime: "",
            voteAverage: "",
            voteCount: "",
            id: "",
            alreadyLiked: false,
            removeMovieRoute: `/movies/${this.props.currentUser._id}/${this.props.match.params.movieId}`
        };
    }
    componentDidMount() {
        fetch(this.state.fetchUrl)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonedResults => {
                console.log(jsonedResults);
                this.setState({
                    backdropUrl:
                        "https://image.tmdb.org/t/p/w1280/" +
                        jsonedResults.backdrop_path,
                    posterUrl:
                        "https://image.tmdb.org/t/p/w780/" +
                        jsonedResults.poster_path,
                    title: jsonedResults.title,
                    overview: jsonedResults.overview,
                    releaseDate: jsonedResults.release_date,
                    runtime: jsonedResults.runtime,
                    voteAverage: jsonedResults.vote_average,
                    voteCount: jsonedResults.vote_count,
                    id: jsonedResults.id
                });
            });
        fetch(this.state.recommended)
            .then(response => {
                return response.json();
            })
            .then(jsonedMovies => {
                this.setState({
                    recommendedMovies: jsonedMovies.results
                });
            });
    }

    async handleRefresh(movie) {
        let resp = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movie +
                "?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US"
        );
        resp = await resp.json();
        this.setState({
            recommended: `https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1`,
            backdropUrl:
                "https://image.tmdb.org/t/p/w1280/" + resp.backdrop_path,
            posterUrl: "https://image.tmdb.org/t/p/w780/" + resp.poster_path,
            title: resp.title,
            overview: resp.overview,
            releaseDate: resp.release_date,
            runtime: resp.runtime,
            voteAverage: resp.vote_average,
            voteCount: resp.vote_count,
            id: resp.id
        });
        let recommendedResp = await fetch(this.state.recommended);
        recommendedResp = await recommendedResp.json();
        this.setState({
            recommendedMovies: recommendedResp.results
        });
    }

    handleLike = () => {
        fetch(`/movies/${this.props.currentUser._id}/${this.state.id}`, {
            method: "PUT"
        })
            .then(response => {
                return response.json();
            })
            .then(jsonedUser => {
                this.props.userState(jsonedUser);
            })
            .catch(error => console.log(error));
    };

    handleUnlike = () => {
        fetch(this.state.removeMovieRoute, { method: "DELETE" })
            .then(response => {
                this.setState({
                    isHidden: true
                });
                return response.json();
            })
            .then(jsonedResponse => {
                this.props.userState(jsonedResponse);
            });
    };

    render() {
        return (
            <div className="single-movie p-3">
                <div className="bg">
                    <img className="bg-cover" src={this.state.backdropUrl} />
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img
                                className="poster"
                                src={this.state.posterUrl}
                            />
                        </div>
                        <div className="col-sm-8 p-4">
                            <h1>{this.state.title}</h1>
                            <p>
                                Rated {this.state.voteAverage} &#9733; by{" "}
                                {this.state.voteCount} Users.
                            </p>
                            <p>{this.state.overview}</p>
                            <p>Release Date: {this.state.releaseDate}</p>
                            <p>Runtime: {this.state.runtime} minutes</p>
                            {this.props.currentUser === "" ? (
                                <Link
                                    className="btn btn-outline-warning btn-md"
                                    to="/login"
                                >
                                    Add to Favourites
                                </Link>
                            ) : this.props.currentUser.favorites.indexOf(
                                  this.props.match.params.movieId
                              ) === -1 ? (
                                <button
                                    className="btn btn-outline-warning btn-md"
                                    onClick={() => {
                                        this.handleLike();
                                    }}
                                >
                                    Add to Favourites
                                </button>
                            ) : (
                                <button
                                    className="btn btn-warning btn-md"
                                    onClick={this.handleUnlike}
                                >
                                    Remove from Favourites
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <h2>Similar Movies</h2>
                    <div className="single-recommended">
                        {this.state.recommendedMovies.map(movie => {
                            return (
                                <Link to={"/movie/" + movie.id}>
                                    <img
                                        onClick={() => {
                                            this.handleRefresh(movie.id);
                                        }}
                                        src={
                                            "http://image.tmdb.org/t/p/w185" +
                                            movie.poster_path
                                        }
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
