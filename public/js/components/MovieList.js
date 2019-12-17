class MovieList extends React.Component {
    render() {
        return (
            <div class="">
                <div class="hovereffect">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w185" +
                            this.props.movie.poster_path
                        }
                    />
                    <div class="overlay">
                        <p>{this.props.movie.title}</p>
                        <Link
                            className="info"
                            to={"/movie/" + this.props.movie.id}
                        >
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
