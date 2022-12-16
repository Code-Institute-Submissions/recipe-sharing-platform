import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Upload from "../../assets/upload.png";

import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from '../../styles/BookCreateForm.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';
import Asset from '../../components/Asset';
import { useRedirect } from '../../hooks/useRedirect';


function ArticleCreateForm() {
  useRedirect('loggedOut');

  const [errors, setErrors] = useState({});

  const [articleData, setArticleData] = useState({
    title: '',
    image: '',
    author: '',
    description: '',
    number_of_pages: '',
    publication_date: '',
  });

  const {
    title, image, author, description, number_of_pages, publication_date,
  } = articleData;

  const imageInput = useRef(null);
  const history = useHistory();

  /**
   * Populate ArticleData strings.
   */
  const handleChange = (event) => {
    setArticleData({
      ...articleData,
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
      setArticleData({
        ...articleData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /**
   * Pust data to API.
   * Direct user to article page.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('image', image);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('number_of_pages', number_of_pages);
    formData.append('publication_date', publication_date);

    try {
      const { data } = await axiosReq.post('/books/', formData);
      history.push(`/books/${data.id}`);
      // console.log(formData);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={styles.FormAlignment}>
      <br />
      <h2><strong>Add a book!</strong></h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            aria-label="title"
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Author:</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="author"
            value={author}
            onChange={handleChange}
            aria-label="author"
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="description"
            value={description}
            onChange={handleChange}
            aria-label="description"
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

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
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
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
        <br />
        <Row className={styles.RowSpacing}>
          <Button type="submit" className={btnStyles.Button}>
            Add
          </Button>

          <Button onClick={() => history.goBack()} className={btnStyles.Button}>
            Cancel
          </Button>
        </Row>
        <br />
      </Form>
    </Container>
  );
}

export default ArticleCreateForm;