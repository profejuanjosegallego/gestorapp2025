import '../../common/Acerca/Acerca.css'

export function Acerca(){
    return(

        <section className="container my-5">
            <section className="row">
                <section className="col-12 col-md-6">
                    <img src="../../../../src/assets/img/family.jpg" alt="imagen" className="img-fluid"/>
                </section>
                <section className="col-12 col-md-6">
                    <h2>GestorApp</h2>
                    <p className='explicaion-gestorapp'>
                    The app that facilitates the management of spaces and events in your residential unit. <hr />

                    Book common areas such as swimming pools, gyms and social rooms quickly and easily. Manage community events, keep an efficient control of reservations and improve the coexistence in your complex. All in one place, easy and secure.
                    </p>
                </section>
            </section>
        </section>
    )
}