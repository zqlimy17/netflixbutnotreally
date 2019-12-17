class Test extends React.Component {
    render() {
        return (
            <Link to={"/movie/" + this.props.movie.id}>
                <img src={"http://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} />
            </Link>
        )
    }
}