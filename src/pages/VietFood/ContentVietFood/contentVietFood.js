import classNames from 'classnames/bind';
import styles from './contentVietFood.module.scss';
import UserVNFood from './UserVNFood/UserVNFood';
const cx = classNames.bind(styles);
function ContentVietFood() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header_panel')}>
                    <div className={cx('panel_img')}>
                        <div className={cx('thumbnail_img')}>
                            <img
                                className={cx('thumbnail')}
                                src="https://static.riviu.co/960/image/2021/06/21/68523aee0192f739b9d7001732f097af.jpeg"
                            />
                        </div>
                    </div>
                    <div className={cx('num_place')}>478 bài viết • 1 địa điểm</div>
                    <h1 className={cx('title')}>Món Việt</h1>
                    <div className={cx('description')}>
                        Xem ngay cộng đồng Riviu.vn ✅, thật tiếc nếu bỏ qua Món Việt
                    </div>
                    <div className={cx('line')}></div>
                    <div className={cx('menu_select')}>
                        <div className={cx('menu_selected__item')}>Bài Viết</div>
                        <div className={cx('menu_selected__item')}>Địa Điểm</div>
                    </div>
                </div>
                <div className={cx('content_left')}>
                    <div className={cx('arrange')}>
                        <div className={cx('arrange_title__text')}>Sắp xếp</div>
                        <select className={cx('arrange_title__select')}>
                            <option>Mặc định</option>
                            <option>Đánh giá cao</option>
                        </select>
                    </div>
                    <div className={cx('Evaluate')}>
                        <div className={cx('arrange_title__text')}>Đánh giá</div>
                        <div className={cx('filter_line')}></div>
                        <div className={cx('btn_star')}>
                            <div className={cx('btn_star__item')}>1 sao</div>
                            <div className={cx('btn_star__item')}>2 sao</div>
                            <div className={cx('btn_star__item')}>3 sao</div>
                            <div className={cx('btn_star__item')}>4 sao</div>
                            <div className={cx('btn_star__item')}>5 sao</div>
                        </div>
                    </div>
                </div>
                <div className={cx('content_right')}>
                    <UserVNFood />
                    <UserVNFood />
                    <UserVNFood />
                    <UserVNFood />
                    <UserVNFood />
                </div>
            </div>
        </div>
    );
}
export default ContentVietFood;
