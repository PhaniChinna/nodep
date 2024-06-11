const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// bodyParser

// plugin

app.use(bodyParser.json()); // middle ware Function

const books = [
  {
    id: 1,
    isbn: 100,
    authorName: "Pavan",
    bookName: "CSS Interview Ques",
    pages: 200,
    price: 500,
  },
  {
    id: 2,
    isbn: 102,
    authorName: "Raghu",
    bookName: "HTML Interview Ques",
    pages: 400,
    price: 1000,
  },
  {
    id: 3,
    isbn: 103,
    authorName: "Ravi",
    bookName: "JS Interview Ques",
    pages: 600,
    price: 1500,
  },
  {
    id: 4,
    isbn: 104,
    authorName: "Aishu",
    bookName: "Node Interview Ques",
    pages: 800,
    price: 1800,
  },
  {
    id: 5,
    isbn: 105,
    authorName: "Likitha",
    bookName: "React Interview Ques",
    pages: 1000,
    price: 2000,
  },
];

// Get Book
app.get("/book", function (request, response) {
  // response.json We have to assign
  response.json({ books });
});

// get Book with ID

app.get("/book/:bookId", function (request, response) {
  const id = request.params.bookId;
  const getResult = books.find((ele) => ele.id === Number(id));
  response.json({ getResult });
});

// Create New Book
app.post("/book", function (request, response) {
  const bookFromClient = request.body;
  books.push(bookFromClient);
  response.json({
    status: "Success",
  });
});

app.delete("/book/:bookId", function (request, response) {
  const bookIdToDelete = request.params.bookId;
  books.filter((ele) => ele.bookIdToDelete !== Number(bookIdToDelete));
  response.json({
    status: "Deleted",
  });
});

app.listen(8000, () => {
  console.log(`Server Running at http://localhost:8000`);
});
