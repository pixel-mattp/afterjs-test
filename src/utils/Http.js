import axios from 'axios';

const environment = process.env.NODE_ENV;

let api;

if (environment === 'development') {
    api = 'http://parfetts-gold-api.stagelab.co.uk/api/';
}
if (environment === 'staging') {
    api = 'https://e29d99b1-7f11-43d7-ae3e-8861e3c36d24.mock.pstmn.io/api/';
}
if (environment === 'production') {
    api = 'https://e29d99b1-7f11-43d7-ae3e-8861e3c36d24.mock.pstmn.io/api/';
}

export const baseApi = api;

axios.defaults.baseURL = api;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
