class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.currentUser.favorites.length,
      filters: [],
    };
  }
  minus = () => {
    this.setState({
      num: this.state.num - 1,
    });
  };
  handleGenre(num) {
    let handler = this.state.filters;
    if (handler.indexOf(num) === -1) {
      handler.push(num);
    } else {
      console.log(handler.indexOf(num));
      handler.splice(handler.indexOf(num), 1);
    }
    this.setState({
      filters: handler,
    });
    console.log(this.state.filters);
  }
  clearFilters() {
    this.setState({
      filters: [],
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.currentUser.name}!</h1>
        <p>Total Favorites: {this.state.num}</p>
        <h3>Your Favorites</h3>
        <h5>Filters</h5>
        <div className="filters">
          <button
            className={this.state.filters.indexOf(28) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(28);
            }}
          >
            Action
          </button>
          <button
            className={this.state.filters.indexOf(12) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(12);
            }}
            value="12"
          >
            Adventure
          </button>
          <button
            className={this.state.filters.indexOf(16) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(16);
            }}
            value="16"
          >
            Animation
          </button>
          <button
            className={this.state.filters.indexOf(35) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(35);
            }}
            value="35"
          >
            Comedy
          </button>
          <button
            className={this.state.filters.indexOf(80) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(80);
            }}
            value="80"
          >
            Crime
          </button>
          <button
            className={this.state.filters.indexOf(99) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(99);
            }}
            value="99"
          >
            Documentary
          </button>
          <button
            className={this.state.filters.indexOf(18) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(18);
            }}
            value="18"
          >
            Drama
          </button>
          <button
            className={this.state.filters.indexOf(10751) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(10751);
            }}
            value="10751"
          >
            Family
          </button>
          <button
            className={this.state.filters.indexOf(14) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(14);
            }}
            value="14"
          >
            Fantasy
          </button>
          <button
            className={this.state.filters.indexOf(36) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(36);
            }}
            value="36"
          >
            History
          </button>
          <button
            className={this.state.filters.indexOf(27) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(27);
            }}
            value="27"
          >
            Horror
          </button>
          <button
            className={this.state.filters.indexOf(10402) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(10402);
            }}
            value="10402"
          >
            Music
          </button>
          <button
            className={this.state.filters.indexOf(9648) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(9648);
            }}
            value="9648"
          >
            Mystery
          </button>
          <button
            className={this.state.filters.indexOf(10749) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(10749);
            }}
            value="10749"
          >
            Romance
          </button>
          <button
            className={this.state.filters.indexOf(878) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(878);
            }}
            value="878"
          >
            Science Fiction
          </button>
          <button
            className={this.state.filters.indexOf(10770) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(10770);
            }}
            value="10770"
          >
            TV Movie
          </button>
          <button
            className={this.state.filters.indexOf(53) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(53);
            }}
            value="53"
          >
            Thriller
          </button>
          <button
            className={this.state.filters.indexOf(10752) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(10752);
            }}
            value="10752"
          >
            War
          </button>
          <button
            className={this.state.filters.indexOf(37) === -1 ? "btn btn-outline-warning" : "btn btn-warning"}
            onClick={() => {
              this.handleGenre(37);
            }}
            value="37"
          >
            Western
          </button>
          <button
            onClick={() => {
              this.clearFilters();
            }}
            class="btn btn-danger"
          >
            Clear
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {this.props.currentUser.favorites.reverse().map((movie) => {
            return (
              <UserMovie filterx={this.state.filters} movie={movie} currentUser={this.props.currentUser} userState={this.props.userState} minus={this.minus} />
            );
          })}
        </div>
      </div>
    );
  }
}
