import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    props: ['movie'],
    data() {
        return {
            isLoading: false,
            item: null,
        }
    },
    created() {
        this.getMovie(this.movie)
    },
    watch: {
        movie(newId, oldId) {
            this.getMovie(newId)
        }
    },
    methods: {
        async getMovie(id) {
            this.isLoading = true
            await $.ajax({
                method: 'GET',
                url: api_url + 'Title/' + api_key + '/' + id,
                timeout: 3000,
                success: response => {
                    this.item = response
                },
                error: err => {
                    console.log(err)
                }
            })
            if (this.item != null) {
                this.changeRating()
            }
            this.isLoading = false
        },
        changeRating() {
            const rating = this.item.imDbRating
            const rated = Math.round(rating)
            let ratingHTML = ``
            for (let i = 1; i <= 10; i++) {
                if (i > rated) {
                    ratingHTML += `<i class="fa fa-star unrated"></i>`
                } else {
                    ratingHTML += `<i class="fa fa-star rated"></i>`
                }
                ratingHTML += `\n`
            }

            $(".rating-points").append(ratingHTML)
        }
    },
    template: `
    <div v-if="isLoading == true" class="loader loader-movie-detail"></div>
    <div id="movieDetail">
        <div id="detail" class="container-fluid d-flex mt-4">
                <div class="poster mx-4">
                    <img :src="item.image">
                </div>
                <div class="border-movie-info">
                    <div class="title">{{ item.title }}</div>
                    <div class="movie-meta-info container-fluid mt-2 py-1 px-2">
                        <div class="movie-dt">Director: </div>
                        <div class="movie-dd">{{ ' ' + item.directors }}</div>
                        <br>
                        <div class="movie-dt">Writer: </div>
                        <div class="movie-dd">{{ ' ' + item.writers }}</div>
                        <br>
                        <div class="movie-dt">Released: </div>
                        <div class="movie-dd">{{ ' ' + item.releaseDate }}</div>
                        <br>
                        <div class="movie-dt">Countries: </div>
                        <div class="movie-dd">{{ ' ' + item.countries }}</div>
                        <br>
                        <div class="movie-dt">Runtime: </div>
                        <div class="movie-dd">{{ ' ' + item.runtimeStr }}</div>
                        <br>
                        <div class="movie-dt">Languages: </div>
                        <div class="movie-dd">{{ ' ' + item.languages }}</div>
                        <br>
                        <div class="movie-dt">Genre: </div>
                        <div class="movie-dd">{{ ' ' + item.genres }}</div>
                        <br>
                        <div class="movie-dt">Rated: </div>
                        <div class="movie-dd">{{ ' ' + item.contentRating }}</div>
                        <br>
                        <div class="movie-dt">Actor: </div>
                        <div class="movie-dd">{{ ' ' + item.stars }}</div>
                        <br>
                    </div>
                    <div class="rating container-fluid mt-2 py-1 px-2">
                        <span class="rating-title">{{ 'Ratings: ' +  item.imDbRating + '  '}}</span>
                        <span class="rating-points"></span>
                        <span class="votes">{{ '(' + item.imDbRatingVotes + ' votes)' }}</span>
                    </div>
                    <div class="plot container-fluid mt-2 py-1 px-2">
                        <div class="plot-title">Plot: </div>
                        <span class="plot-content">{{ item.plot }}</span>
                    </div>
                </div>
            </div>
    </div>
    `
}

