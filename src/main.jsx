import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider dari React-Redux
import { store } from './app/store'; // Import store Redux

ReactDOM.render(
  <React.StrictMode>
    {/* Bungkus App dengan Provider untuk memberikan akses store Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);