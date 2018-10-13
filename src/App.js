import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom';
import Home from './pages/homepage';
import Posts from './pages/postsPage';
import Post from './components/post';
import prodectPage from './pages/productPage.js';
const posts = [{
        slug: 'npm install react-router-dom',
        title: 'install react routing'
    },
    {
        slug: 'using that line import { BrowserRouter as Router, Route, Link } from "react-router-dom";',
        title: 'import Routing'
    },
    {
        slug: 'Web, Native, Core',
        title: 'Routing type'
    }


]
const App = ({ welcomMessage,from,...rest }) => ( 
    <Router>
        <div> {welcomMessage} 
        <ul>
            <li>
                <Link to = '/home'> Blog Home </Link> 
            </li> 
            <li>
                <Link to = '/posts'>Blog Posts </Link> 
            </li> 
            <li >
                <Link to = '/product' >Blog product </Link> 
            </li> 
        </ul> 
        <Route path = "/home" component = {Home}/> 
        <Route path = "/posts"render = {(props) => < Posts { ...props} posts = {posts}/>}/ >
        <Route path = "/posts/:id" component = {Post} posts = {Posts}/> 
        <Route path = "/product" component = {prodectPage}/> 
        </div> 
    </Router>
)


export default App;