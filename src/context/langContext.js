import React, { useState } from 'react';
import MensajesIngles from '../views/lenguaje/en-US.json';
import MensajesEspañol from '../views/lenguaje/es-MX.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    const [mensajes, setMensajes] = useState(MensajesIngles);
    const [locale, setLocale] = useState('en-US');

    const establecerLenguaje = (lenguaje) => {
        //que este disponible en toda la paginga
        switch (lenguaje) {
            case 'es-MX':
                setMensajes(MensajesEspañol);
                setLocale('es-MX');
                break;
            case 'en-US':
                setMensajes(MensajesIngles);
                setLocale('en-US');
                break;
            default:
                setMensajes(MensajesIngles);
                setLocale('en-US');
        }
    };
    return (
        <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { LangProvider, langContext };
