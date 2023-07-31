import {TextField} from "@mui/material";

export default function UserDetailsComponent({firstNameErrorText, lastNameErrorText, handleFirstNameChanged, handleLastNameChanged}) {
    return (<div>
        <TextField required
                   id="firstName"
                   margin="dense"
                   fullWidth
                   label="First Name"
                   error={firstNameErrorText.length > 0}
                   onChange={(e) => handleFirstNameChanged(e.target.value)}
                   helperText={firstNameErrorText}
        />
        <TextField required
                   id="lastName"
                   margin="dense"
                   fullWidth
                   label="Last Name"
                   error={lastNameErrorText.length > 0}
                   onChange={(e) => handleLastNameChanged(e.target.value)}
                   helperText={lastNameErrorText}
        />
    </div>)
}