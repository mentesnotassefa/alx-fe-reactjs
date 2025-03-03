// src/App.jsx
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
     <h1>User Registration</h1>
      <div style={{ marginBottom: '40px' }}>
        <RegistrationForm />
      </div>
      <div>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;