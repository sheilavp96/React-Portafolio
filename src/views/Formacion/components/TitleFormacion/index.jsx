import './titleformacion.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesEspañol from '../../../lenguaje/es-MX.json';
import MensajesIngles from '../../../lenguaje/en-US.json';

function TitleFormacion() {
    return (
        <IntlProvider locale='en-US' messages={MensajesIngles}>
            <div>
                <h1 className='title-formacion'>
                    <FormattedMessage id='formacion' />
                </h1>
                <h3 class='journey'>
                    <FormattedMessage id='trayectoria' />
                </h3>
            </div>
        </IntlProvider>
    );
}
export default TitleFormacion;
