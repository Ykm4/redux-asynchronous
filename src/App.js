import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
