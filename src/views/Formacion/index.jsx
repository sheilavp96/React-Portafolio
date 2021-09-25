import './formacion.css';
import Estudios from './components/Estudios';
import TitleFormacion from './components/TitleFormacion';

function Formacion() {
    return (
        <div className='contenedor' id='section--2'>
            <TitleFormacion />
            <Estudios />
        </div>
    );
}
export default Formacion;
