class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.currentUser.favorites.length
        };
    }
    minus = () => {
        this.setState({
            num: this.state.num - 1
        });
    };
    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.name}!</h1>
                <p>Total Favorites: {this.state.num}</p>
                <h3>Your Favorites</h3>
                <div className="d-flex flex-wrap">
                    {this.props.currentUser.favorites.reverse().map(movie => {
                        return (
                            <UserMovie
                                movie={movie}
                                currentUser={this.props.currentUser}
                                userState={this.props.userState}
                                minus={this.minus}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
