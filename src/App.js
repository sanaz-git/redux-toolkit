import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import PostList from './PostList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux toolkit</h1>
        <Counter />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
