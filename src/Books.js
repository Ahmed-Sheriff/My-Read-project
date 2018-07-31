import React, {Component} from 'react'


class Books extends Component {

    changeBook(value){
        this.props.changeShelf(this.props.book,value)
    }

    render() {

        return (
       
        <ol className="books-grid">            
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, 
                    backgroundImage: 
                    `url(${this.props.image})` }}></div>
                <div className="book-shelf-changer">
                  <select
                  value={this.props.book.shelf}
                   onChange= {(event )=> this.changeBook(event.target.value) }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.author}</div>
            </div>
          </li>

        </ol>
    
        )        
    }

}


export default Books


