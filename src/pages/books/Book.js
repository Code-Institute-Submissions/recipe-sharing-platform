import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col, Container, Media } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Book.module.css';

/**
 * Render the data of a single book.
 */
function Book(props) {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    created_at,
    updated_at,
    title,
    author,
    description,
    number_of_pages,
    publication_date,
    book_link,
    image,
    bookPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  /**
   * Route user to Book Edit page.
   */
  const handleEdit = () => {
    history.push(`/books/${id}/edit`);
  };

  /**
   * Delete book data from API.
   */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/books/${id}/`);
      history.goBack();
    } catch (err) {
    //   console.log(err);
    }
  };

  return (
    <Container className={styles.Container}>
      <br />
      <Media className={styles.TopRow}>
        <Link to={`profiles/${profile_id}`} className={styles.Username}>
          <Avatar src={profile_image} height={30} />
          <h2 className={styles.OnHover}>Suggested by: {owner}</h2>
          <p className={styles.OnHover}>{created_at}</p>
          <p className={styles.OnHover}>{updated_at}</p>
        </Link>
        {is_owner && bookPage && (
          <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
        )}
      </Media>

      <Col className={styles.Content}>
        <Link to={`/books/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <br />
        <h2>
          <strong>{title}</strong>
        </h2>
        <p>Author: {author}</p>
        <p>Description: {description}</p>
        <p>Number of pages: {number_of_pages}</p>
        <p>Publication date: {publication_date}</p>
        <p>Find it here: {book_link}</p>
      </Col>
      <br />
    </Container>
  );
}

export default Book;