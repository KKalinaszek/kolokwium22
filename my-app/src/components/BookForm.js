import React, { useContext } from "react";
import { useFormik } from 'formik';
import { BookContext } from "../context/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      author: '',
      year: '',
      available: true,
    },
    onSubmit: values => {
      dispatch({ type: "ADD_BOOK", payload: values });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="id" onChange={formik.handleChange} value={formik.values.id} />
      <input type="text" name="title" onChange={formik.handleChange} value={formik.values.title} />
      <input type="text" name="author" onChange={formik.handleChange} value={formik.values.author} />
      <input type="text" name="year" onChange={formik.handleChange} value={formik.values.year} />
      <button type="submit">Dodaj książkę</button>
    </form>
  );
}

export default BookForm;
