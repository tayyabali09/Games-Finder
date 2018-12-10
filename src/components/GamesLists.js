import React from 'react'
import NoAvailable from './NoAvailable.jpg'

const GamesLists = props => {
  
    const {games} = props
    return (
        <React.Fragment>
            
              <div className="card">
                <h5 className="card-header">
                 Game Title: {games.name}
              
            </h5>
            <div className="card-body">
             {games.cover ? <img src={games.cover.url} alt="pic" width="200"/> : <img src={NoAvailable} alt="nopic" /> 
             }
              <div className="card-text">
              
              <div className="col-md-4 offset-md-4">
              <b style={{font:'bold', color:'blue'}}>Rating: {games.total_rating_count ? games.total_rating_count : 'N/A' } 
              </b>
               </div> 
              { games.summary ?  games.summary :'No Discription Available'}
              <br></br>
              <a className="btn btn-primary"  target="blank" href="{games.url}"> {games.url}</a>
              </div>
            </div>
          </div>

      </React.Fragment>
  )
}

export default GamesLists;