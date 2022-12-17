import React from "react";
import styles from "../../styles/Book.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Book = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    author,
    description,
    number_of_pages,
    publication_date,
    image,
    updated_at,
    bookPage,
    setBooks,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/books/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/books/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Book}>
      <br />
      <h2><strong>SUGGEST A BOOK!</strong></h2>
      <br />
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
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
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {author && <Card.Text>{author}</Card.Text>}
        {number_of_pages && <Card.Text>{number_of_pages}</Card.Text>}
        {publication_date && <Card.Text>{publication_date}</Card.Text>}
        {description && <Card.Text>{description}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Book;