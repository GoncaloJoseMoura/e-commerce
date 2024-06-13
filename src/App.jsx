import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// const RenderName = (props) => {
//   return <div>{props.name}</div>;
// };

// RenderName.propTypes = {
//   name: PropTypes.string,
// };

// RenderName.defaultProps = {
//   name: 'Zach',
// };

// export default RenderName;

function App() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
          <li>
            <Link to="about">About page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
