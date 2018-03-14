import React, { Component } from 'react'

class BookMoveOptions extends Component {
    state = {

    }

    moveBook = (e) => {
        debugger;
        console.log(e)
    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={this.moveBook}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookMoveOptions