import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Media from "react-bootstrap/Media";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import styles from '../../styles/Book.module.css';


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
      // console.log(err);
    }
  };

  return (
    <Container className={styles.Container}>
      <br />
      <Link className={styles.OnHover} to={`/events/${id}`}>
        <h2 className={styles.OnHover}>
          <strong>{title}</strong>
        </h2>
      </Link>
      <p>Last updated: {updated_at}</p>
      <Media>
        <Link to={`profiles/${profile_id}`} className={styles.OnHover}>
          <Avatar src={profile_image} height={30} />
          <h2 className={styles.OnHover}>Suggested by: {owner}</h2>
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
        <p>
          Find it
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={book_link}
            className={styles.OnHover}
          >
            <strong>HERE</strong>
          </a>
        </p>
        <p>
          Submitted:
          {' '}
          {created_at}
        </p>
        <br />
      </Col>
    </Container>
  );
}

export default Book;