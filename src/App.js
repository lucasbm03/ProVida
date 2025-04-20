import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Carousel } from "react-bootstrap";

// Dados
const services = [
  { img: "/images/Servico1.jpg", title: "Consultas On-line", text: "Agende sua consulta com especialistas." },
  { img: "/images/Servico2.jpg", title: "Exames de Rotina", text: "Cuide da sua saúde com exames rápidos." },
  { img: "/images/Servico3.avif", title: "Aconselhamento Nutricional", text: "Orientações nutricionais para sua saúde." }
];

const team = [
  { img: "/images/cardio.webp", name: "Dr. João Silva", role: "Médico Cardiologista" },
  { img: "/images/derma.webp", name: "Dr. Lucas Souza", role: "Dermatologista" },
  { img: "/images/nutri.webp", name: "Drª. Maria Oliveira", role: "Nutricionista" }
];

function App() {
  const [formData, setFormData] = useState({ nome: "", email: "", cidade: "", estado: "" });

  const handleChange = (e) => setFormData({[e.target.name]: e.target.value });

  return (
    <>
      {/* Cabeçalho */}
      <header className="bg-danger text-center text-white p-3 d-flex align-items-center">
  <img 
    src="images/logo.png" 
    alt="ProVida Medicina" 
    style={{ width: '150px', height: '150px', marginRight: '510px',borderRadius: '100px' }}
  />
  <div>
    <h1 className="display-1 mb-2">ProVida Medicina</h1>
    <h2>Sua saúde em boas mãos</h2>
    <Button variant="outline-light" href="#form" className="btn-lg mt-3" style={{ borderRadius: '10px' }}>
      Inscreva-se
    </Button>
  </div>
</header>


      {/* Serviços */}
      <Container>
  <h3 className="text-center my-3">Conheça nossos serviços</h3>
  <Carousel interval={3500} controls indicators>
    {services.map(({ img, title, text }, i) => (
      <Carousel.Item key={i}>
        <img
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            filter: 'brightness(50%)',
          }}
        />
        <Carousel.Caption
          className="text-white"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50px',
          }}
        >
          <h3>{title}</h3>
          <p>{text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
</Container>




      {/* Equipe */}
      <Container className="mb-3">
        <h3 className="text-center my-3">Conheça nossa equipe</h3>
        <Row>
          {team.map(({ img, name, role }, i) => (
            <Col className="mb-5" key={i}>
              <Card className="text-center">
                <Card.Img src={img} style={{ borderRadius: '50%', width: '160px', height: '160px', margin: '0 auto' }} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Formulário */}
      <Container id="form">
  <div style={{ backgroundColor: '#e0e0e0', padding: '30px', borderRadius: '10px' }}>
    <h3 className="text-center text-dark mb-3">Inscreva-se para saber mais</h3>
    <Form>
  <Form.Group controlId="formNome">
    <Form.Label>Nome:</Form.Label>
    <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} />
  </Form.Group>

  <Form.Group controlId="formEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
  </Form.Group>

  <Form.Group controlId="formCidade">
    <Form.Label>Cidade:</Form.Label>
    <Form.Control type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
  </Form.Group>

  <Form.Group controlId="formEstado">
    <Form.Label>Estado:</Form.Label>
    <Form.Control type="text" name="estado" value={formData.estado} onChange={handleChange} />
  </Form.Group>
  <Button variant="primary" type="submit" className="mt-3" block>Enviar</Button>
</Form>
  </div>
</Container>
    </>
  );
}

export default App;
