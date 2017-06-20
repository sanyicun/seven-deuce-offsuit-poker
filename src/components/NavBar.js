import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/NavBar.css'

export default function NavBar(props){

  return (
    <nav className="animated fadeIn navbar navbar-inverse">
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            seven-deuce
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home/newgame">New Table</Link></li>
            <li><Link to="/home/games">Find Table</Link></li>
            <li><Link to="/home/friends">Friends</Link></li>

          </ul>
          <p className="navbar-text navbar-right">Welcome {sessionStorage.User} </p>
          <p className="navbar-text navbar-right">Chips: {sessionStorage.Chips} </p>
          <button className="navbar-btn navbar-right btn-default" onClick={ () => props.logOut() }>Log Out</button>
        </div>
      </div>
    </nav>
  )
}
