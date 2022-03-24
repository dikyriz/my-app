import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from './reducers/index';
import rootReducer from './reducers';
// const store = createStore(ShopApp,applyMiddleware(thunkMiddleware));
export default createStore(rootReducer);
// export default store;