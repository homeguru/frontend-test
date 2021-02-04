import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));