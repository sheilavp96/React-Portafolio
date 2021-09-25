import React, { memo } from 'react';
import { conocimientosSheila, conocimientosSheila2 } from './contants';

const RenderAllTitles = memo(({ typeOfSkill }) => {
    let titleInfo = conocimientosSheila.section;

    if (typeOfSkill === 'design') {
        titleInfo = conocimientosSheila2.section;
    }

    return (
        <div className='row title'>
            <div className='title_container'>
                <figure className='container_image'>
                    <img src={titleInfo.img} />
                </figure>
                <h4 className='title'>{titleInfo.title}</h4>
            </div>
        </div>
    );
});

export default RenderAllTitles;
