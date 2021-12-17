import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comments = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comments);
  } else if (req.method === "DELETE") {
    const deleteComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );

    comments.splice(index, 1, { id: 3, text: "data no 3" });

    res.status(200).json(deleteComment);
  }
}
