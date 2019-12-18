const { BrowserRouter, Link, Switch, Route, Redirect, Slider } = ReactRouterDOM;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: ""
        };
    }
    userState = user => {
        this.setState({
            currentUser: user
        });
    };
    handleLogout = () => {
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
