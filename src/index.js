import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import App from './Components/App';
import ConfigureStore from './store/configureStore';
import rootReducer from './reducers';

const store = ConfigureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
