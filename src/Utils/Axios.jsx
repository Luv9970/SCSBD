import axios from 'axios'

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers : {
        accept : "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjA2YWNhZmU4ZTM4NmE1ZTlhYTc4YjNiNjcwNGRiYSIsIm5iZiI6MS43NDYzMDc1NDQ5OTUwMDAxZSs5LCJzdWIiOiI2ODE2ODlkODc2NzIzZGRkODQwMzJjZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3nLJUSbKBHeuHWcxWsaoUACOd9w0QfFYmyUii04lLZc'
    },
});

export default instance;