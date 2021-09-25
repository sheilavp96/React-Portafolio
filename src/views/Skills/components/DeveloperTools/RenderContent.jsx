import React, { memo } from 'react';
import RenderAllTitles from './RenderAllTitles';
import RenderAllSkils from './RenderAllSkils';
const RenderContent = memo(({ type }) => {
    return (
        <div className='col'>
            <RenderAllTitles typeOfSkill={type} />
            <RenderAllSkils typeOfSkill={type} />
        </div>
    );
});

export default RenderContent;
