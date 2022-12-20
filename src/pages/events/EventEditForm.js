import React, { useEffect, useState } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';
import styles from '../../styles/EventCreateEditForm.module.css';
import btnStyles from '../../styles/Button.module.css';


function EditEventForm() {
  useRedirect('loggedout');
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: '',
    content: '',
    date: '',
    time: '',
    location: '',
    price: '',
    event_link: '',
  });

  const {
    title, content, date, time, location, price, event_link,
  } = eventData;

  const history = useHistory();
  const { id } = useParams();

  /**
   * Populate EditForm fields with previously inserted data.
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const {
          title,
          content,
          date,
          time,
          location,
          price,
          event_link,
          is_owner,
        } = data;

        is_owner ? setEventData({
          title,
          content,
          date,
          time,
          location,
          price,
          event_link,
        }) : history.push('/');
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  /**
   * Push submitted data into empty strings.
   */
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Push inputted data to API.
   * Redirect user to event page upon successful submission.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('event_link', event_link);

    try {
      await axiosReq.put(`/events/${id}/`, formData);
      history.push(`/events/${id}`);
      // console.log(formData);
    } catch (err) {
      // console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={styles.FormAlignment}>
      <br />
      <h2>
        <strong>Submit an Event!</strong>
      </h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Event Name:</Form.Label>
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
            name="content"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Row className={styles.RowSpacing}>
          <Form.Group>
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              aria-label="date"
            />
          </Form.Group>
          {errors?.date?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={time}
              onChange={handleChange}
              aria-label="time"
            />
          </Form.Group>
          {errors?.time?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>Price in €:</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
              aria-label="price"
            />
          </Form.Group>
          {errors?.price?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
        </Row>

        <Form.Group>
          <Form.Label>Event URL:</Form.Label>
          <Form.Control
            type="url"
            name="event_link"
            value={event_link}
            onChange={handleChange}
            aria-label="event url"
          />
        </Form.Group>
        {errors?.event_link?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <br />
        <Row className={styles.RowSpacing}>
          <Button type="submit" className={`${btnStyles.Button} ${btnStyles.Bright}`}>
            Submit
          </Button>

          <Button onClick={() => history.goBack()} className={`${btnStyles.Button} ${btnStyles.Bright}`}>
            Cancel
          </Button>
        </Row>
        <br />
      </Form>
    </Container>
  );
}

export default EditEventForm;