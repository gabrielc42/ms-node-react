import React from "react";
import PostCreate from "./PostCreate";
import PostList from './PostList';

const App = () => {
  return (
    <div className="container">
      <h1>h3ll0o :D Create a post!</h1>
      <PostCreate />
      <hr />
      <h1>Postz</h1>
      <PostList />
    </div>
  );
};

export default App;