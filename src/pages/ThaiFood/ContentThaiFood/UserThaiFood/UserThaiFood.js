import classNames from 'classnames/bind';
import styles from './UserThaiFood.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function UserThaiFood() {
    return (
        <div className={cx('list_reviews')}>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.co/320/image/2020/12/02/1bdc3fb16d01d44ce425a4bcafee4630_output.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Coffe SaiGon</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/dc7eaff1cde8caba540a999236902aca.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>14:44 ngày 27/09/2022</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>SOITHAI PREMIUM</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            SOITHAI PREMIUM — 📸instagram: 𝗰𝗼𝗳𝗳𝗲𝗲.𝘀𝗮𝗶𝗴𝗼𝗻 - follow mình để cập nhật thêm nhiều quán mới
                            nha 😊 — - 𝗦𝗼𝗶𝗧𝗵𝗮𝗶 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 - Cái tên mà mĩnh nghĩ ở thời điểm này đã quá quen thuộc với
                            những bạn nào nằm trong câu lạc bộ “em yêu trà sữa” rồi ha, nổi tiếng với các món nước và
                            món ăn đường phố lấy cảm hứng từ xứ sở Chùa Vàng - Thái Lan, hiện cửa hàng mới đang tưng
                            bừng khai trương cửa hàng mới tại Vinhomes Grand Park Quận 9. 🌟Về thiết kế của 𝗦𝗼𝗶𝗧𝗵𝗮𝗶
                            𝗣𝗿𝗲𝗺𝗶𝘂𝗺, thật sự thì mình quyết định đến cửa hàng mới của 𝗦𝗼𝗶𝗧𝗵𝗮𝗶 cũng chính là vì chữ
                            “Premium” lần này, kiểu bị tò mò nhiều hơn vì nghe đến “Premium” thì mình sẽ nghĩ ngay đến
                            một cái gì đó cao cấp và có phần khác đi so với những cửa hàng đang tồn tại trong hệ thống
                            một thương hiệu F&B.
                        </p>
                        <p>
                            📋Menu mình để ở hình cuối – 📸: @coffee.saigon 📍: 𝗦𝗼𝗶𝗧𝗵𝗮𝗶 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 - @soithai.original ⏱:
                            Mon - Sun ,10:00-22:00 💵: Từ 35.000 VND 🏠: Toà S8.03 Vinhomes Grand Park, Q.9, TP.Thủ Đức
                            🛵: Gửi xe dưới tầng hầm của toà nhà.
                        </p>
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/bbd0c1494a4eca475f72e0020398839e.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/d327474af9caea0cf9e8907a132fbb8b.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/b8e83cc9ccedbb4dca3d1c06dc5495ed.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/84de90d5e2c48ee66334ebd505ad4a5e.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/280fa2ab8b4bf4547dbde4a00108b57d.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/37a07c00ef5f54d01dc0dfc1cc87709c.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/b2fa11bd9740604d9d4d0fdcc86188f0.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/09/27/0d3252bc4719c5931ec44b1a0ee65a95.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>17</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.co/320/image/2021/12/29/7ef637de6fb5796a1d639174cabc53e0_output.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Nga Trần</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/3ccaef744293ad4498c6df3c39b7f326.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>01:00 ngày 09/02/2022</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>🇹🇭 QUÁN ĂN THÁI RẺ BẤT NGỜ Ở THẢO ĐIỀN Q2</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Bữa đi chill tại rooftop bar xong cái cả nhóm mình đi vòng vòng kiếm cái để ăn. Mới đầu nghĩ
                            Q2 mà ăn thì chắc là sẽ mắc lắm. Ai ngờ tấp vào được cái quán này ưng ý ghê. Ngon đúng kiểu
                            Thái mà còn rẻ nữa. Không gian hơi nhỏ nhưng mà khách ra vào liên tục lun nha.
                        </p>
                        <p>
                            Câc món ăn nhóm mình gọi là: _Gỏi xoài cá cơm khô - 65k cá cơm siêu giòn, nước sốt trộn đều
                            chua cay đúng kiểu Thái lun. _Heo nướng xôi - 78k ui món này đúng là cực phẩm. Thịt heo ướp
                            siêu thơm siêu đậm đà nhất định phải kêu nha 🤤 Ngon đến nỗi tui quên cái nước chấm lun :))
                            _Mì xào với lá hương nhu - món này mình được chọn nguyên liệu nha. Mình chọn mì trứng, xào
                            với tôm giá là 95k. Món này thấy cũng bình thường, kêu ăn cho chắc bụng. _Mì Tomyum hải sản
                            - 95k món này nước dùng thanh và chua, ít nước béo _Mì thuyền - 80k
                        </p>
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/167aedd68bbfe85d203eca8ff96fbf8b.gif" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/a62b53edfd4586f01c47737b9ab6292f.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/b77ee122badef33a82222ecdefc5bbce.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/e616e48b4b69d70fada74d0e36f9e0bc.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/fb2c45e0092005c84e3c3592af8a1d36.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/483b8d3b1f71538203d18b7c80096dba.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2022/02/09/26f291c4bda5d351773720d3fd017681.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>3</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('reviews_item')}>
                <div className={cx('info_item')}>
                    <div className={cx('info_item__author')}>
                        <div className={cx('info_avt')}>
                            <img src="https://static.riviu.co/320/image/2021/04/20/8fdbac8fd47652548845d3ebc7d00ab4_output.jpeg" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Trung Hiếu</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/98ccac75abcf94694b688eaddbbfebbe.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>18:46 ngày 25/05/2021</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Món ngon giá tốt - Quán ăn Maika quận 5</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Mình biết tới Cơm trộn Maika từ lúc học cấp 3 năm 2014 rồi, hồi đó chỉ order cơm trộn nên
                            tưởng quán bán về món ăn vặt Hàn thôi, ai dè nay ghé quán mới biết quán có menu phong phú
                            hơn có cả món Thái.
                        </p>
                        <p>Địa chỉ: 528 Nguyễn Trãi, P.8, Q.5</p>
                        <p> Giá: 15k-55k </p>
                        <p>Giờ: 10h-22h</p>
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2021/05/25/8e486cdd269f8fdcd9ffb2a5fec96411.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2021/05/25/597c48aea76a17a28fc9dc64fc350177.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2021/05/25/39c14f6f4372b36ce503eb20535f744c.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2021/05/25/01a92afbfe93d57e92c63bc96199da18.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>50</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserThaiFood;
