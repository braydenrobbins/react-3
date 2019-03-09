import React from 'react';
import {useToggle} from './useToggle';
import './toggle.css';

function Toggle() {

    const toggle = useToggle();

        const className = `toggle ${toggle.checked ? 'toggle-on' : ''}`;


    return (
        <label className={className}>
            <input type='checkbox' {...toggle}/>
            {toggle.checked ? 'I\'m on' : 'I\'m off'}
        </label>
    );
}

export default Toggle;