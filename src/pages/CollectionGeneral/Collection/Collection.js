import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import Button from '../../../Components/Button/button';
const cx = classNames.bind(styles);
function Collection() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('breadcrumb')}>
                    <nav className={cx('breadcrumb_title')}>
                        <Button btn_none to="/">
                            <li className={cx('breadcrumb_item__link')}>Trang chủ</li>
                        </Button>
                        <li className={cx('breadcrumb_item')}>Món ngon các nước</li>
                    </nav>
                </div>
                <div className={cx('Collection_img')}>
                    <div className={cx('thumbnail')}>
                        <img src="https://static.riviu.co/640/image/2021/05/11/27ae4ddc61e7c5d1f2d164611c16b9fc.png" />
                        <div className={cx('overplay')}> </div>
                    </div>
                    <h1 className={cx('heading')}>Món Ngon Các Nước</h1>
                </div>
                <div className={cx('list_collection')}>
                    <div className={cx('list_collection__item')}>
                        <div className={cx('collection__item__inner')}>
                            <Button btn_none to="/mon-nhat">
                                <div className={cx('collection__item__img')}>
                                    <img src="https://static.riviu.co/640/image/2020/04/19/a09e1692c1bb8e73c5a878b062e661cf_output.jpeg" />
                                </div>
                                <h2 className={cx('title')}>Món Nhật</h2>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('list_collection__item')}>
                        <div className={cx('collection__item__inner')}>
                            <Button btn_none to="/mon-thai">
                                <div className={cx('collection__item__img')}>
                                    <img src="https://static.riviu.vn/640/image/2020/04/19/85bbcf0cc60268bf5d8b58feaa323a0a_output.jpeg" />
                                </div>
                                <h2 className={cx('title')}>Món Thái</h2>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('list_collection__item')}>
                        <div className={cx('collection__item__inner')}>
                            <Button btn_none to="/mon-han">
                                <div className={cx('collection__item__img')}>
                                    <img src="https://static.riviu.co/640/image/2020/04/20/30cc255d7a18cfac26ee660be480c2d9_output.jpeg" />
                                </div>
                                <h2 className={cx('title')}>Món Hàn</h2>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('list_collection__item')}>
                        <div className={cx('collection__item__inner')}>
                            <Button btn_none to="/mon-viet">
                                <div className={cx('collection__item__img')}>
                                    <img src="https://static.riviu.co/640/image/2021/06/21/68523aee0192f739b9d7001732f097af.jpeg" />
                                </div>
                                <h2 className={cx('title')}>Món Việt</h2>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('list_collection__item')}>
                        <div className={cx('collection__item__inner')}>
                            <Button btn_none to="/mon-au">
                                <div className={cx('collection__item__img')}>
                                    <img src="https://static.riviu.co/640/image/2020/08/04/2aa4faf078c349f6ff2ec96d5e6b6d9a.jpeg" />
                                </div>
                                <h2 className={cx('title')}>Món Âu</h2>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Collection;
