import {Button} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import React from "react";

export default function DeletePostDialog({open, closeHandler, submitHandler}) {
    return (
        <div>
            <Dialog open={open}
                    onClose={closeHandler}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Confirm post removal"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure want to remove Post?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeHandler}>No</Button>
                    <Button onClick={submitHandler}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}