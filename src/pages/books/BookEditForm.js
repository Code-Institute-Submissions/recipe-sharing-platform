import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/BookCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


function BookEditForm() {
    const [errors, setErrors] = useState({});
  
    const [bookData, setBookData] = useState({
      title: "",
      author: "",
      description: "",
      number_of_pages: "",
      publication_date: "",
      image: "",
    });
    const { title, author, description, number_of_pages, publication_date, image } = bookData;
  
    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/books/${id}/`);
          const { title, author, description, number_of_pages, publication_date, image, is_owner } = data;
  
          is_owner ? setBookData({ title, author, description, number_of_pages, publication_date, image }) : history.push("/");
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [history, id]);
  
    const handleChange = (event) => {
      setBookData({
        ...bookData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleChangeImage = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setBookData({
          ...bookData,
          image: URL.createObjectURL(event.target.files[0]),
        });
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append("title", title);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('number_of_pages', number_of_pages);
      formData.append('publication_date', publication_date);
  
      if (imageInput?.current?.files[0]) {
        formData.append("image", imageInput.current.files[0]);
      }
  
      try {
        await axiosReq.put(`/books/${id}/`, formData);
        history.push(`/books/${id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };
  
    const textFields = (
        <div className="text-center">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={author}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.author?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Number of Pages</Form.Label>
            <Form.Control
              type="number"
              name="number of pages"
              value={number_of_pages}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Publication Date</Form.Label>
            <Form.Control
              type="date"
              name="publication date"
              value={publication_date}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.publication_date?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
  
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Save
        </Button>
      </div>
    );
  
    return (
      <Form onSubmit={handleSubmit}>
        <br />
        <h2><strong>SUGGEST A BOOK!</strong></h2>
        <br />
        <Row>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
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
  
              <div className="d-md-none">{textFields}</div>
            </Container>
            <Container className={appStyles.Content}>{textFields}</Container>
        </Row>
      </Form>
    );
  }
  
  export default BookEditForm;
