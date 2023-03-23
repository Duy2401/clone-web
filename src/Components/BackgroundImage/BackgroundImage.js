import classNames from 'classnames/bind';
import styles from './BackgroundImage.module.scss';
const cx = classNames.bind(styles);

function BackgroundImage() {
    return (
        <div className={cx('image')}>
            <a href="#">
                <img src="https://tpc.googlesyndication.com/simgad/14464210509606824445?" />
            </a>
        </div>
    );
}
export default BackgroundImage;
