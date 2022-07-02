import { createStore , applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk),
);

export default store;