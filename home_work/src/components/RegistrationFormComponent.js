import {Button} from "@mui/material";
import UserDetailsComponent from "./UserDetailsComponent";
import UserCredentialsComponent from "./UserCredentialsComponent";
import {useEffect, useState} from "react";
import {isEmailValid, isFirstNameValid, isLastNameValid, isPasswordValid} from "../utils/ValidationUtils";

export default function RegistrationFormComponent() {
    const [userDetails, setUserDetails] = useState({firstName: '', lastName: ''});
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const [inputValid, setInputValid] = useState(false);
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const [firstNameErrorText, setFirstNameErrorText] = useState("");
    const [lastNameErrorText, setLastNameErrorText] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [emailErrorText, setEmailErrorText] = useState("");

    const handleFirstNameChanged = (firsName) => {
        setUserDetails((previous) => ({ ...previous, firstName : firsName}));
        setFirstNameValid(isFirstNameValid(firsName));
    };
    useEffect(() => {
        setFirstNameErrorText(firstNameValid ? "" : "First name can not be empty or contain numbers");
        updateButtonState();
    }, [firstNameValid]);

    const handleLastNameChanged = (lastName) => {
        setUserDetails((previous) => ({ ...previous, lastName : lastName}));
        setLastNameValid(isLastNameValid(lastName));
    }
    useEffect(() => {
        setLastNameErrorText(lastNameValid ? "" : "Last name can not be empty or contain numbers");
        updateButtonState();
    }, [lastNameValid]);

    const handlePasswordChanged = (password) => {
        setUserCredentials((previous) => ({ ...previous, password : password}));
        setPasswordValid(isPasswordValid(password));
    }
    useEffect(() => {
        setPasswordErrorText(passwordValid ? "" : "Invalid Password. It should consists of 6-10 symbols, contains numbers and symbols.");
        updateButtonState();
    }, [passwordValid]);
    const handleEmailChanged = (email) => {
        setUserCredentials((previous) => ({ ...previous, email : email}));
        setEmailValid(isEmailValid(email));
    }
    useEffect(() => {
        setEmailErrorText(emailValid ? "" : "Invalid email format.");
        updateButtonState();
    }, [emailValid]);


    const submit = () => {
        console.log("Submitted for user = " + userDetails.firstName + " credentials = " + userCredentials.email)
    }

    const updateButtonState = () => {
        const allFieldsAreSet = userDetails.lastName.length > 0
            && userDetails.firstName.length > 0
            && userCredentials.email.length > 0
            && userCredentials.password.length > 0;
        const allFieldsAreValid = firstNameValid && lastNameValid && emailValid && passwordValid;
        setInputValid(allFieldsAreSet && allFieldsAreValid)
    }

    return(<form>
        <UserDetailsComponent firstNameErrorText={firstNameErrorText}
                              lastNameErrorText={lastNameErrorText}
                              handleFirstNameChanged={handleFirstNameChanged}
                              handleLastNameChanged={handleLastNameChanged}/>
        <UserCredentialsComponent emailErrorText={emailErrorText}
                                  passwordErrorText={passwordErrorText}
                                  handleEmailChanged={handleEmailChanged}
                                  handlePasswordChanged={handlePasswordChanged}/>
        <Button variant="contained" disabled={!inputValid} onClick={submit}>Register</Button>
    </form>)
}