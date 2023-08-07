import axios from "axios";

export const fetchRepos = (language) => {
    const url = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars`);

    return axios.get(url)
        .then(resp => resp.data.items)
}