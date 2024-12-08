import Container from '../container/Container';
import Menu from './components/menu/Menu';
import Logo from './components/logo/Logo';
import SingIn from './components/sign-in/Singin';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <div className={styles.header_wrapper}>
                    <Logo/>
                    <div className={styles.header_right}>
                        <Menu/>
                        <SingIn/>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
