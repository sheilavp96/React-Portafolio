import './proinfo.css';
import calendario from '../../../assets/calendario.png';
import cabina from '../../../assets/logo2.png';
import web from '../../../assets/web.png';
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesEspañol from '../../lenguaje/es-MX.json';
import MensajesIngles from '../../lenguaje/en-US.json';

function ProInfo() {
    return (
        <IntlProvider locale='en-US' messages={MensajesIngles}>
            <div className='contenedor-p'>
                <h1 className='portfolio-title'>
                    <FormattedMessage id='portafolio' />
                </h1>

                <h4 className='title-name name-calendario name-proyect'>
                    <FormattedMessage id='calendario' />
                </h4>
                <figure className='fig-proyect calendario'>
                    <img className='img-proyect calendario-img' src={calendario} />
                </figure>
                <a className='btn calendario-btn' href='https://sheilavp96.github.io/Calendario/' target='_blank'>
                    Ver más
                </a>

                <h4 className='title-name name-cabina name-proyect'>Cabimax</h4>
                <figure className='fig-proyect cabina'>
                    <img className='img-proyect cabina-img' src={cabina} />
                </figure>
                <a className='btn cabina-btn' href='https://sheilavp96.github.io/cabimax/' target='_blank'>
                    Ver más
                </a>

                <h4 className='title-name name-mia name-proyect'>
                    <FormattedMessage id='pagina' />
                </h4>
                <figure className='fig-proyect mia'>
                    <img className='img-proyect mia-img' src={web} />
                </figure>
                <a className='btn mia-btn' href='https://sheilavp96.github.io/pagina-Mia/' target='_blank'>
                    Ver más
                </a>
            </div>
        </IntlProvider>
    );
}

export default ProInfo;
