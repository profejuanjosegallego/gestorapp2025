export async function consultarImagenes() {

    //1.Para donde voy (URI API)
    const URL="https://api.pexels.com/v1/search?query=nature&per_page=10"

    //2. Configuro la peticion
    const TOKEN="tTeBcZZ422mogLi5S0m04ZUOvwy0hIctbnjW9RNFQLgNDBotlMcQkgcT"

    let peticion={
        method:"GET",
        headers:{"Authorization":TOKEN}
    }

    //3. Consumir el API
    let respuestaAPI=await fetch(URL,peticion)
    let fotos=await respuestaAPI.json()
    return(fotos)
}