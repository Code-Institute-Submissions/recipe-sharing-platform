import React from 'react';
import styles from '../../styles/Book.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

import Media from "react-bootstrap/Media";
import Card from "react-bootstrap/Card";

import { Link, useHistory } from 'react-router-dom';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';


const Book = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
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
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <p><span className={styles.OnHover}>Suggested by:</span> {owner}</p>
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && bookPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/books/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className={styles.Title}>{title}</Card.Title>}
        {author && <Card.Text><p><span className={styles.OnHover}>By:</span> {author}</p></Card.Text>}
        {description && <Card.Text><p><span className={styles.OnHover}>Introduction:</span> {description}</p></Card.Text>}
        {number_of_pages && <Card.Text><p><span className={styles.OnHover}>Pages:</span> {number_of_pages}</p></Card.Text>}
        {publication_date && <Card.Text><p><span className={styles.OnHover}>Publication Date:</span> {publication_date}</p></Card.Text>}
        {book_link && <Card.Text>
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
          </p></Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Book;