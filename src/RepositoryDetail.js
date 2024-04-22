// RepositoryDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RepositoryDetail.css'; // Import the CSS file for styling

const RepositoryDetail = ({ repos }) => {
  return (
    <div className="repository-detail-container">
      {/* Display repository list */}
      {repos.map(repo => (
        <div key={repo.id} className="repository-item">
          <h2>
            <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
          </h2>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RepositoryDetail;
