import Header from './Header.js'
import NavBar from './NavBar.js'
import InTheaters from './InTheaters.js'
import TopPopular from './TopPopular.js'
import TopRating from './TopRating.js'
import Footer from './Footer.js'
import { api_key, api_url, requestOptions } from '../config/api.js'

import Movie from '../models/movie.js'

export default {
    data() {
        return {
            inTheaters: [],
            topPopular: [],
            topRating: [],
        }
    },
    mounted() {

    },
    methods: {

    },
    components: {
        Header,
        NavBar,
        InTheaters,
        TopPopular,
        TopRating,
        Footer
    },
    template: `
    <Header />
    <NavBar />
    <InTheaters />
    <TopPopular />
    <TopRating />
    <Footer />
    `
}