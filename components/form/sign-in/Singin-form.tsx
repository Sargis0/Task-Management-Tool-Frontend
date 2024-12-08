import Link from 'next/link';
import {useForm, SubmitHandler} from 'react-hook-form';

import {ISignInForm} from '../types'

import Input from '../../UI/input/Input';
import FormWrapper from '../formWrapper/FormWrapper';

import formWrapperStyles from '../formWrapper/FormWrapper.module.scss';
import styles from '../Common.module.scss'

const SinginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ISignInForm>();
    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

    return (
        <FormWrapper className={formWrapperStyles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    className={styles.input}
                    labelClass={styles.label}
                    type='text'
                    label='Email'
                    {...register('email', {
                        required: 'email is required.',
                        maxLength: {
                            value: 40,
                            message: 'email must be no more than 30 characters long.'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'email is not valid.'
                        }
                    })}
                />

                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                <input type='submit' value='Sign In' className={styles.submitButton}/>
            </form>

            <Link href='/sign-up'>Create an account</Link>
        </FormWrapper>
    );
};

export default SinginForm;
