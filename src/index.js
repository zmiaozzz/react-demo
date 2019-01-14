import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppRouter from './router';
import appReducers from './reducers';
import FetchApi from './tools/request';

const reduxEnhancers = compose(
    applyMiddleware(thunk),
    (window && window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const store = createStore(appReducers, {}, reduxEnhancers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
