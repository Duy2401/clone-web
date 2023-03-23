import classNames from 'classnames/bind';
import styles from './UserEUFood.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function UserEUFood() {
    return (
        <div className={cx('list_reviews')}>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.vn/res_users/2019/10/18/89629bb523bcd2facb04b1db40dea5ca31b49bc4_small.png" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Nhí Nguyễn</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>13:56 ngày 05/06/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <h2 className={cx('notRating')}>Chưa có đánh giá</h2>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Cách làm socola trắng trà xanh – White chocolate truffles</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Có một lần mình được tặng một hộp matcha chocolate, mở hộp ra, mình thích mê vì màu trà xanh
                            – cái màu xanh mướt trông rất mát mắt. Chính hộp chocolate này gợi cho mình ý định làm những
                            viên socola tươi vị trà xanh. Món chocolate này đặc biệt dành cho ai thích vị thơm ngậy của
                            sữa, hòa vào cùng vị thơm nhẹ dịu dàng của trà xanh. Mình mê mẩn cái màu xanh của những viên
                            truffles này. Có điều, loại truffles này rất ngọt, vì không giống như dark chocolate, white
                            chocolate vốn rất ngọt rồi, mà hoàn toàn không có cách nào để giảm ngọt vì loại white
                            chocolate mua sẵn đã được nhà sản xuất “cố định” vị ngọt, có chăng là thêm bột trà xanh (để
                            tăng vị đắng ??? :P).
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/06/05/8094aeaf1295dc12a1949fe173a70797.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/06/05/51bba40c75e2e49865af3ea352ff4492.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>4</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.vn/res_users/2019/10/18/89629bb523bcd2facb04b1db40dea5ca31b49bc4_small.png" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Nhí Nguyễn</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>119:52 ngày 06/05/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <h2 className={cx('notRating')}>Chưa có đánh giá</h2>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Cách làm Xốt cà chua cho pizza</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Nguyên liệu: – 500g cà chua chín – 1/2 củ hành tây, thái nhuyễn – 4-5 tép tỏi,băm nhuyễn – 5
                            tbs dầu ô liu – 1 tbs oregano khô – 4 tbs tomato ketchup (tương cà chua) – muối, tiêu.
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/05/06/8cc43e7357e334e15291522530a10385.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/05/06/833ded8e32746a2c37790c9c6d4818ef.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/05/06/3ddf3548276859b9e837e9cfffb192c4.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/05/06/3a3de43ff41949364ce510adde478ae3.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/05/06/b9023257605db3acf8b64f1de6268a2b.jpeg" />
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
                            <img src="https://static.riviu.vn/320/image/2020/04/27/bc86e122aea2000d889404b5b545a760.png" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Bí Kíp Món Ngon</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0dcd85fe13e41ca3a5b6847513bcbe65.png"
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
                        <h3 className={cx('item__title')}>Bí kíp làm xúc xích tươi tưởng không dễ mà dễ không tưởng</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Cách làm xúc xích không hề khó và cầu kỳ như nhiều người vẫn nghĩ, bạn thậm chí có thể không
                            cần nhồi vỏ nếu muốn. Nguyên liệu làm xúc xích không hề bị giới hạn. Bạn có thể chọn thịt
                            lợn, thịt bò hay thịt cừu, xay nhuyễn hay băm thô, lượng mỡ nhiều hay ít, nêm mặn nhạt ra
                            sao, cho thêm rượu, kem tươi hay thậm chí nước ép trái cây... Tất cả đều có thể thay đổi tùy
                            theo khẩu vị của bạn. Tuy nhiên, nếu lần đầu thử làm xúc xích và chưa biết nên đong thành
                            phần nguyên liệu ra sao, thì đây là công thức dành cho bạn.
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/69e4432ebf5355a2059a9039b52f3a17.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/262fc1fc48ca47c3247a1be3b6607122.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/23abbcf589e52a3f687b06eb80974006.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/1c4b7886aec4dbe736af24372e2caf38.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/44e05f6041af1ebc868824a3ae959533.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/48cced34949b2d8c70d9821777b1ce67.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/25/2935a8d7e2613b122e9da1800f818650.jpeg" />
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
export default UserEUFood;
