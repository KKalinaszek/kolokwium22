import React, { useReducer, useState, useEffect } from "react";
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

function bookReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}

export const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://inf.ug.edu.pl/~mmiotk/books3.json')
      .then(response => {
        dispatch({ type: "INITIAL_LOAD", payload: response.data });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch, search, setSearch }}>
      {children}
    </BookContext.Provider>
  );
};
