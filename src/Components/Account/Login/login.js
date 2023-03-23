import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '../../Button/button';
import styles from './login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            {isOpen && (
                <div className={cx('wrapper')}>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)} className={cx('modal_overlay')}></div>
                    <div className={cx('modal_content')}>
                        <div className={cx('login_panel')}>
                            <div className={cx('img_from')}>
                                <img src="https://riviu.vn/images/icon/backgroud_login.svg" />
                            </div>
                            <div className={cx('info_panel')}>
                                <div className={cx('login_from')}>
                                    <div className={cx('login_text')}>Đăng Nhập</div>
                                    <div className={cx('login_input')}>
                                        <input type="text" placeholder="Số Điện Thoại" className={cx('login_user')} />
                                        <input
                                            type="password"
                                            placeholder="Mật Khẩu"
                                            className={cx('login_password')}
                                        />
                                        <div className={cx('login_eyes')}>
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        </div>
                                        <div className={cx('login_forgot')}>Quên Mật Khẩu?</div>
                                    </div>
                                    <Button btn_full>Đăng Nhập</Button>
                                    <div className={cx('login_line')}> hoặc </div>
                                    <div className={cx('login_link')}>
                                        <div className={cx('btn_link__left')}>
                                            <img
                                                src="https://riviu.vn/images/icon/fb.svg"
                                                className={cx('facebook_icon')}
                                            />
                                        </div>
                                        <div className={cx('btn_link__right')}>
                                            <img
                                                src="https://riviu.vn/images/icon/gg.svg"
                                                className={cx('google_icon')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('register_text')}>Tạo Tài Khoản</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;
