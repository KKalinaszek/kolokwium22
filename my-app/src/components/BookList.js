import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

function BookList() {
    const { state, search, setSearch } = useContext(BookContext);

    const filteredBooks = state.books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Lista książek:</h2>
            <p>Wyszukaj</p>
            <input
                type="text"
                placeholder="Wyszukaj książkę"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredBooks.map(book => <Book key={book.id} book={book} />)}
        </div>
    );
}

export default BookList;
