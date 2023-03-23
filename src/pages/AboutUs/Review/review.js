import styles from './review.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../Components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { QrcodeSmall, QrcodeLarge } from '../../../Components/Icons/icon';
const cx = classNames.bind(styles);
function Review() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top_banner__mobile')}>
                <div className={cx('thumbnail')}>
                    <img src="https://riviu.vn/images/download/top-banner.png?v=1" />
                </div>
                <div className={cx('box_info')}>
                    <div className={cx('box_info__inner')}>
                        <div className={cx('box_info__text')}>
                            <h1 className={cx('box_info_heading')}>REVIEW</h1>
                            <p className={cx('box_info_description')}>
                                Review chất, hình ảnh đẹp có tâm từ user chất lượng, nhiều comment, rating, thả tim…
                            </p>
                        </div>
                        <div className={cx('box_info_download')}>
                            <Button btn_icon>
                                <div className={cx('box_info_download__btn')}>
                                    <FontAwesomeIcon icon={faApple} className={cx('icon')} />
                                    <div className={cx('box_info_download_text')}>
                                        <p className={cx('box_download_ios_text1')}>Download on the</p>
                                        <p className={cx('box_download_ios_text2')}>App Store</p>
                                    </div>
                                </div>
                            </Button>
                            <Button btn_icon>
                                <div className={cx('box_info_download__btn')}>
                                    <FontAwesomeIcon icon={faGooglePlay} className={cx('iconGooglePlay')} />
                                    <div className={cx('box_info_download_text')}>
                                        <p className={cx('box_download_ios_text1')}>Get it on</p>
                                        <p className={cx('box_download_ios_text2')}>Google Play</p>
                                    </div>
                                </div>
                            </Button>
                            <div className={cx('qr_code')}>
                                <QrcodeSmall className={cx('qr_code__small')} />
                                <QrcodeLarge className={cx('qr_code__large')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('top_banner_content')}>
                <div className={cx('top_banner_content__inner')}>
                    <div className={cx('top_content__inner')}>
                        <div className={cx('top_banner_image')}>
                            <img src="https://riviu.vn/images/download/mid-banner.png?v=1" />
                        </div>
                        <div className={cx('top_banner_title')}>
                            <h1 className={cx('top_banner_heading')}>RATING</h1>
                            <p className={cx('top_banner_desc')}>
                                Xem và đánh giá chấm sao hàng ngàn nhà hàng,
                                <br />
                                quán ăn và địa điểm du lịch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom_banner')}>
                <div className={cx('bottom_banner__inner')}>
                    <div className={cx('bottom_banner__content')}>
                        <div className={cx('bottom_banner__image')}>
                            <img src="https://riviu.vn/images/download/bottom-banner.png?v=1" />
                        </div>
                        <div className={cx('bottom_banner__title')}>
                            <h1 className={cx('bottom_banner__heading')}>REWARD</h1>
                            <p className={cx('bottom_banner__desc')}>
                                Nhiều khuyến mãi, voucher ăn uống,
                                <br />
                                điểm lixi,huy hiệu, level…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Review;
