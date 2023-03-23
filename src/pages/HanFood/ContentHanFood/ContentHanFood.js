import classNames from 'classnames/bind';
import styles from './ContentHanFood.module.scss';
import UserHanFood from './UserHanFood';
const cx = classNames.bind(styles);
function ContentHanFood() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header_panel')}>
                    <div className={cx('panel_img')}>
                        <div className={cx('thumbnail_img')}>
                            <img
                                className={cx('thumbnail')}
                                src="https://static.riviu.co/960/image/2020/04/20/30cc255d7a18cfac26ee660be480c2d9_output.jpeg"
                            />
                        </div>
                    </div>
                    <div className={cx('num_place')}>51 bài viết • 0 địa điểm</div>
                    <h1 className={cx('title')}>Món Hàn</h1>
                    <div className={cx('description')}>Món Hàn</div>
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
                    <UserHanFood />
                    <UserHanFood />
                    <UserHanFood />
                    <UserHanFood />
                    <UserHanFood />
                    <UserHanFood />
                    <UserHanFood />
                </div>
            </div>
        </div>
    );
}
export default ContentHanFood;
