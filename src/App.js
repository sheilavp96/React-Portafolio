import Section1 from './views/Section1';
import Skills from './views/Skills';
import Formacion from './views/Formacion';
import Proyectos from './views/Proyectos';
import SocialMedia from './components/Redes';
// import { IntlProvider } from 'react-intl';

function App() {
    return (
        <div>
            <Section1 />
            <Skills />
            <Formacion />
            <Proyectos />
            <SocialMedia />
        </div>
    );
}

export default App;
