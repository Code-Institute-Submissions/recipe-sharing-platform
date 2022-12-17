import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import Book from './Book';

/**
 * Display single books details.
 */
function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState({ results: [] });

  /**
   * Retrieve books data from API.
   */
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
      <Col>
        <Book {...book.results[0]} setBook={setBook} bookPage />
      </Col>
    </Container>
  );
}

export default BookPage;