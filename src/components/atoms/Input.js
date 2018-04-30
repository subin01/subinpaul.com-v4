import React from 'react';

function Input(props) {
    const type = props.type && props.type ? props.type : '';

    return (
        <input id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            type={type}
        />);
}
export default Input;
