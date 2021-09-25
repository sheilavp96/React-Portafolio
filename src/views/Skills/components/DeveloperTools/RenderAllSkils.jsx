import React, { memo } from 'react';
import { conocimientosSheila, conocimientosSheila2 } from './contants';

const RenderAllSkils = memo(({ typeOfSkill }) => {
    let arrayOfSkills = conocimientosSheila.skills;
    if (typeOfSkill === 'design') {
        arrayOfSkills = conocimientosSheila2.skills;
    }

    return (
        <div className='row skills'>
            {arrayOfSkills.map((skill, key) => {
                return (
                    <div key={key} className='skills_item_container'>
                        <figure className='container_image'>
                            <img src={skill.img} />
                        </figure>
                        <p className='caption'>{skill.name}</p>
                    </div>
                );
            })}
        </div>
    );
});

export default RenderAllSkils;
