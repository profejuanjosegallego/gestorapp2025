// src/lib/facilitiesData.js
const facilitiesData = [
    {
        id: 1,
        nombreEspacio: "Conference Room A",
        descripcion: "Conference room equipped with projector, sound system and capacity for corporate meetings",
        foto: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 20,
        calendario: [
            { dia: "lunes", hora: "10:00 am - 11:00 am" },
            { dia: "miercoles", hora: "2:00 pm - 3:00 pm" },
            { dia: "viernes", hora: "4:00 pm - 5:00 pm" }
        ]
    },
    {
        id: 2,
        nombreEspacio: "Conference Room B",
        descripcion: "Meeting room with oval table, smart board and integrated video conferencing system",
        foto: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 15,
        calendario: [
            { dia: "martes", hora: "11:00 am - 12:00 pm" },
            { dia: "jueves", hora: "3:00 pm - 4:00 pm" }
        ]
    },
    {
        id: 3,
        nombreEspacio: "Event Hall",
        descripcion: "Spacious ballroom for corporate events, celebrations, and conferences with adjustable lighting",
        foto: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 100,
        calendario: [
            { dia: "sabado", hora: "10:00 am - 12:00 pm" },
            { dia: "domingo", hora: "2:00 pm - 5:00 pm" }
        ]
    },
    {
        id: 4,
        nombreEspacio: "Garden Area",
        descripcion: "Outdoor green area ideal for social events, team building sessions and celebrations",
        foto: "https://images.unsplash.com/photo-1613901693624-ecada26e7d11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        capacidad: 50,
        calendario: [
            { dia: "viernes", hora: "12:00 pm - 2:00 pm" },
            { dia: "sabado", hora: "3:00 pm - 5:00 pm" }
        ]
    },
    {
        id: 5,
        nombreEspacio: "Sports Court",
        descripcion: "Multi-sport court with equipment for basketball, volleyball and other recreational sports",
        foto: "https://images.unsplash.com/photo-1614675656727-b3512429ac0f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        capacidad: 30,
        calendario: [
            { dia: "lunes", hora: "4:00 pm - 5:00 pm" },
            { dia: "miercoles", hora: "10:00 am - 11:00 am" },
            { dia: "sabado", hora: "1:00 pm - 3:00 pm" }
        ]
    },
    {
        id: 6,
        nombreEspacio: "Conference Room A",
        descripcion: "Executive room with round table, dual projection system and equipment for presentations",
        foto: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 25,
        calendario: [
            { dia: "martes", hora: "10:00 am - 12:00 pm" },
            { dia: "jueves", hora: "1:00 pm - 2:00 pm" }
        ]
    },
    {
        id: 7,
        nombreEspacio: "Conference Room B",
        descripcion: "Modern meeting space with acoustic panels, charging stations and controlled environment",
        foto: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&flip=h",
        capacidad: 18,
        calendario: [
            { dia: "lunes", hora: "1:00 pm - 2:00 pm" },
            { dia: "miercoles", hora: "3:00 pm - 4:00 pm" },
            { dia: "viernes", hora: "11:00 am - 12:00 pm" }
        ]
    },
    {
        id: 8,
        nombreEspacio: "Event Hall",
        descripcion: "Versatile hall with stage, professional sound system and capacity for large events",
        foto: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        capacidad: 120,
        calendario: [
            { dia: "jueves", hora: "4:00 pm - 5:00 pm" },
            { dia: "domingo", hora: "10:00 am - 1:00 pm" }
        ]
    },
    {
        id: 9,
        nombreEspacio: "Garden Area",
        descripcion: "Garden with pergolas, ambient lighting and space for outdoor recreational activities",
        foto: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 40,
        calendario: [
            { dia: "martes", hora: "3:00 pm - 5:00 pm" },
            { dia: "sabado", hora: "10:00 am - 11:00 am" }
        ]
    },
    {
        id: 10,
        nombreEspacio: "Sports Court",
        descripcion: "Indoor sports facility with stands, changing rooms and equipment for different sports",
        foto: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        capacidad: 45,
        calendario: [
            { dia: "miercoles", hora: "1:00 pm - 2:00 pm" },
            { dia: "viernes", hora: "3:00 pm - 5:00 pm" },
            { dia: "domingo", hora: "4:00 pm - 5:00 pm" }
        ]
    }
];

export default facilitiesData;