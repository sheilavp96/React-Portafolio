import circulo from '../../../../assets/clean.png';
import './estudios.css';

function Estudios() {
    return (
        <section className='work-education'>
            {/* <Title /> */}
            <div className='line'></div>
            <figure className='clean clean1'>
                <img src={circulo} className='clean-dry' />
            </figure>
            <figure className='clean clean2'>
                <img src={circulo} className='clean-dry' />
            </figure>
            <figure className='clean clean3'>
                <img src={circulo} className='clean-dry' />
            </figure>
            <h4 className='title-name title-e'>Education</h4>

            <div className='education1 artes'>
                <h4>Visual arts</h4>
                <p className='text-we'>Mérida - Bellas artes</p>
                <p className='text-we year'>2009-2012</p>
            </div>

            <div className='education1 uady'>
                <h4>Enginnering biotechnology</h4>
                <p className='text-we'>Mérida - Facultad de ingeniería química UADY</p>
                <p className='text-we year'>2015 - Present</p>
            </div>

            <div className='education1 udemy'>
                <h4>HTML, CSS and JavaScript</h4>
                <p className='text-we'>Mérida - Udemy</p>
                <p className='text-we year'>2021 - Present</p>
            </div>

            <h4 className='title-name title-w'>Work</h4>
            <div className='work1 foto'>
                <h4>Perfiles fotográficos</h4>
                <p className='text-we'>Atención al cliente</p>
                <p className='text-we year'>2018 - 2019</p>
            </div>

            <div className='work1 cabimax'>
                <h4>Cabimax</h4>
                <p className='text-we'>CEO</p>
                <p className='text-we year'>2018 - Present</p>
            </div>
        </section>
    );
}
export default Estudios;
