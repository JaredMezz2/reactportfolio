// File to store all external api calls to my backend Node server
// almost unecessary, but I would like a contact form which requires backend routing to avoid 3rd party sites
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api'
});

export const submitContact = payload => api.post('/contact', payload);

const apis = {
    submitContact
}

export default apis;
