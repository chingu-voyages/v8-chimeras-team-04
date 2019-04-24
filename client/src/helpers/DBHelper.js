import axios from 'axios';

const addJob = (position, company ) => axios.post('/addjob', { position, company });

const getAllJobs = () => axios.get('/jobs');

export { addJob, getAllJobs };