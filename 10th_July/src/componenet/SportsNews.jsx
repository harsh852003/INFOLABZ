// src/components/SportsNews.js
import React, { useEffect, useState } from 'react';

const SportsNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://inshortsapi.vercel.app/news?category=sports')
      .then(response => response.json())
      .then(data => setNews(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Sports News</h1>
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {news.map((article, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.author}</td>
                  <td>{article.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
