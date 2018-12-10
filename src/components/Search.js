import React, { Component } from 'react'
import axios from 'axios'
import GamesLists from './GamesLists';




export class Games extends Component {
  state = {
    gameTitle:'',
    games: [],
  }


  findGame= (e) => {
  e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=${this.state.gameTitle}&fields=*`,{
        headers: {
          "user-key": "Your Api Key Here",
          Accept: "application/json"
        }
      })
      
      .then(res => {
        //console.log(this.state.gameTitle); 
        console.log(res.data);
        this.setState({ games: res.data });
      })
      .catch(err => console.log(err));
  }

  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  render() {
    
    const {games} = this.state ;
    const gameslist =  games.map(game => (
      <GamesLists key={game.id} games={game} />
    ))

    return (
      <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
              <i className="fa fa-gamepad" ></i> Search For A Games
              </h1>
              <br></br>
              <form onSubmit={this.findGame}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Game title..."
                    name="gameTitle"
                    value={this.state.gameTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Get Games
                </button>
              </form>
              <br></br>
              <h3> Games Details </h3>
              {gameslist} 
              
            </div>
    )
  }
}

export default Games
