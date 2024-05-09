import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./Homepage.css"; // Importing CSS file for styling

const HomePage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description for Blog Post 1",
    },
    {
      id: 2,
      title: "Blog Post 2",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description for Blog Post 2",
    },
    {
      id: 3,
      title: "Blog Post 3",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description for Blog Post 3",
    },
  ];

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">Latest Blogs</div>
        {/* Use Link component to navigate to '/login' route */}
        <Link to="/login" className="login-button">
          Login
        </Link>
      </nav>
      <div className="blog-posts">
        <h2>Latest Blog Posts</h2>
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <div className="blog-details">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
