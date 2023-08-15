import PlayerPreview from "./PlayerPreview";
import React from "react";
import {Box} from "@mui/material";

const PlayerBattleResultPreview = ({userData, score, battleStatus}) => {
    return <div className="column">
        <Box sx={{ display: 'block', displayPrint: 'none' }}>
            {battleStatus}
        </Box>
        <Box sx={{ display: 'block', displayPrint: 'none' }}>
            Total core: {score}
        </Box>
        <PlayerPreview
            avatar={userData.avatar_url}
            userName={userData.login}
        >
            <Box>Name: {userData.name}</Box>
            <Box>Location: {userData.location}</Box>
            <Box>Company: {userData.company}</Box>
            <Box>Followers : {userData.followers}</Box>
            <Box>Following: {userData.following}</Box>
            <Box>Public repos: {userData.public_repos}</Box>
            <Box title="">Blog: {userData.blog}</Box>
        </PlayerPreview>
    </div>
}

export default PlayerBattleResultPreview;