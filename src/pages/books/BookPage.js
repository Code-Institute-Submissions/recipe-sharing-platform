import React, { useEffect, useState } from 'react';

import Container from "react-bootstrap/Container";

import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';

import Book from './Book';


function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: book }] = await Promise.all([
          axiosReq.get(`/books/${id}`),
        ]);
        setBook({ results: [book] });
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Container>
        <Book {...book.results[0]} setBook={setBook} bookPage />
    </Container>
  );
}

export default BookPage;