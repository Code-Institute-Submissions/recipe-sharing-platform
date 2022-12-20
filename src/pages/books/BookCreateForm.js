import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from '../../styles/BookCreateEditForm.module.css';
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function BookCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    number_of_pages: "",
    publication_date: "",
    book_link: "",
    image: "",
  });

  const { title, author, description, number_of_pages, publication_date, book_link, image } = bookData;

  const imageInput = useRef(null);
  const history = useHistory();

  /**
   * Populate BookData strings.
   */
  const handleChange = (event) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Change uploaded image.
   * Clear previously uploaded image.
   */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setBookData({
        ...bookData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /**
   * Push data to API.
   * Redirect user to book page.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("number_of_pages", number_of_pages);
    formData.append("publication_date", publication_date);
    formData.append("book_link", book_link);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/books/", formData);
      history.push(`/books/${data.id}`);
      // console.log(formData);
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <h2>
        <strong>Suggest a Cookbook!</strong>
      </h2>
      <br />
        <Row>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Orange} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Row>
        <br />

      <Container className={styles.FormAlignment}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.description?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}

          <Row className={styles.RowSpacing}>
            <Form.Group>
              <Form.Label>Author:</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={author}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.author?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Number of Pages:</Form.Label>
              <Form.Control
                type="number"
                name="number_of_pages"
                value={number_of_pages}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.number_of_pages?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Publication Date:</Form.Label>
              <Form.Control
                type="date"
                name="publication_date"
                value={publication_date}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.publication_date?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
          </Row>

          <Form.Group>
            <Form.Label>Find it here:</Form.Label>
            <Form.Control
              type="url"
              name="book_link"
              value={book_link}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.book_link?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
          <br />

          <Row className={styles.RowSpacing}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Orange}`}
              type="submit"
            >
              Suggest
            </Button>

            <Button onClick={() => history.goBack()}
              className={`${btnStyles.Button} ${btnStyles.Orange}`}
            >
              Cancel
            </Button>
          </Row>
          <br />
        </Form>
      </Container>
    </Form>
  );
}

export default BookCreateForm;