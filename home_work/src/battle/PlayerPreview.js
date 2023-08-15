const PlayerPreview = ({avatar, userName, children}) => {
    return (<div>
        <div className="column">
            <img src={avatar} alt="Avatar"/>
            <h2 className="username">@{userName}</h2>
            {children}
        </div>
    </div>)
}

export default PlayerPreview;