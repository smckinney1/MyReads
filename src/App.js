import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import FinishedReading from './FinishedReading'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    // TODO: Don't need "history" property in all routes
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <Search 
            books={this.state.books}
          />
        )} />
        <Route exact path="/" render={({ history }) => (
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
