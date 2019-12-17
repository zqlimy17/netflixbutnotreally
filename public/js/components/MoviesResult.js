class MoviesResult extends React.Component {
    handleAddFavorite = movie => {
        fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
            method: "PUT"
        })
            .then(console.log("added to favs"))
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div className="single-recommended py-3">
                {this.props.movieResults.map(movie => {
                    return (
                        <div>
                            <div className="hovereffect">
                                <img
                                    src={
                                        "http://image.tmdb.org/t/p/w185" +
                                        movie.poster_path
                                    }
                                />
                                <div className="overlay">
                                    <p>{movie.title}</p>
                                    <Link
                                        className="info"
                                        to={"/movie/" + movie.id}
                                    >
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
