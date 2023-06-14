import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

function BookList() {
  const { state, dispatch, search, setSearch } = useContext(BookContext);

  let filteredBooks;
  if (state.searchBy === 'title') {
    filteredBooks = state.books.filter(book =>
      book.title.toLowerCase().startsWith(search.toLowerCase())
    );
  } else if (state.searchBy === 'year') {
    filteredBooks = state.books.filter(book =>
      book.year.toString() === search
    );
  }

  const handleSearchByChange = (event) => {
    dispatch({ type: "SET_SEARCH_BY", payload: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Wyszukaj książkę"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={state.searchBy} onChange={handleSearchByChange}>
        <option value="title">Tytuł</option>
        <option value="year">Rok</option>
      </select>
      {filteredBooks.map(book => <Book key={book.id} book={book} />)}
    </div>
  );
}

export default BookList;
