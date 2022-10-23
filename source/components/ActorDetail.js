import { api_key, api_url, requestOptions } from '../config/api.js'

export default {
    props: ['actor'],
    data() {
        return {
            item: null,
        }
    },
    created() {
        this.getActor(this.actor)
    },
    watch: {
        actor(newName, oldName) {
            this.getActor(newName)
        }
    },
    methods: {
        async getActor(name) {
            await $.ajax({
                url: api_url + 'SearchName/' + api_key + '/' + name,
                dataType: 'json',
                success: (response) => {
                    this.item = response
                },
                error: (err) => {
                    console.log(err)
                }
            })
        }
    },
    template: `
    <div id="movieDetail">
        {{ item }}
    </div>
    `
}

