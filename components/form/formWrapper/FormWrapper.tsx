import {FC} from 'react';

import {FormWrapperProps} from './type';

import styles from './FormWrapper.module.scss';

const FormWrapper: FC<FormWrapperProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}

export default FormWrapper
