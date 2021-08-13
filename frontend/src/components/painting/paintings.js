import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchPaintingLikes } from '../../actions/like_actions';

class Painting extends React.Component {
  constructor(props) {
    super(props);

   
    this.toggleLike = this.toggleLike.bind(this);
    this.assignLikes = this.assignLikes.bind(this);
    this.renderLikes = this.renderLikes.bind(this);
  }

  componentDidMount() {
    
    this.props.fetchPaintings()
        .then(() => this.props.fetchAllLikes())
        // .then(() => this.assignLikes());
    
    // this.props.fetchPaintings().then(paintings => {
    //   let { data } = paintings.paintings
    //   let length = data.length;
    //   for(let i = 0; i < length; i++){
    //     this.props.fetchPaintingLikes(data[i]._id)
    //   }
    // });
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

 

  renderLikes(painting){
    
    // this.props.fetchPaintingLikes(paintingId)
      // .then(res => console.log(res))
    // this.props.fetchPaintingLikes(painting._id)
    // painting.likes = this.props.fetchPaintingLikes(painting._id)
    return (
      <div className="likes">
        <div>{painting.likes.length}</div>
        <button className="toggle-like" onClick={() => this.toggleLike(painting)}>
          {/* <i class="far fa-heart"></i> */}
          <img src="https://media.discordapp.net/attachments/865977609330753600/875043220034301962/Heart.png?width=566&height=566"/>
          {/* <img src="https://media.discordapp.net/attachments/865977609330753600/875043682431152189/Heart_Unliked.png?width=566&height=566" /> */}
        </button>
        {/* <button className="toggle-like" onClick={() => this.toggleLike(painting)}>like/unlike</button> */}
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
                      {/* <Link to={`/artist/${painting.artist}`}> {painting.artist} </Link> */}
                      
                      {/* <img src={painting.painting_image} className="index-image"/> */}
                      {/* <div>
                        {this.renderLikes(painting)}
                      </div> */}
                      {/* <button onClick={() => this.delete(like._id)}>
                        Delete
                      </button>            */}                      
                      <p>{painting.title}</p>  
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