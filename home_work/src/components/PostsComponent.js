import React, {useState} from "react";
import {Button} from "@mui/material";
import CreatePostDialog from "./dialogs/CreatePostDialog";
import UpdatePostDialog from "./dialogs/UpdatePostDialog";
import DeletePostDialog from "./dialogs/DeletePostDialog";
import PostsTable from "./PostsTable";

function PostsComponent({posts, deletePostHandler, updatePostHandler, createPostHandler}) {
    const [createPostOpen, setCreatePostOpen] = useState(false);
    const [updatePostOpen, setUpdatePostOpen] = useState(false);
    const [deletePostOpen, setDeletePostOpen] = useState(false);
    const [postToCreate, setPostToCreate] = useState([]);
    const [postToUpdate, setPostToUpdate] = useState([]);
    const [postToDelete, setPostToDelete] = useState([]);

    const handleCreateOpen = () => {
        setCreatePostOpen((prevState) => !prevState);
    }
    const handleCreateClosed = () => {
        setCreatePostOpen((prevState) => !prevState);
        setPostToCreate([]);
    }
    const handleCreateSubmitted = () => {
        setCreatePostOpen((prevState) => !prevState);
        createPostHandler(postToCreate);
        setPostToCreate([]);
    }
    const handleUpdateOpen = (post) => {
        setUpdatePostOpen((prevState) => !prevState);
        setPostToUpdate(post);
    }
    const handleUpdateClosed = () => {
        setUpdatePostOpen((prevState) => !prevState);
        setPostToUpdate([]);
    }
    const handleUpdateSubmitted = () => {
        setUpdatePostOpen((prevState) => !prevState);
        updatePostHandler(postToUpdate);
        setPostToUpdate([])
    };
    const handleDeleteOpen = (post) => {
        setDeletePostOpen((prevState) => !prevState);
        setPostToDelete(post);
    };
    const handleDeleteClose = () => {
        setDeletePostOpen((prevState) => !prevState);
        setPostToDelete([])
    };
    const handleDeleteSubmitted = () => {
        setDeletePostOpen((prevState) => !prevState);
        deletePostHandler(postToDelete);
        setPostToDelete([])
    };

    const handleIdChanged = (e) => {
        setPostToCreate((prevPost) => ({ ...prevPost, id : e.target.value }));
    };
    const handleUserIdChanged = (e) => {
        setPostToCreate((prevPost) => ({ ...prevPost, userId : e.target.value }));
    };
    const handleTitleChanged = (e) => {
        setPostToCreate((prevPost) => ({ ...prevPost, title : e.target.value }));
    };
    const handlePostChanged = (e) => {
        setPostToCreate((prevPost) => ({ ...prevPost, body : e.target.value }));
    };
    const handleUpdatedPostTitleChanged = (e) => {
        setPostToUpdate((prevPost) => ({ ...prevPost, title : e.target.value }));
    };
    const handleUpdatedPostBodyChanged = (e) => {
        setPostToUpdate((prevPost) => ({ ...prevPost, body : e.target.value }));
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleCreateOpen}>Create Post</Button>
            <CreatePostDialog
                open={createPostOpen}
                closeHandler={handleCreateClosed}
                submitHandler={handleCreateSubmitted}
                idChangedHandler={handleIdChanged}
                userIdChangedHandler={handleUserIdChanged}
                titleChangedHandler={handleTitleChanged}
                postChangedHandler={handlePostChanged}
                />
            <UpdatePostDialog
                open={updatePostOpen}
                post={postToUpdate}
                closeHandler={handleUpdateClosed}
                submitHandler={handleUpdateSubmitted}
                titleChangedHandler={handleUpdatedPostTitleChanged}
                postChangedHandler={handleUpdatedPostBodyChanged}
            />
            <DeletePostDialog
                open={deletePostOpen}
                closeHandler={handleDeleteClose}
                submitHandler={handleDeleteSubmitted}
            />
            <PostsTable posts={posts}
                        handleDeleteOpen={handleDeleteOpen}
                        handleUpdateOpen={handleUpdateOpen}
            />
        </div>
    );
}

export default PostsComponent;