import circulo from '../../../../assets/clean.png';
import './estudios.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesEspañol from '../../../lenguaje/es-MX.json';
import MensajesIngles from '../../../lenguaje/en-US.json';

// Education
function Estudios() {
    return (
        <IntlProvider locale='en-US' messages={MensajesIngles}>
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
                <h4 className='title-name title-e'>
                    <FormattedMessage id='educacion' defaultMessage='Educacion' />
                </h4>

                <div className='education1 artes'>
                    <h4>
                        <FormattedMessage id='artes' defaultMessage='Artes visuales' />
                    </h4>
                    <p className='text-we'>Mérida - Bellas artes</p>
                    <p className='text-we year'>2009-2012</p>
                </div>

                <div className='education1 uady'>
                    <h4>
                        <FormattedMessage id='fiq' />
                    </h4>

                    <p className='text-we'>Mérida - Facultad de ingeniería química UADY</p>
                    <p className='text-we year'>2015 - Present</p>
                </div>

                <div className='education1 udemy'>
                    <h4>
                        <FormattedMessage id='udemy' />
                    </h4>
                    <p className='text-we'>Mérida - Udemy</p>
                    <p className='text-we year'>2021 - Present</p>
                </div>

                <h4 className='title-name title-w'>
                    <FormattedMessage id='trabajo' />
                </h4>
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
        </IntlProvider>
    );
}
export default Estudios;
