import {Button, TextField} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

export default function CreatePostDialog({
											 open,
											 closeHandler,
											 submitHandler,
											 idChangedHandler,
											 userIdChangedHandler,
											 titleChangedHandler,
											 postChangedHandler
										 }) {
	return (
		<div>
			<Dialog open={open} onClose={closeHandler}>
				<DialogTitle>Create Post</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Create Post
					</DialogContentText>
					<TextField required
							   id="id"
							   margin="dense"
							   fullWidth
							   label="Id"
							   onChange={idChangedHandler}
					/>
					<TextField required
							   id="userId"
							   margin="dense"
							   fullWidth
							   label="User Id"
							   onChange={userIdChangedHandler}
					/>
					<TextField required
							   id="title"
							   margin="dense"
							   fullWidth
							   label="Title"
							   onChange={titleChangedHandler}
					/>
					<TextField required
							   id="post"
							   margin="dense"
							   fullWidth
							   label="Post"
							   onChange={postChangedHandler}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeHandler}>Cancel</Button>
					<Button onClick={submitHandler}>Create</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}