import React, { useState } from "react";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async (e) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteHandler = async (id) => {
    const response = await fetch("/api/comments/" + id, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Coment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((item, index) => {
        return (
          <div key={index}>
            {item.id} {item.text}
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default CommentPage;
