import React from 'react';
import PropTypes from 'prop-types';


const Post = ({post}) => (
  <div >{post.title?post.title:'i have no title'} <span>  delete post</span></div>
);


// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   clickFUn:PropTypes.Fun.isRequired
// };

export default Post;
