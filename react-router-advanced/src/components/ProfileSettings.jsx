function ProfileSettings() {
    return (
      <div>
        <h2>Profile Settings</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter a new password" />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
  
  export default ProfileSettings;