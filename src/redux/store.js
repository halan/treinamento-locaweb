import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules';

const devTools = () => window.devToolsExtension && window.devToolsExtension();

export default createStore(reducer, {}, compose(applyMiddleware(thunk), devTools()));
