import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import RatingList from './RatingList';
import Button from '../../../../Components/Button/button';
const cx = classNames.bind(styles);
function Discover() {
    const [showExtend, setExtends] = useState(false);
    const HandleShowExtend = () => {
        if (showExtend == true) {
            setExtends(false);
        } else {
            setExtends(true);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h1>Khám Phá</h1>
                <FontAwesomeIcon onClick={HandleShowExtend} icon={faChevronDown} className={cx('icon')} />
            </div>
            {showExtend && (
                <div className={cx('extend')}>
                    <p className={cx('extend-item')}>Khám Phá</p>
                    <p className={cx('extend-item')}>Theo Dõi</p>
                </div>
            )}
            <div className={cx('option-List')}>
                <ul className={cx('inner')}>
                    <li className={cx('item')}>Tất cả</li>
                    <li className={cx('item')}>Ăn sáng</li>
                    <li className={cx('item')}>Ăn trưa</li>
                    <li className={cx('item')}>Ăn vặt</li>
                    <li className={cx('item')}>Cà phê</li>
                    <li className={cx('item')}>Gần bạn</li>
                    <li className={cx('item')}>Du Lịch</li>
                    <li className={cx('item')}>Làm đẹp</li>
                </ul>
            </div>
            <RatingList />
            <div className={cx('see_more')}>
                <Button small_S>Xem Thêm</Button>
            </div>
        </div>
    );
}
export default Discover;
