import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import PostTableRow from "./PostTableRow";

export default function PostsTable({posts, handleDeleteOpen, handleUpdateOpen}) {
    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">User Id</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Post</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <PostTableRow
                                post={post}
                                openDeleteDialogHandler={() => handleDeleteOpen(post)}
                                openUpdateDialogHandler={() => handleUpdateOpen(post)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}