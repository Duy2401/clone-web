import classNames from 'classnames/bind';
import styles from './contents.module.scss';
const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('Heading')}>
                    <h1>Liên Hệ</h1>
                </div>
                <div className={cx('information')}>
                    <p className={cx('companyName')}>Rivico 2020. Công ty TNHH Rivico</p>
                    <div className={cx('email')}>
                        <p className={cx('title')}>Email: </p>
                        <p className={cx('desc')}> contact@riviu.vn</p>
                    </div>
                    <div className={cx('phone')}>
                        <p className={cx('title')}>Phone: </p>
                        <p className={cx('desc')}> 091 5650550</p>
                    </div>
                    <div className={cx('address')}>
                        <p className={cx('title')}>Địa Chỉ: </p>
                        <p className={cx('desc')}> 372 - 374 Trần Hưng Đạo, P.2, Quận 5, TP. Hồ Chí Minh</p>
                    </div>
                    <div className={cx('GPKD')}>
                        <p className={cx('title')}>GPKD: </p>
                        <p className={cx('desc')}> 0316141166 do Sở KH&DT TP. HCM cấp ngày 14/02/2020</p>
                    </div>
                </div>
                <div className={cx('map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.713665805835!2d106.68247031458885!3d10.756536792335021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f04da46f277%3A0x2acc1cc96c136f61!2zMzcyLTM3NCDEkC4gVHLhuqduIEjGsG5nIMSQ4bqhbywgUGjGsOG7nW5nIDIsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678541736975!5m2!1svi!2s"
                        width="1100"
                        height="308"
                        style={{ border: 0 + 'px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
export default Content;
