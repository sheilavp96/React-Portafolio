import './title.css';
import { FormattedMessage } from 'react-intl';
/* import MensajesEspañol from '../../../lenguaje/es-MX.json';
import MensajesIngles from '../../../lenguaje/en-US.json'; */
import { langContext } from '../../../../context/langContext';
import React, { useContext } from 'react';

function Title() {
    const idioma = useContext(langContext);
    return (
        <div>
            <h1 className='title'>
                <FormattedMessage id='habilidades' />
            </h1>
        </div>
    );
}
export default Title;
