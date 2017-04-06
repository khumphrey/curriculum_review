// Required libraries
import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <span>Menu</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">All the players</Link>
        </li>
        <li>
          <Link to="/teams">All the teams</Link>
        </li>
        <li>
          <Link to="/games">All the games</Link>
        </li>
      </ul>
      { props.children }
    </div>
  );
};

export default Home;
