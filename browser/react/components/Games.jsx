// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const Games = (props) => {
  return (
    <div>
      <h1>These are the Games!</h1>
      <ul>
        { props.players.map(player => (
        <li key={ player.id }>
          <div>
            <h4>{ player.name }</h4>
            <img src={ player.imgUrl } />
          </div>
        </li>
        )) }
      </ul>
    </div>
  );
};

// ------------- Container
const mapStateToProps = ({ games }) => ({ players: games.allGames });

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Games);
