import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = username || '';
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await api.get(`/search/users?q=${encodeURIComponent(query.trim())}`, {
      params: {
        per_page: 20, // Limit results per page
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};