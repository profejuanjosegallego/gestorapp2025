export async function consultarImagenes(){


    const URL="https://api.pexels.com/v1/search?query=nature&per_page=10"

    const TOKEN="7XzrdbNBHkHOfqiJrOsG5PCiC46ldPHFOQhHoMAOsOAmLjFYDAqEYQvF"

    let peticion={
        method:"GET",
        headers:{"Authorization":TOKEN}
    }

    let respuestApi=await fetch(URL,peticion)

    let imagenes= await respuestApi.json()

    return imagenes
}