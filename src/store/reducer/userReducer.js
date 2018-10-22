
// import {GET_USER_DATA} from '../actions/actionTypes';

export default (state={test:"test"},action)=>{

  console.log('action',action);
  console.log('oldstate',state);
  console.log('PAYLOAD',action.payload);

  switch (action.type) {
    case 'SET_USER_DATE':
      return {};
      break;
      case 'DELETE_USER':
        return state;
        case 'UPDATE_USER':
          return state;
        break;
    default:
    return state;

  }


}
