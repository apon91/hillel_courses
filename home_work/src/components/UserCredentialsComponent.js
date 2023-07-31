import {TextField} from "@mui/material";

export default function UserCredentialsComponent({emailErrorText, passwordErrorText, handleEmailChanged, handlePasswordChanged}) {
    return (<div>
        <TextField required
                   id="email"
                   margin="dense"
                   fullWidth
                   label="Email"
                   error={emailErrorText.length > 0}
                   onChange={(e) => handleEmailChanged(e.target.value)}
                   helperText={emailErrorText}
        />
        <TextField required
                   id="password"
                   margin="dense"
                   fullWidth
                   type={"password"}
                   label="Password"
                   error={passwordErrorText.length > 0}
                   onChange={(e) => handlePasswordChanged(e.target.value)}
                   helperText={passwordErrorText}
        />
    </div>)
}