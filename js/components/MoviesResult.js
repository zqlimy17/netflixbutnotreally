class MoviesResult extends React.Component {
  handleAddFavorite = (movie) => {
    alert("This feature is disabled in demo mode");
    return false;
    // fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
    //   method: "PUT",
    // })
    //   .then(console.log("added to favs"))
    //   .catch((error) => console.log(error));
  };
  handleLike = (movie) => {
    alert("This feature is disabled in demo mode");
    return false;
    // fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
    //   method: "PUT",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((jsonedUser) => {
    //     console.log(this.props.currentUser);
    //     console.log(jsonedUser);
    //     this.props.userState(jsonedUser);
    //   })
    //   .catch((error) => console.log(error));
  };
  handleUnlike = (movie) => {
    alert("This feature is disabled in demo mode");
    return false;
    // fetch(`/movies/${this.props.currentUser._id}/${movie.id}`, {
    //   method: "DELETE",
    // })
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
  render() {
    return (
      <div className="movie-results d-flex flex-wrap">
        {this.props.movieResults.map((movie) => {
          return (
            <div className="col-sm-4 my-3">
              <div className="hovereffect-mr" style={{ maxHeight: "203px" }}>
                <img
                  className="img-responsive"
                  src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  onError={() => {
                    event.target.src = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
                  }}
                  style={{
                    objectFit: "contain",
                    maxHeight: "100%",
                    overflowX: "hidden",
                  }}
                />
                <div className="overlay-mr">
                  <Link className="mb-3" to={"/movie/" + movie.id}>
                    <h2>{movie.title}</h2>
                  </Link>
                  {this.props.currentUser === "" ? (
                    <p>
                      <Link className="btn btn-outline-warning btn-md" to="/login">
                        <i class="fa fa-star-o" /> Like!
                      </Link>
                    </p>
                  ) : this.props.currentUser.favorites.indexOf(movie.id.toString()) === -1 ? (
                    <p
                      className="btn btn-outline-warning btn-md"
                      onClick={() => {
                        this.handleLike(movie);
                      }}
                    >
                      <i class="fa fa-star-o" /> Like!
                    </p>
                  ) : (
                    <p
                      className="btn btn-warning btn-md"
                      onClick={() => {
                        this.handleUnlike(movie);
                      }}
                    >
                      <i class="fa fa-star" /> Unlike!
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
