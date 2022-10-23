import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    data() {
        return {
            topRating: []
        }
    },
    async mounted() {
        // const movieAmount = 5
        // await fetch(api_url + 'InTheaters/' + api_key, requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         this.inTheaters = result.items.slice(0, movieAmount)
        //         console.log(this.inTheaters)
        //     })
        //     .catch(err => console.error(err))
    },
    methods: {

    },
    template: `
    <div id="topRating">
        <i class="fa fa-angle-left" style="font-size:36px"></i>
        <i class="fa fa-angle-right" style="font-size:36px"></i>
    </div>
    `
}