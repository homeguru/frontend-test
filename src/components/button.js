import React from 'react';

const Button = ({onClick, text}) => (
    <div href="#" className="btn-marvel" onClick={onClick}>
        <div className="inner-fill">{text}</div>
    </div>
);

export default Button;