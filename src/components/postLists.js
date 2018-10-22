// import React, {
//     Component
// } from 'react';
// import axios from 'axios';
//
// class PostList extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     users: []
//   };
// }
// componentDidMount() {
//   fetch('http://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(response => this.setState({'users' : response}))
// }
//
// render (){
// return <div className="container">
//     <h1>List of Users</h1>
//     <table className="table-striped table-condensed table table-bordered table-hover">
//       <tbody>{this.state.users.map((user , index)=>
//         <tr key={user.index}>
//           <td>{user.id}</td>
//           <td> {user.title}</td>
//           <td> {user.completed}</td>
//         </tr>)}
//       </tbody>
//     </table>
//   </div>
//
//
//
// }
// }
// export default PostList;
import React from 'react';

import Post from './post';



const PostsList = ({posts}) => (
  <div>
  number of avaliable posts
  <span>{posts.length}</span>
  {posts.map((post,index)=>(<Post key={index} post={post}/>))}
  </div>
);

export default PostsList;
