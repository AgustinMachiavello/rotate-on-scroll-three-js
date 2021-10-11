import React from 'react';

export default function ProgressBar(props) {
    return (
        <div style={{width: '100%', height: '30px', backgroundColor: 'grey'}}>
            <div style={{width: `${props.progress ? props.progress : 0}%`, height: '30px', backgroundColor: 'blue'}}>
            </div>
        </div>
    )
}