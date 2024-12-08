import Link from 'next/link'

const Logo = () => {
    const siteLogo: string = 'Rivo';
    return (
        <div>
            <Link href='/'>
                <h4>{siteLogo}</h4>
            </Link>
        </div>
    );
};

export default Logo;
