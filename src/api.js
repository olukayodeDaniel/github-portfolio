async function fetchRepositories(pageNumber) {
    
    const url = `https://api.github.com/users/olukayodeDaniel/repos`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error fetching repositories: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching repositories:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
      return []; // Return an empty array in case of error
    }
}  
 
export default fetchRepositories;
  