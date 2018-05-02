import { combineReducers } from 'redux';
import MessagesReducer from './message_reducer';

const rootReducer = combineReducers({
  messages: MessagesReducer
});

export default rootReducer;