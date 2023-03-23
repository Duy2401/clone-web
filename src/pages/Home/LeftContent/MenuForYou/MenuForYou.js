import styles from './MenuForYou.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../../Components/Button/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';

const cx = className.bind(styles);
function MenuForYou() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h1 className={cx('title')}>Dành cho bạn</h1>
                <div className={cx('viewMore')}>
                    <Button btn_none to="/collection-general">
                        <span className={cx('viewMore_item')}>Xem Thêm</span>
                    </Button>
                </div>
            </div>
            <div className={cx('menuSlider')}>
                <div className={cx('slick-List')}>
                    <div className={cx('slick-Slider')}>
                        <Swiper slidesPerView={3} spaceBetween={10} loop={true} className="mySwiper">
                            <SwiperSlide>
                                <div className={cx('slick-item')}>
                                    <Button btn_none to="./mon-nhat">
                                        <div className={cx('mx-2')}>
                                            <div className={cx('colection-item')}>
                                                <div className={cx('btn-mark')}></div>
                                                <div className={cx('thumbnail-item')}>
                                                    <img src="https://static.riviu.co/320/image/2020/04/19/a09e1692c1bb8e73c5a878b062e661cf_output.jpeg" />
                                                </div>
                                                <div className={cx('description')}>
                                                    <h2 className={cx('title')}>Món Nhật</h2>
                                                    <p className={cx('count')}>43 bài viết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cx('slick-item')}>
                                    <Button btn_none to="/mon-au">
                                        <div className={cx('mx-2')}>
                                            <div className={cx('colection-item')}>
                                                <div className={cx('btn-mark')}></div>
                                                <div className={cx('thumbnail-item')}>
                                                    <img src="https://static.riviu.co/320/image/2020/08/04/2aa4faf078c349f6ff2ec96d5e6b6d9a.jpeg" />
                                                </div>
                                                <div className={cx('description')}>
                                                    <h2 className={cx('title')}>Món Âu</h2>
                                                    <p className={cx('count')}> 122 bài viết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cx('slick-item')}>
                                    <Button btn_none to="/mon-thai">
                                        <div className={cx('mx-2')}>
                                            <div className={cx('colection-item')}>
                                                <div className={cx('btn-mark')}></div>
                                                <div className={cx('thumbnail-item')}>
                                                    <img src="https://static.riviu.co/320/image/2020/04/19/85bbcf0cc60268bf5d8b58feaa323a0a_output.jpeg" />
                                                </div>
                                                <div className={cx('description')}>
                                                    <h2 className={cx('title')}>Món Thái</h2>
                                                    <p className={cx('count')}>357 bài viết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cx('slick-item')}>
                                    <Button btn_none to="/mon-nhat">
                                        <div className={cx('mx-2')}>
                                            <div className={cx('colection-item')}>
                                                <div className={cx('btn-mark')}></div>
                                                <div className={cx('thumbnail-item')}>
                                                    <img src="https://static.riviu.co/320/image/2020/04/20/30cc255d7a18cfac26ee660be480c2d9_output.jpeg" />
                                                </div>
                                                <div className={cx('description')}>
                                                    <h2 className={cx('title')}>Món Hàn</h2>
                                                    <p className={cx('count')}>51 bài viết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={cx('slick-item')}>
                                    <Button btn_none to="/mon-viet">
                                        <div className={cx('mx-2')}>
                                            <div className={cx('colection-item')}>
                                                <div className={cx('btn-mark')}></div>
                                                <div className={cx('thumbnail-item')}>
                                                    <img src="https://static.riviu.co/320/image/2021/06/21/68523aee0192f739b9d7001732f097af.jpeg" />
                                                </div>
                                                <div className={cx('description')}>
                                                    <h2 className={cx('title')}>Món Việt</h2>
                                                    <p className={cx('count')}>478 bài viết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <button className={cx('btnLeft')}>
                        <FontAwesomeIcon icon={faChevronLeft} className={cx('swiper-button-next')} />
                    </button>
                    <button className={cx('btnRight')}>
                        <FontAwesomeIcon icon={faChevronRight} className={cx('swiper-button-prev ')} />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default MenuForYou;
