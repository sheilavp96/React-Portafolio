import Section1 from './views/Section1';
import Skills from './views/Skills';
import Formacion from './views/Formacion';
import Proyectos from './views/Proyectos';
import SocialMedia from './components/Redes';

function App() {
    return (
        <div>
            <Section1 />
            <Skills />
            <Formacion href='#section--2' />
            <Proyectos href='#section--3' />
            <SocialMedia />
        </div>
    );
}

export default App;
