import './proinfo.css';
import calendario from '../../../assets/calendario.png';
import cabina from '../../../assets/logo2.png';
import web from '../../../assets/web.png';

function ProInfo() {
    return (
        <div className='contenedor-p'>
            <h1 className='portfolio-title'>Portfolio</h1>

            <h4 className='title-name name-calendario name-proyect'>Calendario</h4>
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

            <h4 className='title-name name-mia name-proyect'>Página Mía</h4>
            <figure className='fig-proyect mia'>
                <img className='img-proyect mia-img' src={web} />
            </figure>
            <a className='btn mia-btn' href='https://sheilavp96.github.io/pagina-Mia/' target='_blank'>
                Ver más
            </a>
        </div>
    );
}

export default ProInfo;
