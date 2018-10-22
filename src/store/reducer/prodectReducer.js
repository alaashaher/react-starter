import {intial_load_prodects,load_prodects} from '../actions/productsActions'
const initialState = [
  {
    id :111,
    title: 'fkjfj'
  },
  {
    id :15,
    title: 'fkdjv'
  }
];

export default(state=initialState,action) => {

  switch (action.type) {
    case intial_load_prodects:
      return action.payload.products;
      break;
    case load_prodects:
      return state;
      break;
    default:
      return state;
  }
}
