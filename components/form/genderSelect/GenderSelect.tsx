import React from 'react';

import {GenderSelectProps} from '../types'

const GenderSelect: React.FC<GenderSelectProps> = ({GenderEnum, register, name, ...props}) => {
    return (
        <>
            <label>Gender Selection</label>
            <select {...register(name)} {...props}>
                {Object.values(GenderEnum).map(gender => (
                    <option key={gender} value={gender}>{gender}</option>
                ))}
            </select>
        </>
    );
};

export default GenderSelect;
