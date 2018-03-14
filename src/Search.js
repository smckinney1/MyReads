import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookMoveOptions from './BookMoveOptions'
import Book from './Book'

class Search extends Component {
    state = {
        searchQuery: ''
    }

    updateSearchQuery = (query) => {
        this.setState({ searchQuery: query })
    }

    render() {
        const books = this.props.books
        const query = this.state.searchQuery
        
        let showingBooks;

        // TODO: REGEX
        if (query) {
            showingBooks = books.filter((book) => book.title.toUpperCase().indexOf(query.toUpperCase()) > -1)
        } else {
            showingBooks = books;
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                        >Close search</Link>
                    <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                    />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <Book book={book} key={book.id}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search


/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/