import React from 'react';
import { Link } from 'react-router-dom';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
    this.eraseComment = this.eraseComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      // commentId = null,
      comment: null,
      comments: null
    };
  }

  componentDidMount() {
    
    this.props.fetchPaintings();
    
    this.props.fetchPainting(this.props.match.params.id).then(() => {
      this.props.fetchArtist(this.props.painting.artist)
    });
    
    this.setState({comments: this.props.fetchPaintingComments(this.props.match.params.id)})
    this.props.fetchPaintingComments(this.props.match.params.id);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePainting(this.props.match.params.id)
    .then(() => this.props.history.push('/'));
  }



  eraseComment(e) { 
    // debugger 
    e.preventDefault();
    this.props.eraseComment(e.currentTarget.value);
    this.props.fetchPaintingComments(this.props.match.params.id);
  } 

  handleSubmit(e, comment) {
    e.preventDefault();
    comment.description = this.state.comment;
    this.props.makeComment(comment);
    this.props.fetchPaintingComments(this.props.match.params.id);

  }

  
  createComment(e) {
    // debugger
    // e.preventDefault();
    let { user } = this.props.session;
    if(!user) {
      return null;
    }
    let comment = {};
    comment.commenter = user.id;
    comment.painting = this.props.match.params.id;
    comment.description = this.state.description;
    // debugger
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, comment)}>

          <textarea value={comment.description} onChange={e => this.updateComment(e)}>
          </textarea>
          <button type="submit">Post</button>

        </form>
      </div>
    )

    
    
    

  }

  updateComment(e) {
    this.setState({comment: e.currentTarget.value})
  }

  renderEraseButton(comment) {
    const { user } = this.props.session;
    // debugger
    if(comment.commenter !== user.id) {
      return null
    }
    
      return (
        <div>
          <button className="delete-comment" value={comment._id} onClick={this.eraseComment}>Delete</button>
        </div>
      )
    
  }

  renderButton() {
    const { user } = this.props.session;
    const artistId = this.props.painting.artist;
    if(!user) {
      this.props.history.push('/')
    }
    if(artistId === user.id){
      return (
        <div>
          <button className="delete-painting" value={this.props.match.params.id} onClick={this.handleDelete}>Delete</button>
        </div>
      )
    }
  } 

  render() {
    
    if(!this.props.painting || !this.props.entities.paintings.artist){
      return null;
    }
    // debugger
    return (
      <div className="painting-show">
        <h1>{this.props.painting.title}</h1>
        <Link to={`/artist/${this.props.painting.artist}`}>
          <div className="painting-show-user">
            <h2>{this.props.entities.paintings.artist.username}</h2>
            <p>{this.props.entities.paintings.artist.email}</p>
          </div>
        </Link>
        <br />
        <img src={this.props.painting.painting_image} />
        {console.log(this.props.painting)}
        <br />
        <div>{this.renderButton()}</div>
        <h2>Comments</h2>
        <div className="comments">
          {this.props.comments.paintingComments.map(comment => (
            <div>
              <p>{comment.description}</p>
              <div>{this.renderEraseButton(comment)}</div>
            </div>
          ))}
        </div>
      <div>
        <h2>create a comment</h2>
        {/* {this.createComment()} */}
        {this.createComment()}
      </div>
      </div>
    )
  }
}