import Router from '@/Router';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
