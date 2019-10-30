import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://buger-app-a5b26.firebaseio.com/'
});

export default instance