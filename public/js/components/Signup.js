class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            name: "",
            username: "",
            password: ""
        };
    }
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        fetch("/users", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
            .then(createdUser => {
                return createdUser.json();
            })
            .then(() => {
                this.setState({
                    redirect: true
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/login/" />;
        }
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
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Your Name"
                                    className="form-control"
                                    style={{ textTransform: "capitalize" }}
                                    minlength="3"
                                    maxlength="20"
                                />
                            </div>
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
                                    style={{ textTransform: "lowercase" }}
                                    minlength="3"
                                    maxlength="20"
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
                                    minlength="3"
                                    maxlength="20"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn btn-warning btn-block"
                            />
                        </form>
                        <div>
                            <span style={{ color: "grey" }}>
                                Have an account?
                            </span>{" "}
                            <Link to="/login/">Login now</Link>.
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
