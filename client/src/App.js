import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import DeleteBtn from "./components/DeleteBtn";
import SaveBtn from "./components/SaveBtn";
import ViewBtn from "./components/ViewBtn";
import Form from "./components/Form";
import {Container, Row, Col } from "./components/Grid";
import Navbar from "./components/Navbar";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {

  state = {
    books: [], 
    booksSearch: "",
    booksSaved: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.booksSearch)
    .then(res => this.setState({ books: res.data}))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size = "md-12">
              <form>
                <Container>
                  <Row>
                    <Col size = "xs-9 sm-10">
                      <Input
                        name = "booksearch"
                        value = {this.state.bookSearch}
                        onChange = {this.handleInputChange}
                        placeholder = "Search for a Book"
                      />
                    </Col>
                    <Col size = "xs-3 sm-2">
                      <Button
                      onClick = {this.handleFormSubmit}
                      type = "success"
                      className = "input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size = "xs-12">
              {!this.state.recipes.length ? (
                <h1 className = "text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                      key = {book.title}
                      title = {book.title}
                      author = {book.author}
                      synopsis = {book.synopsis}
                      thumbnail = {book.thumbnail}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;

