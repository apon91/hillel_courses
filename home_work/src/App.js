import React, {useEffect, useState} from "react";
import PostsComponent from "./components/PostsComponent";
import {CircularProgress} from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);
  const [postsFetched, setPostsFetched] = useState(false);

  const deletePostHandler = (postToRemove) => {
    setPosts((current) =>
        current.filter((post) =>
            post.id !== postToRemove.id
        )
    );
  };

  const updatePostHandler = (postToUpdate) => {
    setPosts((current) =>
        current.map((post) =>
            post.id === postToUpdate.id ? postToUpdate : post
        )
    );
  }

  const createPostHandler = (postToCreate) => {
    setPosts((previous) =>
        [...previous, postToCreate]
    );
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setPosts(json);
          setPostsFetched(true);
        })
        .catch(error => console.log(error));
  }, []);


    return (
        <div>
            {postsFetched
                ? <PostsComponent posts={posts}
                                deletePostHandler={deletePostHandler}
                                updatePostHandler={updatePostHandler}
                                createPostHandler={createPostHandler}/>
                : <CircularProgress/>
            }
        </div>
    );
}

export default App;
