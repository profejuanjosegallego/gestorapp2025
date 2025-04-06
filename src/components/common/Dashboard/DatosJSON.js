export let datosAPI = [
    {
        id: 1,
        nombreEspacio: "Sauna",
        descripcion: "Sauna familiar con vapores que enamoran",
        foto: "https://static.vecteezy.com/system/resources/previews/011/603/110/non_2x/interior-of-finnish-sauna-classic-wooden-sauna-with-hot-steam-russian-bathroom-relax-in-hot-sauna-with-steam-wooden-interior-baths-wooden-benches-and-loungers-accessories-for-sauna-spa-complex-free-photo.jpg",
        capacidad: 10,
        calendario: [
            {
                dia: "Martes",
                hora: "13:00-14:00"
            },
            { 
                dia: "Miércoles",
                hora: "10:00-11:00"
            }
        ]
    },
    {
        id: 2,
        nombreEspacio: "Piscina",
        descripcion: "Piscina olímpica de medidas reglamentarias",
        foto: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
        capacidad: 5,
        calendario: [
            {
                dia: "Miércoles",
                hora: "14:00-15:00"
            },
            { 
                dia: "Jueves",
                hora: "16:00-17:00"
            }
        ]
    },
    {
        id: 3,
        nombreEspacio: "Gimnasio",
        descripcion: "Gimnasio con equipos modernos",
        foto: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
        capacidad: 20,
        calendario: [
            {
                dia: "Lunes",
                hora: "08:00-09:00"
            },
            { 
                dia: "Viernes",
                hora: "17:00-18:00"
            }
        ]
    },
    {
        id: 4,
        nombreEspacio: "Cancha de Fútbol",
        descripcion: "Cancha de césped sintético",
        foto: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
        capacidad: 22,
        calendario: [
            {
                dia: "Sábado",
                hora: "10:00-12:00"
            },
            { 
                dia: "Domingo",
                hora: "15:00-17:00"
            }
        ]
    },
    {
        id: 5,
        nombreEspacio: "Cancha de Baloncesto",
        descripcion: "Cancha profesional de baloncesto",
        foto: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg",
        capacidad: 10,
        calendario: [
            {
                dia: "Martes",
                hora: "16:00-17:00"
            },
            { 
                dia: "Jueves",
                hora: "18:00-19:00"
            }
        ]
    },
    {
        id: 6,
        nombreEspacio: "Zona de BBQ",
        descripcion: "Espacio al aire libre con parrillas",
        foto: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
        capacidad: 15,
        calendario: [
            {
                dia: "Sábado",
                hora: "12:00-14:00"
            },
            { 
                dia: "Domingo",
                hora: "13:00-15:00"
            }
        ]
    },
    {
        id: 7,
        nombreEspacio: "Salón de Eventos",
        descripcion: "Salón para reuniones y celebraciones",
        foto: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
        capacidad: 50,
        calendario: [
            {
                dia: "Viernes",
                hora: "19:00-22:00"
            },
            { 
                dia: "Sábado",
                hora: "18:00-21:00"
            }
        ]
    },
    {
        id: 8,
        nombreEspacio: "Sala de Juegos",
        descripcion: "Sala con billar, ping-pong y videojuegos",
        foto: "https://images.pexels.com/photos/344029/pexels-photo-344029.jpeg",
        capacidad: 12,
        calendario: [
            {
                dia: "Lunes",
                hora: "14:00-15:00"
            },
            { 
                dia: "Miércoles",
                hora: "16:00-17:00"
            }
        ]
    },
    {
        id: 9,
        nombreEspacio: "Jacuzzi",
        descripcion: "Jacuzzi con hidromasaje",
        foto: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
        capacidad: 6,
        calendario: [
            {
                dia: "Martes",
                hora: "15:00-16:00"
            },
            { 
                dia: "Jueves",
                hora: "17:00-18:00"
            }
        ]
    },
    {
        id: 10,
        nombreEspacio: "Zona de Yoga",
        descripcion: "Espacio tranquilo para clases de yoga",
        foto: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
        capacidad: 8,
        calendario: [
            {
                dia: "Lunes",
                hora: "07:00-08:00"
            },
            { 
                dia: "Miércoles",
                hora: "08:00-09:00"
            }
        ]
    }
];

localStorage.setItem("datos", JSON.stringify(datosAPI));