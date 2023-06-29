import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error('Ошибка при получении постов:', error));
  };

  const deletePost = (postId) => {
    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        fetchPosts();
      })
      .catch((error) => console.error('Ошибка при удалении поста:', error));
  };

  return (
    <div>
      <h1>Список постов</h1>
      <Link to="/create-post">Создать новый пост</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Автор: {post.userId}</p>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
