import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    props: ['searchKey'],
    data() {
        return {
            isLoading: false,
            items: [],
        }
    },
    created() {
        if (this.searchKey !== '' || this.searchKey != null) {
            this.searchMovie(this.searchKey)
        }
    },
    watch: {
        searchKey(newKey, oldKey) {
            if (this.searchKey !== '') {
                this.searchMovie(newKey)
            }
        }
    },
    methods: {
        async searchMovie(name) {
            this.isLoading = true
            await $.ajax({
                method: 'GET',
                url: api_url + 'SearchMovie/' + api_key + '/' + name,
                timeout: 3000,
                success: (response) => {
                    const data = response.results
                    this.items = data
                },
                error: (err) => {
                    console.log(err)
                }
            })
            this.isLoading = false
        },
        toMovieDetail(e) {
            const el = e.target
            const crrEl = $(el).parent()
            const movieId = $(crrEl).children('.card-img-top').attr('alt')
            this.$emit('activeMovieDetail', movieId)
        }
    },
    template: `
    <div id="searchArea" class="card-group d-flex justify-content-center my-4">
    <div v-if="isLoading == true" class="loader"></div>
    <div v-if="isLoading == false" class="col-2 mx-3 my-1" v-for="item of items">
        <div class="btn p-0 card movie-view-card" @click="toMovieDetail">
            <img :src="item.image" :alt="item.id" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-start overflow-hidden">{{item.title}}</h5>
            </div>
        </div>
    </div>
</div>
    `
}