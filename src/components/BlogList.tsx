import React from "react";
import Blog from "./Blog";
import { Blog as BlogType } from "../types/blogTypes"; // Import Blog type

interface BlogListProps {
  blogs: BlogType[];
  onRead: (index: number) => void;
  onLike: (index: number) => void;
  onComment: (index: number) => void;
  onUpdate: (index: number) => void;
  onDelete: (index: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onRead, onLike, onComment, onUpdate, onDelete }) => {
  return (
    <div className="p-5">
      {blogs.map((blog, index) => (
        <Blog
          key={index}
          blog={blog}
          onRead={() => onRead(index)}
          onLike={() => onLike(index)}
          onComment={() => onComment(index)}
          onUpdate={() => onUpdate(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default BlogList;
