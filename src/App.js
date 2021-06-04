import {Provider} from 'react-redux';
import store from './store';
import "./styles.css";
import CompA from './components/compA';
import CompB from './components/compB';

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Task 3:</h1>
      <h2>React App. It implements redux for state management.</h2>
      <CompA />
      <CompB />
    </div>
    </Provider>
  );
}
