import axios from "axios";

export const fetchRepos = (language) => {
    const url = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars`);

    return axios.get(url)
        .then(resp => resp.data.items)
}


export const fetchUserData = (userName) => {
    const url = window.encodeURI(`https://api.github.com/users/${userName}`);

    return axios.get(url)
        .then(resp => resp.data);
}

export const fetchUserRepoData = (userName) => {
    const url = window.encodeURI(`https://api.github.com/users/${userName}/repos?per_page=100`);

    return axios.get(url)
        .then(resp => resp.data);
}