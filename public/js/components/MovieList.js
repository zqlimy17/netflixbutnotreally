class MovieList extends React.Component {
    handleLike = () => {
        fetch(`/movies/${this.props.currentUser._id}/${this.props.movie.id}`, {
            method: "PUT"
        })
            .then(response => {
                return response.json();
            })
            .then(jsonedUser => {
                console.log(this.props.currentUser);
                console.log(jsonedUser);
                this.props.userState(jsonedUser);
            })
            .catch(error => console.log(error));
    };
    handleUnlike = () => {
        fetch(`/movies/${this.props.currentUser._id}/${this.props.movie.id}`, {
            method: "DELETE"
        })
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
            <div>
                <div class="hovereffect">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w185" +
                            this.props.movie.poster_path
                        }
                    />
                    <div class="overlay">
                        <Link to={`/movie/${this.props.movie.id}`}>
                            <p>{this.props.movie.title}</p>
                        </Link>
                        <Link
                            className="info mb-3"
                            to={`/movie/${this.props.movie.id}`}
                        >
                            More Info
                        </Link>
                        <br />
                        {this.props.currentUser === "" ? (
                            <Link
                                className="btn btn-outline-warning btn-md"
                                to="/login"
                            >
                                <i class="fa fa-star-o" /> Like!
                            </Link>
                        ) : this.props.currentUser.favorites.indexOf(
                              this.props.movie.id.toString()
                          ) === -1 ? (
                            <button
                                className="btn btn-outline-warning btn-md"
                                onClick={() => {
                                    this.handleLike();
                                }}
                            >
                                <i class="fa fa-star-o" /> Like!
                            </button>
                        ) : (
                            <button
                                className="btn btn-warning btn-md"
                                onClick={this.handleUnlike}
                            >
                                <i class="fa fa-star" /> Unlike!
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
