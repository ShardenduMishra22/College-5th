import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './components/TodoApp';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
