import React from 'react';
import {css,cx} from '@emotion/css';

const Button = ({children , type, onClick}) => (
    <button onClick={onClick} className={css`
        padding: 32px;
        border: none;
        background-color: ${type === 'primary'? 'blue' : 'red'};
        color: white;
        margin: 10px;
        &:hover{
            background-color: green;
        }
    `}>
        {children}
    </button>
)


export default Button;