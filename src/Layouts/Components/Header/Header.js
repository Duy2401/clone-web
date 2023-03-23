import styles from './Header.module.scss';
import className from 'classnames/bind';
import Search from '../Search';
import Button from '../../../Components/Button';
import Login from '../../../Components/Account/Login/login';
import { useState, useRef, useEffect } from 'react';
const cx = className.bind(styles);
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    let ref = useRef();
    useEffect(() => {
        let onClickOutSide = (e) => {
            if (ref.className !== 'wrapper') {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', onClickOutSide);
        return () => {
            document.removeEventListener('mousedown', onClickOutSide);
        };
    });
    return (
        <header className={cx('wrapper')} ref={ref}>
            <div className={cx('container_Header')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <a href="/">
                            <img src="https://riviu.vn/images/logo.png" alt="Riviu" />
                        </a>
                    </div>
                    <div className={cx('contact')}>
                        <Button to="/lien-he" small_M>
                            Liên hệ
                        </Button>
                    </div>
                    <div className={cx('login')} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Button primary>Đăng nhập</Button>
                    </div>
                </div>
                {isOpen && <Login />}
                <Search />
            </div>
        </header>
    );
}
export default Header;
