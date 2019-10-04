import axios from 'axios';

const KEY = 'AIzaSyCbsdGvgOEneRP8mGWOxh9gNuPSWuooxtk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});