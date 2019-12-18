class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: []
        };
    }
    componentDidMount() {
        fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1"
        )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(
                jsonedMovies => {
                    console.log(jsonedMovies);
                    this.setState({
                        nowPlaying: jsonedMovies.results
                    });
                },
                err => console.log(err)
            );
    }
    render() {
        return (
            <div>
                <h3>Now Playing</h3>
                <div className="single-recommended pb-3">
                    {this.state.nowPlaying.reverse().map(movie => {
                        return (
                            <MovieList
                                movie={movie}
                                currentUser={this.props.currentUser}
                                userState={this.props.userState}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
