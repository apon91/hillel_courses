import React from "react";
import {Button, TableCell, TableRow} from "@mui/material";

export default function PostTableRow({post, openUpdateDialogHandler, openDeleteDialogHandler}) {
    return <TableRow
        key={post.id}
        sx={{'&:last-child td, &:last-child th': {border: 0}}}>
        <TableCell component="th" scope="row">{post.userId}</TableCell>
        <TableCell align="left">{post.title}</TableCell>
        <TableCell align="left">{post.body}</TableCell>
        <TableCell>
            <Button variant="outlined" onClick={openUpdateDialogHandler}>Update</Button>
            <Button variant="outlined" onClick={openDeleteDialogHandler}>Delete</Button>
        </TableCell>
    </TableRow>
}