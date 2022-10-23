import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    data() {
        return {
            isLoading: false,
            topRating: [],
            current: [0, 1, 2],
            max: 15
        }
    },
    async created() {
        this.isLoading = true
        await $.ajax({
            url: api_url + 'Top250Movies/' + api_key,
            dataType: 'json',
            success: (response) => {
                const data = response.items
                this.topRating = data.slice(0, this.max)
            },
            error: (err) => {
                console.log(err)
            }
        })
        this.isLoading = false
    },
    methods: {
        next() {
            this.current = this.current.map(item => {
                item += 3;
                if (item > this.max - 1) {
                    item -= this.max
                }
                return item
            })
        },
        back() {
            this.current = this.current.map(item => {
                item -= 3;
                if (item < 0) {
                    item += this.max
                }
                return item
            })
        },
        toMovieDetail(e) {
            const crrEl = e.target
            const movieId = $(crrEl).attr('alt')
            this.$emit('activeMovieDetail', movieId)
        }
    },
    template: `
    <div class="topTitle">Top Rating</div>
    <div id="topRating" class="row">
        <div class="angle-btn col-1" @click="back"><i class="fa fa-angle-left" style="font-size:70px"></i></div>
        <div id="ratingRow" class="col-10">
            <img @click="toMovieDetail" class="popular-img" v-if="topRating.length > 0" :alt="topRating[current[0]].id" :src="topRating[current[0]].image"/>
            <img @click="toMovieDetail" class="popular-img" v-if="topRating.length > 0" :alt="topRating[current[1]].id" :src="topRating[current[1]].image"/>
            <img @click="toMovieDetail" class="popular-img" v-if="topRating.length > 0" :alt="topRating[current[2]].id" :src="topRating[current[2]].image"/>
            <div v-if="isLoading == true" class="loader loader-popular"></div>
            <div v-if="isLoading == true" class="loader loader-popular"></div>
            <div v-if="isLoading == true" class="loader loader-popular"></div>
        </div>
        <div class="angle-btn col-1" @click="next"><i class="fa fa-angle-right" style="font-size:70px"></i></div>
    </div>
    `
}