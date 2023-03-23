import classNames from 'classnames/bind';
import styles from './UserVNFood.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function UserVNFood() {
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
                            <div className={cx('info_user__time')}>13:53 ngày 05/06/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <h2 className={cx('notRating')}>Chưa có đánh giá</h2>
                        {/* <span className={cx('data_post')}>4.7 </span>
                        <span className={cx('data_point')}>/5 điểm</span> */}
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Chè cốm</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Nguyên liệu gồm có: cốm tươi, bột năng, đường nâu, 1 ít gừng tươi. Cách làm thì như sau: cho
                            nước vào nồi, lượng nước tuỳ theo lượng chè muốn nấu ra. Cho “một ít” cốm vào nồi nước, thêm
                            đường, bỏ vào vài lát gừng tươi, đun sôi. Lượng cốm này để làm cho nước chè có mùi thơm của
                            cốm. Đường cho vừa phải, nếm thấy có vị ngọt dịu là được. Sau khi đun sôi hỗn hợp này thì
                            cốm cũng chín mềm và không còn màu xanh nữa. Lúc này hoà bột năng vào một bát nước con, đổ
                            từ từ vào nồi chè, vừa đổ vừa ngoáy cho bột năng tan đều và không bị vón cục. Quấy cho đến
                            khi bột chín hẳn, chè trở nên sệt lại. Mình thích nước chè có độ sệt vừa phải, giống như
                            nước chè của món xôi chè hoặc món bánh chay, không muốn nước chè bị quá đặc.
                        </p>
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/06/05/894f9b61601c32f559de9668536d2735.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/06/05/e7cdeb14e3332a89e085c4715fca7e8b.jpeg" />
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
                            <img src="https://riviu.vn/images/no-image.png" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Lê Thanh Hưng</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/0bbc8ce67c9fc4f0d1b5fa708c891099.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>00:15 ngày 27/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Sườn chiên mắm, ăn là mê, nếm là phê</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Món sườn chiên mắm làm theo công thức này mềm bóng, mặn - ngọt - cay hài hòa tròn vị, ăn với
                            cơm trắng là số 1 luôn! Nguyên liệu: - 500gr sườn non - 1 muỗng canh hành củ tím băm, 1
                            muỗng canh tỏi băm - Ớt tươi (ớt hiểm hoặc ớt sừng) - 2 muỗng canh nước mắm, 2 muỗng canh
                            đường - 1/2 muỗng canh tương ớt, 1/2 quả chanh, 1/2 muỗng cafe tiêu, 1 muỗng canh muối, 1
                            muỗng canh giấm - Dầu ăn - Rau ăn kèm: cà chua, dưa leo. Cách làm:
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/55c667209d0b19a7b35472991516a042.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/936b0f437a3a2642c781f99bf4460dba.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/3abb0900169803138ff1f3d81007eed9.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/ef5194e49e04627cdcbf2b5bdf00834b.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/07941943644cca5cb4af9e88a7839d70.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/91e8135a9455ae02f5aa5e656f75e423.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/27/c3ea700365f3f323a25348f6af96b706.jpeg" />
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
                            <img src="https://riviu.vn/images/no_avatar.webp" />
                        </div>
                        <div className={cx('info_user')}>
                            <div className={cx('info_user__name')}>
                                <h4 className={cx('user_name__text')}>Thanh Phat Le</h4>
                                <img
                                    className={cx('user_name__thumbnail')}
                                    src="https://static.riviu.co/image/2020/10/16/98ccac75abcf94694b688eaddbbfebbe.png"
                                />
                            </div>
                            <div className={cx('info_user__time')}>01:13 ngày 23/04/2020</div>
                        </div>
                    </div>
                    <div className={cx('info_data__Rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon_start')} />
                        <span className={cx('data_post')}>5.0 </span>
                        <span className={cx('data_point')}>/5 điểm</span>
                    </div>
                    <a href="" className={cx('info_item__title')}>
                        <h3 className={cx('item__title')}>Cách làm món cá chiên rất dễ mà ăn mềm ngon cực kỳ!</h3>
                    </a>
                    <div className={cx('info_item__desc')}>
                        <p>
                            Nếu trong nhà có trẻ nhỏ, bạn nhất định đừng bỏ qua cách chiên cá siêu ngon này nhé! Nguyên
                            liệu: - 300g cá phi lê - 1 quả trứng - Một ít bột mì - Một ít muối, hạt tiêu - 1 quả ớt sừng
                            (tùy thích) - Dầu ăn
                        </p>
                        {/* <span className={cx('see_more')}>Xem Thêm</span> */}
                    </div>
                    <div className={cx('info_item__media')}>
                        <div className={cx('info_item__list')}>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/fc9b664ab3e99f09e49b6d9268b13876.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/75040e566d9558c638b175fbce795953.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/869838ecdcc7e35af3fc996ac6793e5a.jpeg" />
                            </div>
                            <div className={cx('item_media__item')}>
                                <img src="https://static.riviu.co/320/image/2020/04/23/fd6cedf6bbecc6ad98b9ec76293c3810.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('info_item__action')}>
                        <div className={cx('item_action__like')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('like_icon')} />
                        </div>
                        <div className={cx('item_action__like_point')}>1</div>
                        <i className={cx('comment_icon')}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserVNFood;
