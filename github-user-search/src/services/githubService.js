import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

export const searchUsers = async (query) => {
  try {
    const response = await api.get('/search/users', {
      params: {
        q: query,
        per_page: 20 // Limit results per page
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};