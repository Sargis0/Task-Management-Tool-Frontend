import Link from 'next/link';

import {navLinks} from './constants';

const Menu = () => {
    return (
        <div>
            <ul>
                {navLinks.map(({id, item, link}) => (
                    <li key={id}>
                        <Link href={link}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
