import { createStore,applyMiddleware} from 'react';
import reducers from './reducer';
import thunk from 'redux-thunk';
const store= createStore(reducers,applyMiddleware(thunk))
export default store;