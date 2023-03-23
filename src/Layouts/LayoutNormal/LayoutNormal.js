import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BackgroundImage from '../../Components/BackgroundImage';
import className from 'classnames/bind';
import styles from './LayoutNormal.module.scss';
const cx = className.bind(styles);
function LayoutNormal({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <BackgroundImage />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}
export default LayoutNormal;
