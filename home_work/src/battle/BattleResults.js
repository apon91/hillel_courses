import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {
    fetchUserData,
    fetchUserRepoData
} from "../api";
import {CircularProgress} from "@mui/material";
import PlayerBattleResultPreview from "./PlayerBattleResultPreview";
import {calculateScore, getPlayerStatus} from "./utils";

const BattleResults = () => {
    const [error, setError] = useState(null);
    const [userOneData, setUserOneData] = useState(null);
    const [userTwoData, setUserTwoData] = useState(null);
    const [userOneRepoData, setUserOneRepoData] = useState(null);
    const [userTwoRepoData, setUserTwoRepoData] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userOne = searchParams.get("playerOneName");
    const userTwo = searchParams.get("playerTwoName");

    useEffect(() => {
        fetchUserData(userOne)
            .then(resp => setUserOneData(resp))
            .catch(error => setError(error));
    }, []);
    useEffect(() =>  {
        fetchUserData(userTwo)
            .then(resp => setUserTwoData(resp))
            .catch(error => setError(error));
    }, []);
    useEffect(() =>  {
        fetchUserRepoData(userOne)
            .then(resp => setUserOneRepoData(resp))
            .catch(error => setError(error));
    }, []);
    useEffect(() =>  {
        fetchUserRepoData(userTwo)
            .then(resp => setUserTwoRepoData(resp))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <h1>Error happened. Please try again later</h1>
    }

    if (userOneData == null || userOneRepoData == null || userTwoData == null || userTwoRepoData == null) {
        return <CircularProgress/>;
    }

    const userOneScore = calculateScore(userOneRepoData, userOneData);
    const userTwoScore = calculateScore(userTwoRepoData, userTwoData);
    const userOneStatus = getPlayerStatus(userOneScore, userTwoScore);
    const userTwoStatus = getPlayerStatus(userTwoScore, userOneScore);

    return (
        <div className="row">
            <PlayerBattleResultPreview
                userData={userOneData}
                score={userOneScore}
                battleStatus={userOneStatus}
            />
            <PlayerBattleResultPreview
                userData={userTwoData}
                score={userTwoScore}
                battleStatus={userTwoStatus}
            />
        </div>
    )
};

export default BattleResults;