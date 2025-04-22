class RecommendedMovies extends React.Component {
  render() {
    return (
      <div className="movies-comparison">
        <h3>Here are some movies that you might like!</h3>
        <table>
          {this.props.recommendedMovies.map((movie) => {
            return <MovieList movie={movie} currentUser={this.props.currentUser} userState={this.props.userState} />;
          })}
        </table>
      </div>
    );
  }
}
