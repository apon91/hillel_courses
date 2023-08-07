function PopularRepos({repos}) {
    return <ul className='popular-list'>
        {repos.map((repo, index) => {
            return <li key={repo.id} className='popular-item'>
                <div className='popular-rank'>#{index + 1}</div>
                <ul className='space-list-items'>
                    <li>
                        <img className='avatar' src={repo.owner.avatar_url} alt="Avatar"/>
                    </li>
                    <li>
                        @{repo.owner.login}
                    </li>
                    <li>
                        {repo.stargazers_count} start
                    </li>
                </ul>
            </li>
        })}
    </ul>
}

export default PopularRepos;