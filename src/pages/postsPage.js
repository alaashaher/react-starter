const React = require('react');

import {
  NavLink
} from 'react-router-dom';

const Posts = (props) => (<div>
  React Routing
    <ul>

      {props.posts.map((post, index) =>

      <li key={post.slug}><NavLink to={`/posts/${post.slug}`} >{post.title}</NavLink></li>
      )}

  </ul>
</div>
)

export default Posts;
