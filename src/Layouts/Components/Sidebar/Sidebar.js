import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '../../../Components/Button/button';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import login from '../../../Components/Account/Login';
import { useState } from 'react';
import Login from '../../../Components/Account/Login';
const cx = classNames.bind(styles);

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('register')}>
                <img className={cx('img')} src="https://riviu.vn/images/login-logo.svg" />
                <div className={cx('register_description')}>
                    Đăng nhập vào Riviu để cùng nhau ăn khắp nơi chơi khắp chốn bạn nhé!
                </div>
                <div className={cx('register_button')}>
                    <div className={cx('register_item')} onClick={handleShow}>
                        <Button primary_original>Đăng Kí</Button>
                    </div>
                    <div className={cx('register_item')} onClick={handleShow}>
                        <Button primary_btn>Đăng Nhập</Button>
                    </div>
                </div>
            </div>
            {isOpen && <Login />}
            <div className={cx('list_banner')}>
                <div className={cx('img_poster')}>
                    <a href="#">
                        <img src="https://tpc.googlesyndication.com/simgad/10566401260547796452?" />
                    </a>
                </div>
                <div className={cx('img_poster')}>
                    <a href="#">
                        <img src="https://tpc.googlesyndication.com/simgad/15868525294187142676?" />
                    </a>
                </div>
                <div className={cx('img_poster')}></div>
            </div>
            <div className={cx('facebook')}>
                <img
                    className={cx('riviu_backgroud')}
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/272654785_4807902862592810_8095531472821433857_n.jpg?stp=dst-jpg_s526x296&_nc_cat=100&ccb=1-7&_nc_sid=dd9801&_nc_ohc=7gddrAaCdb8AX86Y_ax&_nc_ht=scontent.fsgn5-5.fna&edm=ADwHzz8EAAAA&oh=00_AfD1RzyM8wM786nz0UXJiG4Qw1rUhxWmpU75cCW-qfzwNQ&oe=641E5CAF"
                />
                <div className={cx('pseudo_class')}></div>
                <div className={cx('facebook_heading')}>
                    <a className={cx('riviu_logo')} href="https://www.facebook.com/Riviu.Official/" target="_blank">
                        <img
                            className={cx('riviu_logo__item')}
                            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/116364525_3158995210816925_321188723130410811_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=1bixx8Fl_5wAX9NRpRs&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCYrY4TjtXjwmnBgGH4OCRppXpIhGV9opFvTNQN2JiwLQ&oe=6431517C"
                            target="_blank"
                        />
                    </a>
                    <div className={cx('facebook_nameWeb')}>
                        <a
                            className={cx('facebook_title')}
                            href="https://www.facebook.com/Riviu.Official/"
                            target="_blank"
                        >
                            <h4>Thánh Riviu - Riviu.vn</h4>
                            <i className={cx('icon_Check')} />
                        </a>
                        <div className={cx('count_Like')}>2.070.891 lượt thích</div>
                    </div>
                </div>
                <div className={cx('facebook_Action')}>
                    <a
                        className={cx('btn_like')}
                        href="https://www.facebook.com/plugins/error/confirm/page?iframe_referer=https%3A%2F%2Friviu.vn%2F&kid_directed_site=false&secure=true&plugin=page&return_params=%7B%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FRiviu.Official%2F%22%2C%22tabs%22%3A%22timeline%22%2C%22width%22%3A%22340%22%2C%22height%22%3A%22331%22%2C%22small_header%22%3A%22false%22%2C%22adapt_container_width%22%3A%22true%22%2C%22hide_cover%22%3A%22false%22%2C%22show_facepile%22%3A%22true%22%2C%22appId%22%3A%22198679815507622%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3Anull%7D"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faSquareFacebook} className={cx('icon_Like')} />
                        <span>Thích Trang</span>
                    </a>
                    <a
                        className={cx('btn_share')}
                        href="https://www.facebook.com/sharer/sharer.php?app_id=198679815507622&u=https%3A%2F%2Fwww.facebook.com%2FRiviu.Official%2F&display=popup&ref=plugin&src=page"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faShare} className={cx('icon_Share')} />
                        <span>Chia Sẻ</span>
                    </a>
                </div>
            </div>
            <div className={cx('location_outstanding')}>
                <h3 className={cx('location_heading')}>Địa điểm nổi bậc</h3>
                <div className={cx('line')}></div>
                <div className={cx('location_list')}>
                    <a href="#" className={cx('location_list__item')}>
                        <div className={cx('location_list_thumbnail')}>
                            <img src="https://static.riviu.vn/320/image/2020/01/14/6f40b23a3b71aadbd622290271b466f8.jpeg" />
                        </div>
                        <div className={cx('location_desc')}>
                            <h3>SIK DAK FOOK RESTAURANT</h3>
                            <p>
                                411 Trần Hưng Đạo B, P.14, Quận 5, Hồ Chí Minh, Việt Nam, Phường 14, Quận 5, Hồ Chí Minh
                            </p>
                            <div className={cx('location_rating')}>
                                <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                                <span className={cx('span_post')}>4.7</span>
                                <span className={cx('span_point')}>/5 điểm</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className={cx('location_list__item')}>
                        <div className={cx('location_list_thumbnail')}>
                            <img src="https://static.riviu.vn/320/image/2020/06/26/e80b6d5d3fd29eff197c9e0f149b2b8a.jpeg" />
                        </div>
                        <div className={cx('location_desc')}>
                            <h3>Blank Lounge - Tầng 75 & 76, The Landmark 81</h3>
                            <p>
                                Tầng 75 & 76, The Landmark 81, 722 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Hồ Chí
                                Minh
                            </p>
                            <div className={cx('location_rating')}>
                                <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                                <span className={cx('span_post')}>4.8</span>
                                <span className={cx('span_point')}>/5 điểm</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className={cx('location_list__item')}>
                        <div className={cx('location_list_thumbnail')}>
                            <img src="https://cdn01.diadiemanuong.com/ddau/640x/pypo-food-online-d824a142637205698897944340.jpg" />
                        </div>
                        <div className={cx('location_desc')}>
                            <h3>PyPo Food - Bắp Xào Trứng Muối Sốt Phô Mai</h3>
                            <p>266/18A Tôn Đản, Phường 08, Quận 4, Hồ Chí Minh</p>
                            <div className={cx('location_rating')}>
                                <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                                <span className={cx('span_post')}>4.7</span>
                                <span className={cx('span_point')}>/5 điểm</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className={cx('location_list__item')}>
                        <div className={cx('location_list_thumbnail')}>
                            <img src="https://static.riviu.vn/320/image/2020/07/03/4af17e4389314baa8c17ce51bec35972_output.jpeg" />
                        </div>
                        <div className={cx('location_desc')}>
                            <h3>Lẩu 79k - Nguyễn Trãi</h3>
                            <p>271 Đ. Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Hồ Chí Minh</p>
                            <div className={cx('location_rating')}>
                                <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                                <span className={cx('span_post')}>4.9</span>
                                <span className={cx('span_point')}>/5 điểm</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className={cx('location_list__item')}>
                        <div className={cx('location_list_thumbnail')}>
                            <img src="https://static.riviu.vn/320/image/2020/07/20/7114a54065494c9c9eae6ee16b369b30.jpg" />
                        </div>
                        <div className={cx('location_desc')}>
                            <h3>Trăng Non Rooftop - Quán sân thượng</h3>
                            <p>302 Nguyễn Văn Đậu, Phường 11, Quận Bình Thạnh, Hồ Chí Minh</p>
                            <div className={cx('location_rating')}>
                                <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                                <span className={cx('span_post')}>4.9</span>
                                <span className={cx('span_point')}>/5 điểm</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default SideBar;
