import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchPaintingLikes } from '../../actions/like_actions';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
    this.assignLikes = this.assignLikes.bind(this);
    this.renderLikes = this.renderLikes.bind(this);
    this.renderArtist = this.renderArtist.bind(this);
  }

  componentDidMount() {
    
    this.props.fetchPaintings()
        .then(() => this.props.fetchAllLikes())
    
    this.props.fetchUsers()
  }

  assignLikes() {
    let { paintings } = this.props;
    let { likes } = this.props.entities.likes;

    let pLength = paintings.length;
    let lLength = likes.length;


    for(let i = 0; i < pLength; i++) {
      paintings[i].likes = []
      for(let j = 0; j < lLength; j++) {
        if(likes[j].painting === paintings[i]._id){
          paintings[i].likes.push(likes[j])
        }
      }
    }

    return paintings
  }

  renderArtist(artistId) {
    if (!this.props.users) {
      return
    }
    let { users } = this.props;

    for(let i = 0; i < users.length; i++) {
      if(!this.props.users){
        return
      } else if(users[i]._id === artistId) {
        return (
          <span>{users[i].username}</span>
        )
      }
    }
  }

  toggleLike(painting){     
    for(let i = 0; i < painting.likes.length; i++) {
      if(!this.props.user){
        return
      }
      else if(painting.likes[i].liker === this.props.user.id) {
        let like = painting.likes[i];
        painting.likes.splice(i, 1);
        this.props.eraseLike(like._id)
        this.componentDidMount();
        return
      }
    }

    this.props.makeLike(painting._id)
        .then(() => this.componentDidMount())
    
  }

  componentWillReceiveProps(newState) {
    this.setState({ paintings: newState.paintings })
  }

  artistUsername(id){
    this.props.fetchArtist(id)
      .then(res => console.log(res, "res"))
  }

  renderLikeIcon(painting){
    for(let i = 0; i < painting.likes.length; i++) {
      if(painting.likes[i].liker === this.props.user.id) {
        return <img src="https://cdn.discordapp.com/attachments/865977609330753600/875043220034301962/Heart.png" />
      }
    }
    return <img src="https://cdn.discordapp.com/attachments/865977609330753600/875748136147116032/Heart_Unliked.png" />
  }

  renderLikes(painting){
    
    return (
      <div className="likes">
        <button className="toggle-like" onClick={() => this.toggleLike(painting)}>
          {this.renderLikeIcon(painting)} 
        </button>
        <div>{painting.likes.length}</div>
      </div>
    )
  }

  

  render() {
    if (this.props.paintings.length === 0 || this.props.entities.likes.likes === undefined) {
      return <div>No paintings</div>
    } else {
      this.assignLikes();
      return (
        <div className="index-container">
          {/* <h1>Paintings</h1> */}
            <div className="painting-index">
              {this.props.paintings.map(painting => (    
                <>
                <div className="item-container">
                  <div className="title-likes">  
                    {this.renderLikes(painting)}
                  </div>
                  <Link key={painting._id} to={`/paintings/${painting._id}`} >         
                    <div className="painting-index-item"
                      style={{backgroundImage: `url(${painting.painting_image})` }}
                    >              
                      <div>
                        <p>{painting.title}</p>
                        <span>by: {this.renderArtist(painting.artist)}</span>                
                      </div>                           
                    </div>                  
                  </Link>  

                </div>          
                </>
              ))}
            </div>            
        </div>
      )
    }
  }
}

export default withRouter(Painting);