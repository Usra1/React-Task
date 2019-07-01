import React,{ Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import PostList from './PostList';



class PostListProps extends Component {

    constructor(props){
        super(props);
        this.imageClick = this.imageClick.bind(this);

    }

    imageClick(event){
         event.preventDefault();
        alert('helo');
    }
  render() {
      const {post} = this.props
    return (
      <div>
          <img src={post.avatar} onClick={this.imageClick} />
          <h3>{post.name}</h3>
      </div>

    )
  }
}
export default PostListProps;