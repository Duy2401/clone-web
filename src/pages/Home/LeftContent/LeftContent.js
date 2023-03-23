import styles from './LeftContent.module.scss';
import className from 'classnames/bind';
import MenuForYou from './MenuForYou';
import Discover from './Discover/Discover';
const cx = className.bind(styles);
function LeftContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('poster')}>
                <a href="#">
                    <img src="https://static.riviu.co/image/2022/10/11/0b8e06bde3e3f608290fe321039e9f64.png" />
                </a>
            </div>
            <MenuForYou />
            <Discover />
        </div>
    );
}

export default LeftContent;
