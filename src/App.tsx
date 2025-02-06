// import { useState, useEffect } from "react";

// interface Blog {
//   title: string;
//   content: string;
//   imageUrl: string;
//   views: number;
//   likes: number;
//   comments: string[];
// }

// export default function BlogApp() {
//   const [blogs, setBlogs] = useState<Blog[]>(
//     JSON.parse(localStorage.getItem("blogs") || "[]")
//   );

//   useEffect(() => {
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   }, [blogs]);

//   const createBlog = () => {
//     const title = prompt("Enter blog title:");
//     const content = prompt("Enter blog content:");
//     const imageUrl = prompt("Enter image URL:");
//     if (title && content && imageUrl) {
//       setBlogs([...blogs, { title, content, imageUrl, views: 0, likes: 0, comments: [] }]);
//     }
//   };

//   const readBlog = (index: number) => {
//     const updatedBlogs = [...blogs];
//     updatedBlogs[index].views += 1;
//     setBlogs(updatedBlogs);
//     alert(updatedBlogs[index].content);
//   };

//   const updateBlog = (index: number) => {
//     const title = prompt("Update blog title:", blogs[index].title);
//     const content = prompt("Update blog content:", blogs[index].content);
//     const imageUrl = prompt("Update image URL:", blogs[index].imageUrl);
//     if (title && content && imageUrl) {
//       const updatedBlogs = [...blogs];
//       updatedBlogs[index] = { ...updatedBlogs[index], title, content, imageUrl };
//       setBlogs(updatedBlogs);
//     }
//   };

//   const deleteBlog = (index: number) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       setBlogs(blogs.filter((_, i) => i !== index));
//     }
//   };

//   const likeBlog = (index: number) => {
//     const updatedBlogs = [...blogs];
//     updatedBlogs[index].likes += 1;
//     setBlogs(updatedBlogs);
//   };

//   const addComment = (index: number) => {
//     const comment = prompt("Enter your comment:");
//     if (comment) {
//       const updatedBlogs = [...blogs];
//       updatedBlogs[index].comments.push(comment);
//       setBlogs(updatedBlogs);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="flex flex-col items-center bg-blue-500 text-white p-5">
//         <h1 className="text-3xl mb-2"><b>Blogger's World</b></h1>
//         <button onClick={createBlog} className="bg-white text-black px-3 py-2 rounded">Create Blog</button>
//       </header>
//       <main className="p-5">
//         {blogs.map((blog, index) => (
//           <div key={index} className="bg-white p-4 mb-4 rounded shadow">
//             <img src={blog.imageUrl} alt="Blog Image" className="w-40 h-auto object-cover rounded mb-2" />
//             <h2 className="text-xl font-bold">{blog.title}</h2>
//             <p className="text-gray-700">{blog.content}</p>
//             <p className="text-gray-500">👀 {blog.views} | ❤️ {blog.likes}</p>
//             <div className="mt-2">
//               <button onClick={() => readBlog(index)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Read</button>
//               <button onClick={() => likeBlog(index)} className="bg-pink-500 text-white px-3 py-1 rounded mr-2">Like</button>
//               <button onClick={() => addComment(index)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Comment</button>
//               <button onClick={() => updateBlog(index)} className="bg-yellow-500 text-black px-3 py-1 rounded mr-2">Update</button>
//               <button onClick={() => deleteBlog(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//             </div>
//             <div className="mt-2">
//               <h3 className="font-bold">Comments:</h3>
//               {blog.comments.length > 0 ? (
//                 blog.comments.map((comment, i) => (
//                   <p key={i} className="text-gray-600">- {comment}</p>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No comments yet.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import { Blog } from "./types/blogTypes"; // Import Blog type

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>(JSON.parse(localStorage.getItem("blogs") || "[]"));

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const createBlog = () => {
    const title = prompt("Enter blog title:");
    const content = prompt("Enter blog content:");
    const imageUrl = prompt("Enter image URL:");
    if (title && content && imageUrl) {
      setBlogs([...blogs, { title, content, imageUrl, views: 0, likes: 0, comments: [] }]);
    }
  };

  const readBlog = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].views += 1;
    setBlogs(updatedBlogs);
    alert(updatedBlogs[index].content);
  };

  const updateBlog = (index: number) => {
    const title = prompt("Update blog title:", blogs[index].title);
    const content = prompt("Update blog content:", blogs[index].content);
    const imageUrl = prompt("Update image URL:", blogs[index].imageUrl);
    if (title && content && imageUrl) {
      const updatedBlogs = [...blogs];
      updatedBlogs[index] = { ...updatedBlogs[index], title, content, imageUrl };
      setBlogs(updatedBlogs);
    }
  };

  const deleteBlog = (index: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((_, i) => i !== index));
    }
  };

  const likeBlog = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].likes += 1;
    setBlogs(updatedBlogs);
  };

  const addComment = (index: number) => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      const updatedBlogs = [...blogs];
      updatedBlogs[index].comments.push(comment);
      setBlogs(updatedBlogs);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header onCreateBlog={createBlog} />
      <main>
        <BlogList
          blogs={blogs}
          onRead={readBlog}
          onLike={likeBlog}
          onComment={addComment}
          onUpdate={updateBlog}
          onDelete={deleteBlog}
        />
      </main>
    </div>
  );
};

export default App;
