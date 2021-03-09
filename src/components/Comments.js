import React from "react";
import CommentItem from "./CommentItem";

const Comments = ({ comments }) => {
  return comments.map((item) => {
    return <CommentItem comment={item} key={item.id} />;
  });
};

export default Comments;
