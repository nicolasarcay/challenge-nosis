import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import iconSearch from "../../public/assets/img/search.svg";

export const AddMovieTitle = ({ onNewMovieTitle }) => {

    const [inputValue, setinputValue] = useState('');

    const onTitleChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        const searchTitle = inputValue.trim()
        // Al menos se deben escribir 2 carcateres
        if (searchTitle.length <= 1) return;
        onNewMovieTitle( searchTitle );
        setinputValue('');
      }
  return (
    <>
      <h1 className="py-md-5 pb-2 pt-5">Busca tu pelicula favorita</h1>
      <Form className="pb-4" onSubmit={onSubmit}>
        <Row>
          <Col xs={12} md={11}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="visually-hidden">Pelicula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Busca tu pelicula"
                value={inputValue}
                onChange={onTitleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={1}>
            <Button
              variant="primary"
              type="submit"
              className="add__movie-button"
            >
              <img src={iconSearch} alt="icon search" />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
