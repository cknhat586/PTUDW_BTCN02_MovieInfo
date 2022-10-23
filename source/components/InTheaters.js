import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    data() {
        return {
            isLoading: false,
            inTheaters: [],
            current: 0,
            max: 5
        }
    },
    async created() {
        this.isLoading = true
        await $.ajax({
            url: api_url + 'InTheaters/' + api_key,
            dataType: 'json',
            success: (response) => {
                const data = response.items
                this.inTheaters = data.slice(0, this.max)
            },
            error: (err) => {
                console.log(err)
            }
        })
        this.isLoading = false
    },
    methods: {
        next() {
            this.current++
            if (this.current > this.max - 1) {
                this.current = 0
            }
        },
        back() {
            this.current--
            if (this.current < 0) {
                this.current = this.max - 1
            }
        },
        toMovieDetail(e) {
            const crrEl = e.target
            const movieId = $(crrEl).attr('alt')
            this.$emit('activeMovieDetail', movieId)
        }
    },
    template: `
    <div id="inTheaters" class="row">
        <div class="angle-btn col-3" @click="back"><i class="fa fa-angle-left" style="font-size:70px"></i></div>
        <div id="theaterRow" class="col-5">
            <img @click="toMovieDetail" class="theater-img" v-if="inTheaters.length > 0" :alt="inTheaters[current].id" :src="inTheaters[current].image"/>
            <div v-if="isLoading == true" class="loader loader-theater"></div>
        </div>
        <div class="angle-btn col-3" @click="next"><i class="fa fa-angle-right" style="font-size:70px"></i></div>
    </div>
    `
}