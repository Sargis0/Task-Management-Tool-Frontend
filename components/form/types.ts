export enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

export interface ISignupForm {
    firstName: string,
    lastname: string,
    age: number,
    gender: GenderEnum
}

export interface ISignInForm {
    email: string
}

export interface GenderSelectProps {
    GenderEnum: typeof GenderEnum;
    register: any;
    name: string;
}
