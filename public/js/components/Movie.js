class Movie extends React.Component {
  removeMovie = () => {
    // Remove movie function goes here.
  };
  render() {
    return (
      <React.Fragment>
        <p>cards?</p>
        <h3>this.props.movie.title goes here</h3>
        <h3>this.props.movie.image goes here</h3>
        <button onClick={this.removeMovie}>unlike button goes here</button>
      </React.Fragment>
    );
  }
}
