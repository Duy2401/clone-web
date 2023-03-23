import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BackgroundImage from '../../Components/BackgroundImage';
import styles from './LayoutNotSidebar.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);
function LayoutNotSidebar({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <BackgroundImage />
                <div className={cx('inner')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default LayoutNotSidebar;
