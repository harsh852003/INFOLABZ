import { useState , useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://inshortsapi.vercel.app/news?category=sports');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Sports News</h1>
      {isLoading && <div className="alert alert-info">Loading news...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {newsData.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((newsItem) => (
              <tr key={newsItem.imageUrl}>
                <td>{newsItem.title}</td>
                <td>{newsItem.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {newsData.length === 0 && !isLoading && !error && (
        <div className="alert alert-warning">No sports news found.</div>
      )}
    </div>
  );
}

export default App
