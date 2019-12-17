const { BrowserRouter, Link, Switch, Route, Redirect, Slider } = ReactRouterDOM;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            getRecommended: "",
            recommendedMovies: []
        };
    }
    userState = user => {
        const randomIndex = Math.floor(Math.random() * user.favorites.length);
        this.setState({
            currentUser: user,
            getRecommended: `https://api.themoviedb.org/3/movie/${user.favorites[randomIndex]}/recommendations?api_key=1a31cfdf9cc81f7229bbbc09db5d95bd&language=en-US&page=1`
        });
        fetch(this.state.getRecommended)
            .then(response => {
                return response.json();
            })
            .then(
                jsonedMovies => {
                    this.setState({
                        recommendedMovies: jsonedMovies.results
                    });
                },
                err => console.log(err)
            );
        console.log("current user is", this.state.currentUser);
    };
    handleLogout = () => {
        console.log("User has logged out");
        this.setState({
            currentUser: ""
        });
        window.location.reload();
    };
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav
                        currentUser={this.state.currentUser}
                        handleLogout={this.handleLogout}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Home
                                currentUser={this.state.currentUser}
                                recommendedMovies={this.state.recommendedMovies}
                                userState={this.userState}
                            />
                        </Route>
                        <Route path="/login">
                            {this.state.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <Login userState={this.userState} />
                            )}
                        </Route>
                        <Route path="/signup">
                            <Signup currentUser={this.state.currentUser} />
                        </Route>
                        <Route path={"/profile/:username"}>
                            <Profile
                                currentUser={this.state.currentUser}
                                userState={this.userState}
                            />
                        </Route>
                        <Route
                            path={"/movie/:movieId"}
                            render={props => (
                                <OneMovie
                                    {...props}
                                    currentUser={this.state.currentUser}
                                    userState={this.userState}
                                />
                            )}
                        />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
