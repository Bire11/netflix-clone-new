// import React from 'react'
import axios from 'axios';

// const axios = () => {
//   return (
//     <div>axios</div>
//   )
// }
const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
});

export default instance;