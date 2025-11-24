import todoReducer from './reducer';
import type { TodoAction } from './actions';
import { createStore, type Dispatch } from 'redux';

const store = createStore(todoReducer);

export type AppDispatch = Dispatch<TodoAction>;
export default store;
