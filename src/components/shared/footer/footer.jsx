import React from 'react'


function Footer() {
  return (
    <footer className='footer d-flex bg-black text-light light-link mt-4 py-4   

    '>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h3 className='text-capitalize'>Enlaces</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h3 className='text-capitalize'>Contacto</h3>
          <p>Correo electrónico: info@example.com</p>
          <p>Teléfono: 123-456-7890</p>
        </div>
        <div className="col-lg-4">
          <h3 className='text-capitalize'>Derechos de autor</h3>
          <p>(c) 2024 MOMPRIXX. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer