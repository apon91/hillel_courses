import React, {useEffect, useState} from "react";
import {fetchRepos} from "../api";
import {CircularProgress} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import PopularRepos from "./PopularRepos";
import PopularTabs from "./PopularTabs";

const languages = ['All', 'Java', "Javascript", 'Python', 'Ruby']


function Popular() {
    const [searchParams, setSearchParams] = useSearchParams();
    const languageFromQuery = searchParams.get('language');
    const languageIndex = languages.indexOf(languageFromQuery);
    const activeIndex = languageIndex !== -1 ? languageIndex : 0;

    const [selectedLanguage, setSelectedLanguage] = useState(activeIndex);
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetchRepos(languages[selectedLanguage])
            .then(repos => setRepos(repos))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [selectedLanguage]);

    if(error) {
        return <p>Error while loading repositories. please try again later</p>
    }

    const onLanguageTabChanged = (index) => {
        if(loading) {
            return;
        }
        setSelectedLanguage(index);
        setSearchParams({language: languages[index]});
    }

    return <div>
        <PopularTabs languages={languages}
                     selectedLanguage={selectedLanguage}
                     onTabChanged={onLanguageTabChanged}
        />
        {repos == null
            ? <CircularProgress/>
            : <div className={loading ? 'overlay' : ''}>
                {loading ? <CircularProgress/> : null}
                <PopularRepos repos={repos}/>
            </div>
        }
    </div>
}

export default Popular;