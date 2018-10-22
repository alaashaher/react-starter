import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import store from './store/store.js';
import {Provider,connect} from 'react-redux';

import Home from './pages/homepage'
import Posts from './pages/postsPage';


const App = ({
  welcomMessage,
  from,
  products,
  onclick,
  ...rest
}) => {
  return (


<Router>
  <div>
  {products.map(product=><li key={product.id}>{product.title}</li>)}

    {welcomMessage}

    <ul>
      <li onClick={onclick}>
      dispatch intial component
        /* <NavLink to='/home'>
        //   Home</NavLink>*/
      </li>
      <li>
        <NavLink to='/posts'>Posts</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact='true' path="/home" component={Home}/>
      <Route path="/posts" component={Posts}/>
    </Switch>
  </div>
</Router>)};
const mapStateToProperty=state=>({products:state.prodectReducer})
const mapDispatchToProp=dispatch=>({onclick:()=>dispatch({type:'INITAL_PRODUCTS'})})
export default connect(mapStateToProperty,mapDispatchToProp)(App);
