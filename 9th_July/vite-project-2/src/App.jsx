import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const [data, setData] = useState([]);
  const [intervalId, setIntervalId] = useState(null); // State to store interval ID

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const json = await response.json();
      setData(json.bpi.USD.rate);
    };
    
    fetchData();

    const handleInterval = async () => {
      await fetchData();
    };

    // Fetch data initially and set interval
    const newIntervalId = setInterval(handleInterval, 1000); // Update every 5 seconds
    setIntervalId(newIntervalId);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array

  return (
    <div className="App">
      <h1>Bitcoin Live Data</h1>
      {data.length > 0 && <h1>{data}</h1>}  {/* Conditionally render data */}
    </div>
  );
}

export default App;
