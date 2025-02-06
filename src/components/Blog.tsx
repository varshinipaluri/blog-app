import React from "react";
import { Blog } from "../types/blogTypes";  
interface BlogProps {
  blog: Blog;
  onRead: () => void;
  onLike: () => void;
  onComment: () => void;
  onUpdate: () => void;
  onDelete: () => void;
}

const Blog: React.FC<BlogProps> = ({ blog, onRead, onLike, onComment, onUpdate, onDelete }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <img src={blog.imageUrl} alt="Blog Image" className="w-50 h-auto object-cover rounded mb-2" />
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-700">{blog.content}</p>
      <p className="text-gray-500">👀 {blog.views} | ❤️ {blog.likes}</p>
      <div className="mt-2">
        <button onClick={onRead} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Read</button>
        <button onClick={onLike} className="bg-pink-500 text-white px-3 py-1 rounded mr-2">Like</button>
        <button onClick={onComment} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Comment</button>
        <button onClick={onUpdate} className="bg-yellow-500 text-black px-3 py-1 rounded mr-2">Update</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
      <div className="mt-2">
        <h3 className="font-bold">Comments:</h3>
        {blog.comments.length > 0 ? (
          blog.comments.map((comment, i) => (
            <p key={i} className="text-gray-600">- {comment}</p>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
