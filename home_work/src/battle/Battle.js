import PlayerInput from "./PlayerInput";
import {useCallback, useState} from "react";
import PlayerPreview from "./PlayerPreview";
import {Link} from "react-router-dom";

function Battle() {
    const [playerData, setPlayerData] = useState({
        playerOneName: null,
        playerTwoName: null,
        playerOneImage : null,
        playerTwoImage : null
    });

    const handleSubmit = useCallback((id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }));
    }, []);

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: null,
            [`${id}Image`]: null
        }));
    }

    return (<div>
        <div className="row">
            {playerData.playerOneImage ?
                <PlayerPreview
                    userName={playerData.playerOneName}
                    avatar={playerData.playerOneImage}
                >
                    <button className="reset"  onClick={() => handleReset("playerOne")}>Reset</button>
                </PlayerPreview> :
                <PlayerInput
                    id="playerOne"
                    label="Player 1"
                    onSubmit={handleSubmit}
                />
            }
            {playerData.playerTwoImage ?
                <PlayerPreview
                    userName={playerData.playerTwoName}
                    avatar={playerData.playerTwoImage}
                >
                    <button className="reset" onClick={() => handleReset("playerTwo")}>Reset</button>
                </PlayerPreview> :
                <PlayerInput
                    id="playerTwo"
                    label="Player 2"
                    onSubmit={handleSubmit
                }/>
            }
        </div>
        {playerData.playerOneImage && playerData.playerTwoImage
            ? <Link
                to={{
                    pathname: "results",
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }}
                className="button">Battle</Link>
            : null}
    </div>);
}

export default Battle;