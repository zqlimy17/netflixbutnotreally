class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg">
                    <img className="bg-cover" src="./img/main_bg.jpg" />
                </div>
                <Search
                    currentUser={this.props.currentUser}
                    userState={this.props.userState}
                />
            </React.Fragment>
        );
    }
}
