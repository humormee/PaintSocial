import React from 'react';
import { Link } from 'react-router-dom';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)

    this.toggleLike = this.toggleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.eraseComment = this.eraseComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      comment: null,
      comments: null,
      painting: null
    };
  }

  componentDidMount() {
    
    this.props.fetchPaintings();
    
    this.props.fetchPainting(this.props.match.params.id)
      .then(painting => this.props.fetchArtist(painting.painting.data.artist))

    this.props.fetchPaintingComments(this.props.match.params.id);

    this.props.fetchPaintingLikes(this.props.match.params.id)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePainting(this.props.match.params.id)
    .then(() => this.props.history.push('/index'));
  }



  eraseComment(e) { 
    e.preventDefault();
    this.props.eraseComment(e.currentTarget.value).then(() => this.props.fetchPaintingComments(this.props.match.params.id));
  }


  handleSubmit(e, comment) {
    e.preventDefault();
    comment.description = this.state.comment;
    this.props.makeComment(comment).then(() => this.props.fetchPaintingComments(this.props.match.params.id));
    e.currentTarget.reset() 
  }

  
  createComment(e) {
    // e.preventDefault();
    let { user } = this.props.session;
    if(!user) {
      return null;
    }
    let comment = {};
    comment.commenter = user.id;
    comment.painting = this.props.match.params.id;
    comment.description = this.state.description;
    return (
      <div>
        <h2>create a comment</h2>
        <form className="comment-form" onSubmit={e => this.handleSubmit(e, comment)}>

          <textarea placeholder="add a comment" value={comment.description} onChange={e => this.updateComment(e)}>
          </textarea>
          <button type="submit">comment</button>

        </form>
      </div>
    )

  }

  updateComment(e) {
    this.setState({comment: e.currentTarget.value})
  }

  renderEraseButton(comment) {
    const { user } = this.props.session;
    if(!user || comment.commenter !== user.id) {
      return null
    }
    
      return (
        <div>
          <button className="delete-comment" value={comment._id} onClick={this.eraseComment}>Delete</button>
        </div>
      )
    
  }

   toggleLike(){ 
    
    for(let i = 0; i < this.props.likes.length; i++) {
      if(!this.props.session.user){
        return
      }
      else if(this.props.likes[i].liker === this.props.session.user.id) {
        let like = this.props.likes[i];
        this.props.eraseLike(like._id)
        this.props.fetchPaintingLikes(this.props.match.params.id);
        return
      }
    }

    this.props.makeLike(this.props.match.params.id)
        .then(() => this.props.fetchPaintingLikes(this.props.match.params.id))
    
  }
  renderButton() {
    const { user } = this.props.session;
    const artistId = this.props.painting.artist;
    
    if(!user) {
      return null;
    }
    if(user && artistId === user.id){
      return (
        <div>
          <button className="delete-painting" value={this.props.match.params.id} onClick={this.handleDelete}>Delete</button>
        </div>
      )
    }
  } 

  render() {
    
    let { artist } = this.props.entities.paintings
    let { painting, comments } = this.props
    // let { comments } = this.props

    if(!this.props.painting || !artist || !this.props.likes){
      return null;
    }
    return (
      <div className="painting-show">
        <h1 className="painting-title">{this.props.painting.title}</h1>
        <Link to={`/artist/${this.props.painting.artist}`}>
          <div className="painting-show-user">
            <h2>{artist.username}</h2>
            <p>{artist.email}</p>
          </div>
        </Link>
        <br />
        <img src={painting.painting_image} />
        {console.log(painting)}
        <br />
        <div>{this.renderButton()}</div>
        <h2 className="comment-title">Comments</h2>
        <div className="comments">
          {comments.paintingComments.map(comment => (
            <div className="comment" key={`${comment.id}`}>
              <p>{comment.description}</p>
              <div>{this.renderEraseButton(comment)}</div>
            </div>
          ))}
        </div>
        <p>{this.props.likes.length}</p>
        <button onClick={this.toggleLike}>like/unlike</button>
      <div>
        
      {/* <h2>create a comment</h2> */}
      <div>
        
        {/* {this.createComment()} */}
        {this.createComment()}
      </div>
      </div>
      </div>
    )
  }
}