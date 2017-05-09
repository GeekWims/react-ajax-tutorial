import axios from 'axios';

export const getPost = (postId) =>  {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
};

export const getComments = (postId) =>  {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
};
