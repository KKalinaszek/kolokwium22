import React, { useContext, useMemo } from "react";
import { BookContext } from "../context/BookContext";

function BookStats() {
  const { state } = useContext(BookContext);

  const totalBooks = useMemo(() => state.books.length, [state.books]);

  return (
    <div>
      <h2>Statystyki książek:</h2>
      <p>Łączna liczba książek: {totalBooks}</p>
    </div>
  );
}

export default BookStats;
