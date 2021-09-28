import './Presentacion.css';
import me from '../../../assets/imagen.png';
import { FormattedMessage } from 'react-intl';
/* import MensajesEspañol from '../../lenguaje/es-MX.json';
import MensajesIngles from '../../lenguaje/en-US.json'; */
// import { Link } from 'react-scroll';
import { langContext } from '../../../context/langContext';
import React, { useContext } from 'react';

// Hi I'am Sheila
// Frontend developer
/* Biotechnology engineering student seeking professional practice to gain work experience in web development. Eager to apply my knowledge in CSS, html and JavaScript. */
function Presentacion() {
    const idioma = useContext(langContext);
    console.log(idioma);
    return (
        <div className='presentacion-content'>
            <div className='presentacion-item'>
                <h1 className='saludo'>
                    <FormattedMessage id='presentacion.saludo' defaultMessage='Hola, soy Sheila' />
                </h1>
                <h3 className='text-frontend'>
                    <FormattedMessage id='frontend' defaultMessage='Desarrollador Front end' />
                </h3>
                <p className='text'>
                    <FormattedMessage id='interes' />
                </p>
            </div>
            <figure className='presentacion-img'>
                <img src={me} className='img-me' />
            </figure>
        </div>
    );
}
export default Presentacion;
