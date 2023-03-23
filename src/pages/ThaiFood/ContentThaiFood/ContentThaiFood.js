import classNames from 'classnames/bind';
import styles from './ContentThaiFood.module.scss';
import UserThaiFood from './UserThaiFood';
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
                                src="https://static.riviu.vn/960/image/2020/04/19/85bbcf0cc60268bf5d8b58feaa323a0a_output.jpeg"
                            />
                        </div>
                    </div>
                    <div className={cx('num_place')}>375 bài viết • 1 địa điểm</div>
                    <h1 className={cx('title')}>Món Thái</h1>
                    <div className={cx('description')}>
                        Các bài viết chất lượng được bỏ trong Món Thái, xem ngay tại Riviu.vn
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
                    <UserThaiFood />
                    <UserThaiFood />
                    <UserThaiFood />
                    <UserThaiFood />
                    <UserThaiFood />
                    <UserThaiFood />
                </div>
            </div>
        </div>
    );
}
export default ContentVietFood;
