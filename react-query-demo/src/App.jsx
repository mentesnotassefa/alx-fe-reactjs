import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';

// Step 1: Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Step 2: Wrap your application with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      {/* Step 3: Render the PostsComponent */}
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;