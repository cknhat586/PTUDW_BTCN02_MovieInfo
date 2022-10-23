import Header from './Header.js'
import NavBar from './NavBar.js'
import InTheaters from './InTheaters.js'
import TopPopular from './TopPopular.js'
import TopRating from './TopRating.js'
import MovieDetail from './MovieDetail.js'
import ActorDetail from './ActorDetail.js'
import SearchResult from './SearchResult.js'
import Footer from './Footer.js'

export default {
    data() {
        return {
            home: true,
            movieDetail: false,
            actorDetail: false,
            searchResult: false,
            movie: '',
            actor: '',
            search: '',
        }
    },
    components: {
        Header,
        NavBar,
        InTheaters,
        TopPopular,
        TopRating,
        MovieDetail,
        ActorDetail,
        SearchResult,
        Footer
    },
    methods: {
        activeHome() {
            this.movie = ''
            this.search = ''
            this.actor = ''
            this.home = true
            this.movieDetail = false
            this.actorDetail = false
            this.searchResult = false
        },
        activeMovieDetail(movie) {
            this.movie = movie
            this.actor = ''
            this.search = ''
            this.home = false
            this.movieDetail = true
            this.actorDetail = false
            this.searchResult = false
        },
        activeActorDetail(actor) {
            this.actor = actor
            this.movie = ''
            this.search = ''
            this.home = false
            this.movieDetail = false
            this.actorDetail = true
            this.searchResult = false
        },
        activeSearchResult(searchKey) {
            this.search = searchKey
            this.movie = ''
            this.actor = ''
            this.home = false
            this.movieDetail = false
            this.actorDetail = false
            this.searchResult = true
        }
    },
    template: `
    <Header/>
    <NavBar @activeSearchResult="activeSearchResult" @activeHome="activeHome"/>
    <InTheaters v-if="home == true" @activeMovieDetail="activeMovieDetail"/>
    <TopPopular v-if="home == true" @activeMovieDetail="activeMovieDetail"/>
    <TopRating v-if="home == true" @activeMovieDetail="activeMovieDetail"/>
    <MovieDetail v-if="movieDetail == true" @activeActorDetail="activeActorDetail" :movie="movie" />
    <ActorDetail v-if="actorDetail == true" :actor="actor"/>
    <SearchResult v-if="searchResult == true" @activeMovieDetail="activeMovieDetail" :searchKey="search"/>
    <Footer />
    `
}