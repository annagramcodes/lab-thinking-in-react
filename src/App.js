import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import ProduktPage from './components/ProduktPage';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ProduktPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
