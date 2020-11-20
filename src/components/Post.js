import React from "react";
import Stories from "./Stories";
import Create from "./Create";

const Posts = () => {
  return (
    <div className="posts">
      <Stories />
      <Create />
    </div>
  );
};

export default Posts;
