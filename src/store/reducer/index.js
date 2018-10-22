import {combineReducers} from 'redux';

import postsReducer from './postsReducer';
import prodectReducer from './prodectReducer';
import userReducer from './userReducer';




export default combineReducers ({
  Posts:postsReducer,
  prodectReducer,
  userReducer
});
