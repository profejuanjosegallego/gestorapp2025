
export async function consultarImagenes(query) {
    // 1. Construir la URL dinámica con el término de búsqueda
    const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

    // 2. Configuro la petición
    const TOKEN = "tTeBcZZ422mogLi5S0m04ZUOvwy0hIctbnjW9RNFQLgNDBotlMcQkgcT";

    const peticion = {
        method: "GET",
        headers: { "Authorization": TOKEN }
    };

    // 3. Consumir el API
    const respuestaAPI = await fetch(URL, peticion);
    const fotos = await respuestaAPI.json();
    return fotos;
}
