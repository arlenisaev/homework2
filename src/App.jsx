import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/PostList';

function App() {
  return (
    <Routes>
      <Route exact path="/create-post" element={<CreatePostForm />}/>
      <Route exact path="/" element={<PostList />}/>
    </Routes>
  );
}

export default App;
