// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const Players = (props) => {
  return (
    <div>
      <h1>These are the Players!</h1>
      <ul>
        { props.players.map(player => (
        <li key={ player.id }>
          <div>
            <h4>{ player.name }</h4>
            <img src={ player.imgUrl } style={ {height:'300px', width:'500px'} }/>
          </div>
        </li>
        )) }
      </ul>
    </div>
  );
};

// ------------- Container
const mapStateToProps = ({ players }) => ({ players: players.allPlayers });

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Players);
