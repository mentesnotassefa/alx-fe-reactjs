import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GitHub users..."
          />
          <button type="submit">Search</button>
        </form>
      </main>
    </div>
  );
}

export default App;