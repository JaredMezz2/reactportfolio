// File to store all external api calls to my backend Node server
// almost unecessary, but I would like a contact form which requires backend routing to avoid 3rd party sites
import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8393/portfolio'
    baseURL: 'http://srv-captain--api-server/portfolio'
});

export const testCall = payload => api.get('/');
export const submitContact = payload => api.post('/contact', payload);

const apis = {
    submitContact,
    testCall
}

export default apis;
