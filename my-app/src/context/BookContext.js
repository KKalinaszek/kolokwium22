import React, { useReducer, useState, useEffect } from "react";
import booksData from '../data/books.json';

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
    case "INITIAL_LOAD":
      return { ...state, books: action.payload, isLoading: false };
    default:
      return state;
  }
}

export const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://inf.ug.edu.pl/~mmiotk/books3.json');
        const data = await response.json();
        if (data && data.length > 0) {
          dispatch({ type: "INITIAL_LOAD", payload: data });
        } else {
          throw new Error("Empty data from server");
        }
      } catch (error) {
        console.log('Fetching data from server failed, loading local data');
        dispatch({ type: "INITIAL_LOAD", payload: booksData });
      }
    };

    fetchData();
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch, search, setSearch }}>
      {children}
    </BookContext.Provider>
  );
};
