import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import Books from './Books' 
   
class Shelves extends Component {

    render(){
           
        const shelves = [
            {title: "Currently Reading", key: "currentlyReading"},
            {title: "Want to Read", key: "wantToRead"},
            {title: "Read" , key: "read"}
        ];
        return ( 
            <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

           <div className="list-books-content">
             {shelves.map(shelf => (
                  <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">
                     {this.props.books.filter((book)=> book.shelf === shelf.key).map((book) =>

                    <Books  key= {book.id}  title= {book.title} 
                            author= {book.authors === undefined ? book.authors = "Unknown Author" : book.authors}
                            image ={book.imageLinks !== undefined ? book.imageLinks.thumbnail : "http://www.mihranturley.com/art_books/lter/autumn-calf/sunset.jpg"} 
                            book={book}
                            changeShelf = {(moveBook,shelf)=> this.props.bookShelfUpdate(moveBook,shelf)} />
                     )}
                     
                 </div>

                </div> // End of bookshelf
 
             ) 
            )}
               </div>  {/*  End of list-books-content */}

                <div className="open-search">
                    <Link to= '/search' >Add a book</Link>

                </div> {/*End open-search */} 

            </div> /*End of list-books*/ 
         )
    }

}

export default Shelves