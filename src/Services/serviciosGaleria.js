export async function consultarImagenes() {

    //1. para donde voy (URI API)   

    const url = "https://api.pexels.com/v1/search?query=medellin&per_page=10"

    //2. configuro la peticion

    const TOKEN = "Ei5ErYFg1EaRNic4JLtQKFCNuKhSqNNXWc9CNuAcl35KudteDsB0gzAW"

    let peticion ={
        method:"GET",
        headers:{"Authorization":TOKEN}
    }
    
    //3. consumir el API
    let respuestaAPI = await fetch(url,peticion)
    let fotos = await respuestaAPI.json()
    return(fotos);







}