import className from 'classnames/bind';
import styles from './footer.module.scss';
import Button from '../../../Components/Button/button';
const cx = className.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer_content')}>
                <div className={cx('footer_info')}>
                    <div className={cx('info_left')}>
                        <i className={cx('icon_riviu__footer')}></i>
                        <div className={cx('text_riviu__footer')}>Ăn khắp nơi chơi khắp chốn</div>
                    </div>
                    <div className={cx('info_right')}>
                        <div className={cx('info_right__item')}>
                            <Button btn_none to="/about">
                                <h4>Về Chúng Tôi</h4>
                            </Button>
                        </div>
                        <div className={cx('info_right__item')}>
                            <Button btn_none to="/lien-he">
                                <h4>Liên Hệ</h4>
                            </Button>
                        </div>
                        <div className={cx('info_right__item')}>
                            <Button btn_none to="/policy">
                                <h4>Chính Sách</h4>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('footer_line')}></div>
                <div className={cx('footer_description')}>
                    © Công Ty TNHH RIVICO • Địa chỉ: 372-374 Trần Hưng Đạo, Phường 2, Quận 5, HCM • Số điện thoại: 091
                    5650550 • Mã số thuế: 0316141166 Giấy phép thiết lập MXH số 528/GP-BTTTT , Ký ngày : 17/11/2020
                </div>
            </div>
            <div className={cx('footer_keyword')}>
                <div className={cx('footer_list')}>
                    <h4>Top Tìm Kiếm</h4>
                    <div className={cx('list_items')}>
                        <div className={cx('item')}>công thức nấu ăn</div>
                        <div className={cx('item')}>bánh flan</div>
                        <div className={cx('item')}>healthy</div>
                        <div className={cx('item')}>skincare</div>
                        <div className={cx('item')}>cơm tấm</div>
                        <div className={cx('item')}>dalgona</div>
                        <div className={cx('item')}>coffee</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
