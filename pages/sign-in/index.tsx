import Link from 'next/link'

import SinginForm from '../../components/form/sign-in/Singin-form';

const Index = () => {
    return (
        <div>
            <Link href='/'>back to home</Link>
            <SinginForm/>
        </div>
    );
};

export default Index;
