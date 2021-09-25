import './Presentacion.css';
import me from '../../../assets/imagen.png';
/* import me from '../../assets/imagen.png'; */
function Presentacion() {
    return (
        <div className='presentacion-content'>
            <div className='presentacion-item'>
                <h1 className='saludo'>Hi I'am Sheila</h1>
                <h3 className='text-frontend'>Frontend developer</h3>
                <p className='text'>
                    Biotechnology engineering student seeking professional practice to gain work experience in web development. Eager to apply my
                    knowledge in CSS, html and JavaScript.
                </p>
            </div>
            <figure className='presentacion-img'>
                <img src={me} className='img-me' />
            </figure>
        </div>
    );
}
export default Presentacion;
