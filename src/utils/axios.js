// import React from 'react'
import axios from 'axios';

// the orginal one
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;