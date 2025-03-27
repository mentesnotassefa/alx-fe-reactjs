import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username..."
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>

      <div className="results">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {userData && (
          <div className="user-card">
            <img src={userData.avatar_url} alt="User avatar" className="avatar" />
            <div className="user-info">
              <h2>{userData.name || userData.login}</h2>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;