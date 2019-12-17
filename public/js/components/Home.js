class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="bg">
                    <img className="bg-cover" src="./img/main_bg.jpg" />
                </div>
                <Search currentUser={this.state.currentUser} />
            </React.Fragment>
        );
    }
}
