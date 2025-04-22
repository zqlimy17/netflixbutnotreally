class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
    };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          netflixButNotReally
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-1">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.cathaycineplexes.com.sg/movies/">
                Cathay
              </a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.gv.com.sg/GVMovies">
                GV
              </a>
            </li>
            {this.props.currentUser ? (
              <li className="nav-item px-1">
                <Link className="nav-link " to={"/profile/" + this.props.currentUser.username} disabled>
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item px-1 ">
                <Link className="nav-link " to="/login" disabled>
                  Login
                </Link>
              </li>
            )}
            {this.props.currentUser ? (
              <li className="nav-item px-1" onClick={this.props.handleLogout}>
                <Link className="nav-link " to="/">
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item px-1">
                <Link className="nav-link btn btn-warning btn-md" to="/signup">
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
