// src/App.js

import  { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://inshorts.vercel.app/news/top');
        console.log('API Response:', response.data); // Debugging line
        if (response.data && response.data.data) {
          setNews(response.data.data.articles);
        } else {
          setNews([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Top News</h1>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {news.length > 0 ? (
            news.map((article, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card>
                  <Card.Header>{article.title}</Card.Header>
                  <Card.Img variant="top" src={article.imageUrl} />
                  <Card.Body>
                    <Card.Text>{article.content}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {article.authorName} 
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center">
              <p>No news articles available.</p>
            </div>
          )}
        </Row>
      )}
    </Container>
  );
};

export default App;
