import React from 'react';

export const Info = (props) => {
    return (
        <div className='divStylesLeft'>
            <p className='littleText'>{props.text}</p>
            <p className='underlineText'>{props.value}</p>
        </div>
    );
};