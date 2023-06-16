import { reactive } from "vue"

const store = reactive({
    search:'',
    movies:[],
    series:[],
    config:{
        API_KEY:'c81095b9073967ba29258efead0e48db',
        URL:'https://api.themoviedb.org/3',
    },
})

export default store