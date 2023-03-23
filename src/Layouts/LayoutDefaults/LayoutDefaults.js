import Header from '../Components/Header';
import SideBar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import styles from './LayoutDefaults.module.scss';
import className from 'classnames/bind';
import BackgroundImage from '../../Components/BackgroundImage';
const cx = className.bind(styles);
function LayoutDefaults({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <BackgroundImage />
                <div className={cx('inner')}>
                    <div className={cx('content')}>{children}</div>
                    <SideBar />
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default LayoutDefaults;
