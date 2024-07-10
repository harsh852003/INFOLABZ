// src/components/Spacecrafts.js
import React, { useEffect, useState } from 'react';

const Spacecrafts = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);

  useEffect(() => {
    fetch('https://isro.vercel.app/api/spacecrafts')
      .then(response => response.json())
      .then(data => setSpacecrafts(data.spacecrafts))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">ISRO Spacecrafts</h1>
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {spacecrafts.map((spacecraft, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{spacecraft.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Spacecrafts;
