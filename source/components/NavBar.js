export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        searchMovie() {

        }
    },
    template: `
    <div id="navbar">
        <div id="nav-title">Home</div>
        <form id="searchForm">
            <input @search="searchMovie" id="searchInput" class="form-control" type="search" placeholder="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    `
}