import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';
const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com"
};

function App() {
 

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;