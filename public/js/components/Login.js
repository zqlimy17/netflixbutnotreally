class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            currentUser: "",
            message: ""
        };
    }
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        fetch("/sessions", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(loggedInUser => {
                return loggedInUser.json();
            })
            .then(jsonedUser => {
                if (jsonedUser.message === null) {
                    this.setState({
                        message: "Invalid Username/Password"
                    });
                } else if (jsonedUser.message === false) {
                    this.setState({
                        message: "Invalid Username/Password"
                    });
                } else {
                    this.setState({
                        currentUser: jsonedUser
                    });
                }
            })
            .then(() => {
                this.props.userState(this.state.currentUser);
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <React.Fragment>
                <div className="bg">
                    <img className="bg-cover" src="../img/main_bg.jpg" />
                </div>
                <div className="row d-flex justify-content-center pt-5">
                    <div className="col-4 form p-4">
                        <h2>
                            <strong>Login</strong>
                        </h2>
                        <form onSubmit={this.handleSubmit} className="my-4">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>

                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    placeholder="Your Username"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Your Password"
                                    className="form-control"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Sign In"
                                className="btn btn-warning btn-block"
                            />
                        </form>
                        {this.state.message !== "" ? (
                            <p style={{ textAlign: "center", color: "red" }}>
                                {this.state.message}
                            </p>
                        ) : (
                            ""
                        )}
                        <div>
                            <span style={{ color: "grey" }}>New to SMDB?</span>{" "}
                            <Link to="/signup/">Sign up now</Link>.
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
