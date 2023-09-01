import React, { useState, useContext } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'; // Importa los componentes de Bootstrap
import { Contexto } from '../contexto/Contexto';

const Create = (props) => {
  const contexto = useContext(Contexto);
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    image: '',
    categoria: '',
    link: '',
    referente: '', // Agregado el campo "referente"
  });

  const [errores, setErrores] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    link: '',
    referente: '', // Agregado el campo "referente"
  });

  const validarCampo = (campo, valor) => {
    switch (campo) {
      case 'titulo':
        if (valor.length < 3 || valor.length > 20) {
          return 'El título debe tener entre 3 y 20 caracteres';
        }
        break;
      case 'descripcion':
        if (valor.length < 50 || valor.length > 200) {
          return 'La descripción debe tener entre 50 y 200 caracteres';
        }
        break;
      case 'link':
        if (valor.length < 10 || valor.length > 50) {
          return 'El link de información debe tener entre 10 y 50 caracteres';
        }
        break;
      case 'referente':
        if (valor.length < 3 || valor.length > 15) {
          return 'El referente debe tener entre 3 y 15 caracteres';
        }
        break;
      case 'categoria':
        if (valor === '') {
          return 'Por favor, seleccione una categoría';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (campo, valor) => {
    const error = validarCampo(campo, valor);
    setErrores({ ...errores, [campo]: error });
    setFormulario({ ...formulario, [campo]: valor });
  };

  const handleSubmit = () => {
    if (
      validarCampo('titulo', formulario.titulo) ||
      validarCampo('descripcion', formulario.descripcion) ||
      validarCampo('image', formulario.image) ||
      validarCampo('link', formulario.link) ||
      validarCampo('referente', formulario.referente) ||
      validarCampo('categoria', formulario.categoria) // Validación para el campo "categoría"
    ) {
      alert('Rellene correctamente los campos indicads');
      return;
    }
    console.log(formulario);
    contexto.setDataMov((current) => [...current, formulario]);
    props.setContent(true);
    props.setCreate(false);
    props.setOver(false);
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <h1 className="text-center">Formulario</h1>
          <Card className="form-card">
            <Card.Body>
              <Form>
                <Form.Group controlId="titulo">
                  <Form.Label>Título:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.titulo}
                    onChange={(e) => handleChange('titulo', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.titulo}</Form.Text>
                </Form.Group>
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción:</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={formulario.descripcion}
                    onChange={(e) => handleChange('descripcion', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.descripcion}</Form.Text>
                </Form.Group>
                <Form.Group controlId="categoria">
                  <Form.Label>Categoría:</Form.Label>
                  <Form.Control
                    as="select"
                    value={formulario.categoria}
                    onChange={(e) => handleChange('categoria', e.target.value)}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="Deportes de motor">Motor</option>
                    <option value="Deportes de mesa">Mesa</option>
                    <option value="Deportes de equipo">Equipo</option>
                  </Form.Control>
                  <Form.Text className="text-danger">{errores.categoria}</Form.Text>
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>Imagen:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.image}
                    onChange={(e) => handleChange('image', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.image}</Form.Text>
                </Form.Group>
                <Form.Group controlId="link">
                  <Form.Label>Link:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.link}
                    onChange={(e) => handleChange('link', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.link}</Form.Text>
                </Form.Group>
                <Form.Group controlId="referente">
                  <Form.Label>Referente:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.referente}
                    onChange={(e) => handleChange('referente', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.referente}</Form.Text>
                </Form.Group>
                <br />
                <Button className="btn btn-success" type="button" onClick={handleSubmit}>
                  Guardar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;

