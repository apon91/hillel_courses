export const calculateScore = (repos, userData) => {
    return repos.reduce((previousScore, it) => previousScore + it.stargazers_count, 0) + userData.followers;
}

export const getPlayerStatus = (playerScore, opositePlayerScore) => {
    return playerScore > opositePlayerScore ? "Winner" : "Loser";
}

