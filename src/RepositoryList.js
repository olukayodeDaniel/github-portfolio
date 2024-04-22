import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Text, Input, Select } from '@chakra-ui/react';
import './RepositoryList.css'; 
import { Link } from 'react-router-dom';

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('name');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/user/repos?page=${currentPage}&per_page=${reposPerPage}`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
          }
        });
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, [currentPage, reposPerPage]);

  // Apply search filter
  const filteredRepos = repos.filter(repo => repo[filterCriteria].toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastRepo = Math.min(currentPage * reposPerPage, filteredRepos.length);
  const indexOfFirstRepo = Math.max(indexOfLastRepo - reposPerPage, 0);
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box maxW="800px" m="auto" p="4" className="glassmorphism-container">
      {/* Search and filter */}
      <Box mb="4" className="glassmorphism-input-container">
        <Input
          placeholder="Search by repository name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="glassmorphism-input"
        />
        <Select
          ml="2"
          value={filterCriteria}
          onChange={e => setFilterCriteria(e.target.value)}
            className="glassmorphism-select"
        >
          <option value="name">Name</option>
          <option value="description">Description</option>
          <option value="language">Language</option>
        </Select>
      </Box>

      {/* Display repository list */}
      {currentRepos.map(repo => (
        <Box key={repo.id} className="glassmorphism-card">
         <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
         <Text fontWeight="bold">{repo.name}</Text>
         </Link> 
          <Text>{repo.description}</Text>
        </Box>
      ))}

      {/* Pagination */}
      <Box mt="4">
        {Array.from({ length: Math.ceil(filteredRepos.length / reposPerPage) }, (_, i) => (
          <Button
            key={i + 1}
            mr="2"
            onClick={() => paginate(i + 1)}
            colorScheme={currentPage === i + 1 ? "blue" : undefined}
            className="glassmorphism-pagination-button"
          >
            {i + 1}
          </Button>
        ))}
      </Box>

      {/* Pagination controls */}
      <Button onClick={prevPage} disabled={currentPage === 1} className="glassmorphism-pagination-button">Previous</Button>
      <Button onClick={nextPage} disabled={indexOfLastRepo >= filteredRepos.length} className="glassmorphism-pagination-button">Next</Button>
    </Box>
  );
}

export default RepositoryList;
