import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    className,
    leftIcon,
    rightIcon,
    btn_none = false,
    btn_icon = false,
    btn_full = false,
    btn_login = false,
    primary = false,
    small_L = false,
    small_M = false,
    small_S = false,
    primary_btn = false,
    primary_original = false,
    onClick,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        btn_full,
        btn_login,
        small_L,
        small_M,
        small_S,
        primary_btn,
        primary_original,
        btn_none,
        btn_icon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;
