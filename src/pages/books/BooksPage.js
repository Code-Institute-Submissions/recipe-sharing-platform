import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import { fetchMoreData } from '../../utils/utils';
import Book from './Book';
import styles from '../../styles/BooksPage.module.css';

/**
 * Display all books.
 */
function BooksPage({ message, filter = '' }) {
  const [books, setBooks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState('');

  /**
   * Retrieve books from API
   * Display spinner until content has loaded.
   * Delay search filter from making API requests with each keystroke.
   */
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axiosReq.get(
          `/books/?${filter}search=${query}`,
        );
        setBooks(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);

    const timer = setTimeout(() => {
      fetchBooks();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Container>
      <div className={styles.SearchForm}>
      <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchField}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search books"
          />
        </Form>
      </div>

      {hasLoaded ? (
        <>
          {books.results.length ? (
            <InfiniteScroll
              children={books.results.map((book) => (
                <Book
                  key={book.id}
                  {...book}
                  setBooks={setBooks}
                />
              ))}
              dataLength={books.results.length}
              loader={<Asset spinner />}
              hasMore={!!books.next}
              next={() => fetchMoreData(books, setBooks)}
            />
          ) : (
            <Container>
              <Asset message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default BooksPage;