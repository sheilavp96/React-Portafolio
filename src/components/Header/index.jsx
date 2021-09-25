import './HeaderItem.css';
import { Link } from 'react-scroll';

function HeaderItem() {
    return (
        <div className='header-item'>
            <ul className='header-name'>
                <Link to='section--0' smooth={true} duration={1000}>
                    Sheila
                </Link>
            </ul>
            <ol className='header-list'>
                <ul>
                    <Link className='header-link' to='section--1' smooth={true} duration={1000}>
                        Skills
                    </Link>
                </ul>
                <ul>
                    <Link className='header-link' to='section--2' smooth={true} duration={1000}>
                        Qualification
                    </Link>
                </ul>
                <ul>
                    <Link className='header-link' to='section--3' smooth={true} duration={1000}>
                        Portfolio
                    </Link>
                </ul>
            </ol>
        </div>
    );
}
export default HeaderItem;
