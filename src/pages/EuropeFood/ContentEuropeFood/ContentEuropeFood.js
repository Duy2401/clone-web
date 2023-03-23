import classNames from 'classnames/bind';
import styles from './ContentEuropeFood.module.scss';
import UserEUFood from '../ContentEuropeFood/UserEUFood/UserEUFood';
const cx = classNames.bind(styles);
function ContentEuropeFood() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header_panel')}>
                    <div className={cx('panel_img')}>
                        <div className={cx('thumbnail_img')}>
                            <img
                                className={cx('thumbnail')}
                                src="https://static.riviu.co/960/image/2020/08/04/2aa4faf078c349f6ff2ec96d5e6b6d9a.jpeg"
                            />
                        </div>
                    </div>
                    <div className={cx('num_place')}>122 bài viết • 0 địa điểm</div>
                    <h1 className={cx('title')}>Món ÂU</h1>
                    <div className={cx('description')}>Vô liền Riviu.vn ✅ khám phá Món Âu</div>
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
                    <UserEUFood />
                    <UserEUFood />
                    <UserEUFood />
                    <UserEUFood />
                    <UserEUFood />
                    <UserEUFood />
                    <UserEUFood />
                </div>
            </div>
        </div>
    );
}
export default ContentEuropeFood;
