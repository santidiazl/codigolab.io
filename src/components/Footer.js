import React from 'react'

const Footer = props => (
  <footer id='footer'>
    <section></section>
    <section>
      <h2>Código Lab</h2>
      <dl className='alt'>
        {/* <dt>Address</dt>
        <dd>Cra. 48 #7-186 &bull; Medellin, Antioquia &bull; Colombia</dd> */}
        <dt>Correo Electrónico</dt>
        <dd>
          <a href='mailto:info@codigolab.io'>info@codigolab.io</a>
        </dd>
        <br></br>
        <dt>Tel.</dt>
        <dd>
          <a href='tel:3016214206'>(301) 621-4206</a>
        </dd>
      </dl>
      <ul className='icons'>
        <li>
          <a href='https://www.facebook.com/codigolab' target='_blank' rel='noreferrer' className='icon fa-facebook alt'>
            <span className='label'>Facebook</span>
          </a>
        </li>
        <li>
          <a href='https://instagram.com/codigolab' target='_blank' rel='noreferrer' className='icon fa-instagram alt'>
            <span className='label'>Instagram</span>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/codigo_lab' target='_blank' rel='noreferrer' className='icon fa-twitter alt'>
            <span className='label'>Twitter</span>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/school/codigolab/' target='_blank' rel='noreferrer' className='icon fa-linkedin alt'>
            <span className='label'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href='https://web.whatsapp.com/send?phone=573016214206&text=Hola,%20me+gustaría+conocer+más+acerca+del+bootcamp+de+Desarrollo+Web+Full+Stack+de+Código Lab.
            '
            target='_blank'
            rel='noreferrer'
            className='icon fa-whatsapp alt'
          >
            <span className='label'>WhatsApp</span>
          </a>
        </li>
      </ul>
    </section>
    <p className='copyright'>
      &copy; 2021 Acadev Labs, NIT #901401039-6. Todos los derechos reservados.{' '}
      <span role='img' aria-label='colombia'>
        🇨🇴
      </span>
    </p>
  </footer>
)

export default Footer
