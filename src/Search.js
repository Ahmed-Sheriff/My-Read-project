import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {

    state = {
        query: '',
        searchedBooks : []
    }

// Function for Search for books 
  searchForBooks(query){
    this.setState({query : query})
    if(query){
     
      BooksAPI.search(query).then((data)=> {
        if(data.length > 0){
          this.props.books.forEach(main => {

            data.map(bookFromSearch => {
                if(main.id === bookFromSearch.id){
                    bookFromSearch.shelf = main.shelf;
        }     
              else if(main.id !== bookFromSearch.id && bookFromSearch.shelf === undefined) {
                      bookFromSearch.shelf = 'none';
              }
            })
             this.setState({searchedBooks: data})
          })
         
        }
        else {
            this.setState({searchedBooks:[]})
        }
        })
      }else{ this.setState({searchedBooks:[]}) } 
    }  
  

  render(){

    return (

        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to= '/' >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
                    value = {this.state.query}
                    onChange={(event)=>this.searchForBooks( event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            { this.state.searchedBooks.map((book) => (
            
                <li key= {book.id}>

                    <Books  key= {book.id}  title= {book.title} 
                            author= {book.authors === undefined ? 
                            book.authors = "Unknown Author" : book.authors}
                            image ={book.imageLinks !== undefined ? book.imageLinks.thumbnail : "http://www.mihranturley.com/art_books/lter/autumn-calf/sunset.jpg"}     
                            book={book} 
                            changeShelf = {(moveBook,shelf)=> this.props.bookShelfUpdate(moveBook,shelf)}
                    />
                    
                </li>
             )
            )
                
             }
           
          </ol>
        </div>
      </div>
    )
  }  

}



export default Search 