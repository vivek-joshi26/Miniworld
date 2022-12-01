// export const BASE_URL = "http://localhost:8000/users/find/vivek.joshi2@sjsu.edu"
const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

