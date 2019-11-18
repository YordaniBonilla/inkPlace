import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.css'
const Nav = () => {
	return (
		<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <Link style={style.link} to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    );
}

export default Nav;