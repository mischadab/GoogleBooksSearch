import axios from 'axios';

export default {
    // get books from the google api
    getBooks: query => {
        return axios.get('/api/google', {params: { query: 'title' + query}})
    },

    // get saved books 
    getSavedbooks: () => {
        return axios.get('/api/books')
    }
}
