import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function Book({ book }) {
  const { dispatch } = useContext(BookContext);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_BOOK", payload: book.id });
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.year}</p>
      <button onClick={handleRemove}>Usuń</button>
    </div>
  );
}

export default Book;
