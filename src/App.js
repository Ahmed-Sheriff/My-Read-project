import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Shelves'
import Search from './Search'


class BooksApp extends React.Component {
  state = {

    books: []
  }

  // Getting all books from Data-Base
  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    }).catch((error)=>{
    alert('Getbookerror',error)
    })
    }

// Function for Update the shelf of the book
  bookShelfUpdate(moveBook,shelf){
  BooksAPI.update(moveBook,shelf).then(()=>{
    const updatedBook = {
      ...moveBook,
      shelf
   }  
    this.setState( oldState => ({books: oldState.books.filter(bk => bk.id !== moveBook.id).concat([updatedBook])
    }))
   }).catch((error)=>{
     alert('Bookshelfupdate',error) 
   })
  }

  render() {
    return (
      <div className="app">
      
          <Route exact path= '/search' render={()=>
            <Search books = {this.state.books} bookShelfUpdate = {(moveBook,shelf)=>this.bookShelfUpdate(moveBook,shelf)} />           
            }
          />
          
          <Route exact path= '/' render={() => 
            <Shelves books = {this.state.books} bookShelfUpdate = {(moveBook,shelf)=>this.bookShelfUpdate(moveBook,shelf)}/> 
            }
          />
        
       </div> //End of app
    )
  }

} // End Class BooksApp 
 
export default BooksApp

