import React, { useContext } from "react";
import { useFormik } from 'formik';
import { BookContext } from "../context/BookContext";

function BookForm() {
  const { dispatch, state } = useContext(BookContext);

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      author: '',
      year: '',
      available: true,
    },
    validate: values => {
      let errors = {};
      if (!values.id) {
        errors.id = 'Pole wymagane';
      } else if (state.books.some(book => book.id === values.id)) {
        errors.id = 'ID książki musi być unikalne';
      }

      if (!values.title) {
        errors.title = 'Pole wymagane';
      }

      if (!values.author) {
        errors.author = 'Pole wymagane';
      }

      if (!values.year) {
        errors.year = 'Pole wymagane';
      } else if (!/^[0-9]+$/.test(values.year)) {
        errors.year = 'Rok musi być liczbą';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch({ type: "ADD_BOOK", payload: values });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="id">ID książki</label>
      <input
        id="id"
        name="id"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.id}
        placeholder="Wpisz ID książki"
      />
      {formik.errors.id ? <div>{formik.errors.id}</div> : null}

      <label htmlFor="title">Tytuł książki</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Wpisz tytuł książki"
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="author">Autor książki</label>
      <input
        id="author"
        name="author"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.author}
        placeholder="Wpisz autora książki"
      />
      {formik.errors.author ? <div>{formik.errors.author}</div> : null}

      <label htmlFor="year">Rok wydania</label>
      <input
        id="year"
        name="year"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.year}
        placeholder="Wpisz rok wydania"
      />
      {formik.errors.year ? <div>{formik.errors.year}</div> : null}

      <button type="submit">Dodaj książkę</button>
    </form>
  );
}

export default BookForm;
