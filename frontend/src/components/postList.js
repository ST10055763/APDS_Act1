import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Post = (props) => (
  <tr>
    <td>{props.post.user}</td>
    <td>{props.post.content}</td>
    <td>
      {props.post.image && (
        <img
          src={`data:image/jpeg;base64,${props.post.image}`} //Convert Base64 string to image
          alt="Post Image"
          style={{ naxWidth: '100px', maxHeight: '100px', objectFit: 'cover'}} //Ensures the image fits between the size parameters
        />
      )}
    </td>
    <td>
      <button className="btn btn-link"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function PostList() {
  const [posts, setPosts] = useState([]);

  //This method fetches the posts from the database
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`https://localhost:3001/post/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    getPosts();

    return;
  }, [posts.length]);

  //This message will delete a post
  async function deletePost(id) {
    const token = localStorage.getItem("jwt");
    await fetch(`https://localhost:3001/post/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const newPosts = posts.filter((el) => el._id !== id);
    setPosts(newPosts);
  }

  //This method will map out the posts on the table 
  function PostList() {
    return posts.map((post) => {
      return (
        <Post
          post={post}
          deletePost={() => deletePost(post._id)}
          key={post._id}
          />
      );
    });
  }

  return (
    <body>
    <div className="container">
      <h3 className="header">APDS Notice Board</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Caption</th>
            <th>Image</th>
            <th>Actions</th> {/* Added column for actions */}
          </tr>
        </thead>
        <tbody>
          {PostList()}
          {/* Here you'll map over your posts and render each row */}
          {/* Example:
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.user}</td>
              <td>{post.caption}</td>
              <td><img src={post.image} alt="post" /></td>
              <td>
                <Link to={`/edit/${post.id}`}>Edit</Link>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
    </body>
  );
}
