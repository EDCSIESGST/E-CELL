import React from 'react';
import './StartupTable.css'; // Create this CSS file for styling
import startupData from './startupData.json'; // Import the JSON data

function StartupTable() {
  return (
   
    <div className="table-container container">
      <table>
        <thead>
          <tr>
            <th>Startup Name</th>
            <th>Position</th>
            <th>Founder Name</th>
            <th>Contact</th>
            <th>Startup Year</th>
            <th>Passout Year</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {startupData.map((startup, index) => (
            <tr key={index}>
              <td>{startup.name}</td>
              <td>{startup.domain}</td>
              <td>{startup.founder}</td>
              <td><a>{startup.registration}</a></td>
              <td>{startup.startupYear}</td>
              <td>{startup.passoutYear}</td>
              <td>{startup.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  );
}

export default StartupTable;
