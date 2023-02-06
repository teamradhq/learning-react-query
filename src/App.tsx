import { useState } from 'react';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Example } from './Example';
const queryClient = new QueryClient();
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query</h1>
        <hr />
        <Example />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
