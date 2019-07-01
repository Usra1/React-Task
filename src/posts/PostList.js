import React, { Component } from 'react';
import PostData from '../data/posts.json';

class PostList extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedPost:  null
    }

  }

  onPostSelect(post){
    this.setState({ selectedPost: post}) 
  }

  renderPost(post){
    if(post != null){
      return(
        <div className="row">
          <div className="render-image">
          <img src={post.avatar} className="render-image-1" />
            <h5 className="render-h5">{post.name}</h5>
            </div>
            <div className="render-list">
            <p className="render-p"><span className="render-span">Mobile: &nbsp; &nbsp;</span> {post.mobile}</p>
            <p className="render-p"><span className="render-span">Home: &nbsp; &nbsp;</span> {post.home}</p>
            <p className="render-p"><span className="render-span">Company: &nbsp; &nbsp;</span> {post.company}</p>
            <p className="render-p"><span className="render-span">Work: &nbsp; &nbsp;</span> {post.work}</p>
            <p className="render-p"><span className="render-span">Notes: &nbsp; &nbsp;</span> {post.note}</p>
            </div>
        </div>
      );

    }
    else {
      return(
        <div></div>
      );
    }
  }

  render(){

    const menu = PostData.map((post, index) =>{
      return(
        <li key={post.id}>
            <div onClick={() => this.onPostSelect(post)} >
                <img src={post.avatar} className="onclick-image"/>
                    <h5 className="onclick-h5">
                        {post.name}
                    </h5>
            </div>
        </li>
      );


    });
    return(
      <div className="container">
        <div className="row">
          <div className="side-list">
          <ul className="listclass">
            {menu}
            </ul>
            </div>
            <div className="down-list">
          {this.renderPost(this.state.selectedPost)}
          </div>
          </div>
        </div>

    );
  }
}

// class PostList extends Component {
//   render() {
//     return (
//       <div>
//         {PostData.map((postDetail, index) => {
//           return <PostListProps post={postDetail} key={`post-list-key ${index}`} />
//         })}
//       </div>

//     )
//   }
// }
export default PostList;