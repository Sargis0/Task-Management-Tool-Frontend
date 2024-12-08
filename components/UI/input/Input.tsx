import React, {forwardRef} from 'react';

import {InputProps} from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(({className, labelClass, label, ...props}, ref) => {
    return (
        <>
            {label && <label className={labelClass}>{label}</label>}
            <input className={className} ref={ref} {...props} />
        </>
    );
});

export default Input;
