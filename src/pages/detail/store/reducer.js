import { fromJS } from 'immutable';
import * as actionTypes from './action-types';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_DETAIL: 
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      })
    default:
      return state;
  }
}