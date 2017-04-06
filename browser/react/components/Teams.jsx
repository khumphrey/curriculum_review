// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const Teams = (props) => {
  return (
    <div>
      <h1>These are the Teams!</h1>
      <ul>
        { props.teams.map(team => (
        <li key={ team.id }>
          <div>
            <h4>{ team.name } is from { team.location }</h4>
          </div>
        </li>
        )) }
      </ul>
    </div>
  );
};

// ------------- Container
const mapStateToProps = ({ teams }) => ({ teams: teams.allTeams });

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
