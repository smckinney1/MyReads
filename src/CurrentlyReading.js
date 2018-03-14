import React, { Component } from 'react'
import BookMoveOptions from './BookMoveOptions'
import Book from './Book'

class CurrentlyReading extends Component {
  render() {
      return (
          <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book title="Lord of the Rings" />
              </li>
            </ol>
          </div>
        </div>
      )
  }
}

export default CurrentlyReading