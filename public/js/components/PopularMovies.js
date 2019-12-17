class PopularMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularMovies: []
        };
    }
    componentDidMount() {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1"
        )
            .then(response => {
                return response.json();
            })
            .then(
                jsonedMovies => {
                    this.setState({
                        popularMovies: jsonedMovies.results
                    });
                },
                err => console.log(err)
            );
    }
    render() {
        return (
            <div>
                <h3>Popular Movies</h3>
                <div className="single-recommended pb-3">
                    {this.state.popularMovies.map(movie => {
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
