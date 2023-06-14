import React from "react";
import ReactDOM from "react-dom";
import { BookProvider } from "./context/BookContext";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookStats from "./components/BookStats";

function App() {
  return (
    <BookProvider>
      <header>
        <h1>Aplikacja Biblioteki</h1>
      </header>
      <BookForm />
      <BookList />
      <BookStats />
    </BookProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
