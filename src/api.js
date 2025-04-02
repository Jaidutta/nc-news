import axios from 'axios';

const ncNewsAPI = axios.create({
    baseURL: "https://news-be-api.onrender.com/api",
    timeout: 1000
})

export async function getAllArticles(){
  return ncNewsAPI.get('/articles')
}