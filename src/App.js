import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import FinishedReading from './FinishedReading'
import './App.css'

class BooksApp extends Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <Search />
        )} />
        <Route exact path="/" render={({history}) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading />
                <WantToRead />
                <FinishedReading />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
