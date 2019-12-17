class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieResults: []
        };
    }
    handleRender = event => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&query=${event.target.value}`
        )
            .then(response => {
                return response.json();
            })
            .then(
                json => {
                    this.setState({
                        movieResults: json.results || []
                    });
                },
                err => console.log(err)
            );
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <form onChange={this.handleRender}>
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
                <MoviesResult
                    movieResults={this.state.movieResults}
                    currentUser={this.props.currentUser}
                />
                <NowPlaying
                    currentUser={this.props.currentUser}
                    userState={this.props.userState}
                />
                <PopularMovies
                    currentUser={this.props.currentUser}
                    userState={this.props.userState}
                />
            </React.Fragment>
        );
    }
}
