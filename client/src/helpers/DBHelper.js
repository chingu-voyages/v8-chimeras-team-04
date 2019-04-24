import axios from 'axios';

const addJob = (position, company ) => {
    return axios.post('/addjob', { position, company });
}

export { addJob };