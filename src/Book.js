import React, { Component } from 'react'
import BookMoveOptions from './BookMoveOptions'

class Book extends Component {
    render() {
        const book = this.props.book
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail}` }}></div>
                        <BookMoveOptions shelf="none"/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book