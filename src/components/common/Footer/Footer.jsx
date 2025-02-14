
export function Footer(){
    return(
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Política de privacidad</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Términos de servicio</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}