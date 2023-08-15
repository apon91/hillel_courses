import {useDispatch, useSelector} from "react-redux";
import {setUserNameAction} from "../redux/battle/battle.actions";

const PlayerInput = ({id, label, onSubmit}) => {
    const dispatch = useDispatch();
    const userName = useSelector(state =>  state.battle[`${id}Name`]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, userName);
    }

    return <form className="column" onSubmit={handleSubmit}>
        <label className="header" htmlFor={label}>{label}</label>
        <input
            type="text"
            id={label}
            placeholder="Githab user name"
            autoComplete="off"
            value={userName}
            onChange={(event) => dispatch(setUserNameAction(id, event.target.value))}
        />
        <button className="button" disabled={userName && !userName.length}>Submit</button>
    </form>
}

export default PlayerInput;