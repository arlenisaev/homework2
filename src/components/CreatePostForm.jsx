import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://dummyjson.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/posts');
      })
      .catch((error) => {
        console.error('Ошибка при создании поста:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        User ID:
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      <br />
      <button type="submit">Создать пост</button>
    </form>
  );
}

export default CreatePostForm;
