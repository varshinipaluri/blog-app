import React from "react";

interface HeaderProps {
  onCreateBlog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCreateBlog }) => {
  return (
    <header className="flex flex-col items-center bg-blue-500 text-white p-5">
      <h1 className="text-2xl mb-2">Blogger's World</h1>
      <button onClick={onCreateBlog} className="bg-white text-black px-4 py-2 rounded">Create Blog</button>
    </header>
  );
};

export default Header;
