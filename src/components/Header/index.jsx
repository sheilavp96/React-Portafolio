import React, { useContext } from 'react';
import './HeaderItem.css';
import { Link } from 'react-scroll';
// import { IntlProvider } from 'react-intl';
// import MensajesEspañol from '../../views/lenguaje/es-MX.json';
// import MensajesIngles from '../../views/lenguaje/en-US.json';
import { FormattedMessage } from 'react-intl';
import es from '../../assets/mexico.png';
import en from '../../assets/estados-unidos.png';
import { langContext } from '../../context/langContext';

function HeaderItem() {
    const idioma = useContext(langContext);
    console.log(idioma);
    return (
        <div className='header-item'>
            <div className='banderas'>
                <button onClick={() => idioma.establecerLenguaje('es-MX')}>
                    <img classname='mexico' src={es} alt='' />
                </button>
                <button onClick={() => idioma.establecerLenguaje('en-EU')}>
                    <img classname='mexico' src={en} alt='' />
                </button>
            </div>
            <ul className='header-name'>
                <Link to='section--0' smooth={true} duration={1000}>
                    <FormattedMessage id='nombre' />
                </Link>
            </ul>
            <ol className='header-list'>
                <ul>
                    <Link className='header-link' to='section--1' smooth={true} duration={1000}>
                        <FormattedMessage id='scroll.habilidad' />
                    </Link>
                </ul>
                <ul>
                    <Link className='header-link' to='section--2' smooth={true} duration={1000}>
                        <FormattedMessage id='scroll.formacion' />
                    </Link>
                </ul>
                <ul>
                    <Link className='header-link' to='section--3' smooth={true} duration={1000}>
                        <FormattedMessage id='scroll.proyecto' />
                    </Link>
                </ul>
            </ol>
        </div>
    );
}
export default HeaderItem;
