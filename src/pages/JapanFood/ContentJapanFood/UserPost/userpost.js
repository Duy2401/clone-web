import classNames from 'classnames/bind';
import styles from './userpost.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function UserPost() {
    return (
        <div className={cx('list_reviews')}>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://riviu.vn/images/no_avatar.webp" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Lê Thành Hưng</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>23:20 ngày 26/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>4.7 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Cách làm món trứng chiên "pancake" cực ngon cực "hao cơm"</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Khi kết hợp với phần nước xốt được chế biến đặc biệt, chắc hẳn đây sẽ là một món ăn rất đưa
                            cơm. Thêm món ngon này vào thực đơn, lúc có thời gian hãy làm để đãi cả nhà, vừa đổi vị để
                            chống ngán lại được khen khéo tay đảm đang nữa đấy! Nguyên liệu: - 20 quả trứng gà - 8 lát
                            thịt xông khói - 8 lát phô mai Cheddar - 30grb xốt cà chua, 15ml nước tương, 5gr tiêu đen
                            xay - 45ml dầu thực vật - 15gr lá thơm Oregano.
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/26/b3cf1420560de023b3067f7d3bd83b36.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/26/c8fe5f4207e8ef02b580f5f89ce68f11.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/26/10e1e4f1068ab4257e41059769b53bac.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/26/a427546850e4e4322f909c94f7040b7f.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/26/5f713598109b97e850ed2d3321740247.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>11</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://riviu.vn/images/no_avatar.webp" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Thao Nguyen 68</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>16:29 ngày 25/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Lẩu Sumo Chanko - Nabe</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Trong môn đấu vật sumo, hai lực sĩ quấn khố quanh hông, gọi là "mawashi" thi đấu trong một
                            vòng tròn. Nhiệm vụ của mỗi lực sĩ là đẩy hoặc quật đối phương. Người chiến thắng là người
                            khiến đối phương ngã hoặc bị bật ra khỏi vòng tròn. Được xem các lực sĩ to lớn xông vào nhau
                            rất hấp dẫn. Các lực sĩ lấy sức mạnh từ món lẩu Chanko-nabe mà họ ăn gần như hàng ngày.
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/358870e49693fb6ac8d004bb097887ae.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/8fb5ffcf6006c63f1d7a80e9217e6f96.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/6e33f831fb27a142781e8be777700a49.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/5aebcbfe5416db4719dcb3e1d9efb755.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>24</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.vn/320/image/2020/05/18/008d6d1b9ef8bff5ab6e362f85e45272_output.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Thanh Phat Le</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/98ccac75abcf94694b688eaddbbfebbe.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>23:44 ngày 20/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>
                            Bánh Nhật - Mochi Dâu Tây thơm ngon, đẹp đầy tinh tế khiến bạn phải nao lòng
                        </h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Ở Nhật, người ta thường dùng mochi trong các bữa tiệc trà hay làm món tráng miệng. Bánh
                            không quá ngọt mà lại rất dễ thương nên bạn còn có thể dùng chúng để làm quà nữa đấy!
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/1dc53bac1f358395b464845350b67455.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/f17f049dcde1036a55e17794aaa67255.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/ab802eff23a9ef034263e916eb115038.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/fe3dd993f0a867a057d2be6d30b246d6.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/6c1e6fcc8ab506d79a157778a0b508a7.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/2e01c8231554a5d97f24edbc055b5232.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/20/f80f97bb0177048b6402a9f75a3e2e4a.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>11</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserPost;
