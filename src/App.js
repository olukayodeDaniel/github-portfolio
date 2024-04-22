import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';
import ErrorBoundary from './ErrorBoundary';
import NotFound from './NotFound'; // Import the NotFound component
import './App.css'; // Import the CSS file for global styles

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/user/repos`);
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="logo">
          <img src="./logo.svg" alt="Logo" /> 
          <h1>My GitHub Repositories</h1>
        </div>
        <Routes>
          <Route path="/" element={<RepositoryList repos={repos} />} />
          <Route path="/repos/:repoName" element={<RepositoryDetail />} />
          <Route path="*" element={<NotFound />} /> {/* Route for 404 page */}
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
