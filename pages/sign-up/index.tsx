import Link from 'next/link';
import SignupForm from '../../components/form/signup-form/Signup-form';

const Index = () => {
    return (
        <div>
            <Link href='/'>Back to home</Link>
            <SignupForm/>

        </div>
    );
};

export default Index;
