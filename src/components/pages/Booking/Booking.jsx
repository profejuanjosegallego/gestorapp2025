import { useState } from 'react';
import { Modal, Button, Card, Row, Col, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'


const espacios = [
    {
        id: 1,
        nombre: "Piscina",
        descripcion: "Amplia piscina con zonas para niños y adultos. Cuenta con sombrillas y sillas para descansar.",
        imagen: "../../../../src/assets/img/e-piscina.jpg",
        horarios: ["8:00 AM - 12:00 PM", "2:00 PM - 6:00 PM", "6:00 PM - 10:00 PM"]
    },
    {
        id: 2,
        nombre: "Salón Social",
        descripcion: "Espacio ideal para reuniones y celebraciones. Capacidad para 50 personas con cocina equipada.",
        imagen: "../../../../src/assets/img/e-salonSocial.jpg",
        horarios: ["8:00 AM - 2:00 PM", "3:00 PM - 11:00 PM"]
    },
    {
        id: 3,
        nombre: "Cancha Deportiva",
        descripcion: "Cancha múltiple para basketball, volleyball y fútbol sala. Iluminación nocturna disponible.",
        imagen: "../../../../src/assets/img/e-cancha.jpg",
        horarios: ["6:00 AM - 10:00 AM", "4:00 PM - 10:00 PM"]
    },
    {
        id: 4,
        nombre: "Zona BBQ",
        descripcion: "Área con parrillas, mesas y sillas. Perfecto para asados familiares y reuniones al aire libre.",
        imagen: "../../../../src/assets/img/e-bbq.jpg",
        horarios: ["10:00 AM - 4:00 PM", "4:00 PM - 10:00 PM"]
    }
];


export function Booking() {
    const [showModal, setShowModal] = useState(false);
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleOpenModal = (espacio) => {
        setSelectedSpace(espacio);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSpace(null);
        setSelectedDate('');
        setSelectedTime('');
    };

    const handleReservar = () => {
        Swal.fire({
            title: `Reserva confirmada: \n ${selectedSpace.nombre} para el \n${selectedDate}, \n${selectedTime}`,
            icon: "success",
            draggable: true
        });
        handleCloseModal();
    };

    const today = new Date().toISOString().split('T')[0];

    return (

        <div className="container py-5">
            <br />
            <br />
            <h1 className="text-center mb-5">Reserva de Espacios</h1>

            <p className="text-center mb-5">
                Aquí puedes seleccionar cada uno de los espacios y agendar tu reserva según disponibilidad.
            </p>

            <Row xs={1} md={2} lg={3} className="g-4">
                {espacios.map((espacio) => (
                    <Col key={espacio.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={espacio.imagen} alt={espacio.nombre} />
                            <Card.Body>
                                <Card.Title>{espacio.nombre}</Card.Title>
                                <Card.Text>{espacio.descripcion}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <Button
                                    variant="primary"
                                    className="w-100"
                                    onClick={() => handleOpenModal(espacio)}
                                >
                                    Agendar
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                {selectedSpace && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedSpace.nombre}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col md={5}>
                                    <img
                                        src={selectedSpace.imagen}
                                        alt={selectedSpace.nombre}
                                        className="img-fluid rounded mb-3"
                                    />
                                </Col>
                                <Col md={7}>
                                    <h5>Descripción</h5>
                                    <p>{selectedSpace.descripcion}</p>

                                    <h5 className="mt-4">Selecciona Fecha y Horario</h5>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min={today}
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Horario Disponible</Form.Label>
                                            <Form.Select
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                required
                                            >
                                                <option value="">Selecciona un horario</option>
                                                {selectedSpace.horarios.map((horario, index) => (
                                                    <option key={index} value={horario}>
                                                        {horario}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancelar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleReservar}
                                disabled={!selectedDate || !selectedTime}
                            >
                                Confirmar Reserva
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
}
