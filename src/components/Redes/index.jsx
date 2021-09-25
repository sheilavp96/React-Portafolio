import './SocialM.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import arrow from '../../assets/right-arrow.svg';
import { animateScroll as scroll } from 'react-scroll';
function SocialMedia() {
    return (
        <div className='section-social'>
            <div className='social-media'>
                <a className='social' href='https://github.com/sheilavp96' target='_blank'>
                    <figure className='fig icon-git'>
                        <img className='github-icon img-g' src={github} />
                    </figure>
                </a>
                <a className='social' href='https://www.linkedin.com/in/sheilavp96/' target='_blank'>
                    <figure className='fig icon-lin'>
                        <img className='link-icon img-g' src={linkedin} />
                    </figure>
                </a>
                <img src={arrow} alt='arrow' className='up' onClick={() => scroll.scrollToTop()} />
            </div>
        </div>
    );
}

export default SocialMedia;
