import {Button, TextField} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

export default function UpdatePostDialog({
											 open,
											 post,
											 closeHandler,
											 submitHandler,
											 titleChangedHandler,
											 postChangedHandler
										 }) {
	return (
		<div>
			<Dialog open={open} onClose={closeHandler}>
				<DialogTitle>Update Post</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Update Post
					</DialogContentText>
					<TextField required
							   id="title"
							   margin="dense"
							   fullWidth
							   label="Title"
							   onChange={titleChangedHandler}
							   defaultValue={post.title}
					/>
					<TextField required
							   id="post"
							   margin="dense"
							   fullWidth
							   label="Post"
							   onChange={postChangedHandler}
							   defaultValue={post.body}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeHandler}>Cancel</Button>
					<Button onClick={submitHandler}>Update</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}