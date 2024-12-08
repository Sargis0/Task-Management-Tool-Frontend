import Link from 'next/link';
import {useForm, SubmitHandler} from 'react-hook-form';

import {ISignupForm, GenderEnum} from '../types';

import Input from '../../UI/input/Input';
import GenderSelect from '../genderSelect/GenderSelect';
import FormWrapper from '../formWrapper/FormWrapper';

import wrapperStyles from '../formWrapper/FormWrapper.module.scss';
import styles from '../Common.module.scss';

const SignupForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ISignupForm>();
    const onSubmit: SubmitHandler<ISignupForm> = data => console.log(data);

    return (
        <FormWrapper className={wrapperStyles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    className={styles.input}
                    labelClass={styles.label}
                    type='text'
                    label='First name'
                    {...register('firstName', {
                        required: 'First name is required.',
                        maxLength: {
                            value: 30,
                            message: 'First name must be no more than 30 characters long.'
                        }
                    })}
                />
                {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}

                <Input
                    className={styles.input}
                    labelClass={styles.label}
                    type='text'
                    label='Last name'
                    {...register('lastname', {
                        required: 'Last name is required.',
                        maxLength: {
                            value: 30,
                            message: 'Last name must be no more than 30 characters long.'
                        }
                    })}
                />
                {errors.lastname && <span className={styles.error}>{errors.lastname.message}</span>}

                <Input
                    className={styles.input}
                    labelClass={styles.label}
                    type='number'
                    label='Age'
                    {...register('age', {
                        required: 'Age is required.',
                        min: {
                            value: 1,
                            message: 'Age must be at least 1.'
                        },
                        max: {
                            value: 120,
                            message: 'Age must be no more than 120.'
                        }
                    })}
                />
                {errors.age && <span className={styles.error}>{errors.age.message}</span>}

                <GenderSelect
                    className={styles.genderSelect}
                    GenderEnum={GenderEnum}
                    register={register}
                    name='gender'
                />
                {errors.gender && <span className={styles.error}>{errors.gender.message}</span>}

                <input className={styles.submitButton} type='submit'/>
            </form>

            <Link href='/sign-in'>
                Already have an account? Log in
            </Link>
        </FormWrapper>
    );
};

export default SignupForm;
